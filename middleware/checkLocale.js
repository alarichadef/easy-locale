//Middleware allowing to check the locale
module.exports = (req, res, next) => {
    let { locale } = req.params;
    if (!locale) {
        return res.status(400).json({message: 'Missing locale parameter', keyError: 'missingLocale'});
    }
    //TODO
    locale = locale.replace(/\-/g, "_");
    //Just try to format simple locale like fr or fr_FR by setting the first part in lowercase, replace - with _ and second part in uppercase
    if (!locale.match(/_/g)) {
        locale=locale.toLowerCase();
    }
    if (locale.match(/_/g) && locale.match(/_/g).length < 2) {
        locale = locale.split('_');
        locale[0] = locale[0].toLowerCase();
        if (locale.length > 1) {
            locale[1] = locale[1].toUpperCase();
        }
        locale = locale.join('_');
    }
    req.locale = locale;
    return next();
}