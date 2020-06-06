const express = require('express');
var router = express.Router()
const Currency = require('../models/currency');
const checkLocale = require ('../middleware/checkLocale');

router.get('/list-locales', (req, res) => {
    Currency.filter().execute().then(currencies => {
        return res.status(200).json(Currency.toListLocaleApi(currencies));
    });
});

//TODO:
// Format locale
// find lookalike locale
router.get('/:locale',checkLocale, (req, res) => {
    const locale  = req.locale;
    Currency.get({locale}).then(currency => {
        if (!currency) {
            return res.status(400).json({message: 'The locale has not been found'});
        }
        return res.status(200).json(currency.toApi());
    }).catch(e => {
        return res.status(500).json({message: "a weird error occured"});
    });
});

module.exports = router;