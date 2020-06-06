const express = require('express');
var router = express.Router()
const Locale = require('../models/locale');
const checkLocale = require('../middleware/checkLocale');

router.get('/list-locales', (req, res) => {
    Locale.filter().execute().then(locales => {
        return res.status(200).json(Locale.toListLocaleApi(locales));
    });
});

//TODO:
// Format locale
// find lookalike locale
router.get('/:locale', checkLocale, (req, res) => {
    const locale = req.locale;
    Locale.get({locale}).then(locale => {
        if (!locale) {
            return res.status(400).json({message: 'The locale has not been found'});
        }
        return res.status(200).json(locale.toApi());
    }).catch(e => {
        return res.status(500).json({message: "a weird error occured"});
    });
});

module.exports = router;