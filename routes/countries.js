const express = require('express');
var router = express.Router()
const Country = require('../models/country');
const checkLocale = require ('../middleware/checkLocale');

router.get('/list-locales', (req, res) => {
    Country.filter().execute().then(countries => {
        return res.status(200).json(Country.toListLocaleApi(countries));
    });
});

//TODO:
// Format locale
// find lookalike locale
router.get('/:locale', checkLocale, (req, res) => {
    const locale = req.locale;

    Country.get({locale}).then(country => {
        if (!country) {
            return res.status(400).json({message: 'The locale has not been found'});
        }
        return res.status(200).json(country.toApi());
    }).catch(e => {
        return res.status(500).json({message: "a weird error occured"});
    });
});

module.exports = router;