const database = require('./db');
const LocaleModel = database.model('locale');

class Locale extends LocaleModel {
    constructor( {locale, locales} ) {
        super();
        this.locale = locale;
        this.locales = locales;
    }
    toApi() {
        let {locale, locales} = this;
        return {locale, locales};
    }

    static toListApi(locales) {
        return locales.map(locale => locale.toApi());
    }

    toLocaleApi() {
        let {locale} = this;
        return locale;
    }

    static toListLocaleApi(locales) {
        return locales.map(locale => locale.toLocaleApi());
    }
}

module.exports = Locale;