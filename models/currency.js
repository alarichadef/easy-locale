const database = require('./db');
const CurrencyModel = database.model('currency');

class Currency extends CurrencyModel {
    constructor( {locale, currencies} ) {
        super();
        this.locale = locale;
        this.currencies = currencies;
    }
    toApi() {
        let {locale, currencies} = this;
        return {locale, currencies};
    }

    static toListApi(currencies) {
        return currencies.map(currency => currency.toApi());
    }

    toLocaleApi() {
        let {locale} = this;
        return locale;
    }

    static toListLocaleApi(currencies) {
        return currencies.map(currency => currency.toLocaleApi());
    }
}

module.exports = Currency;