const database = require('./db');
const CountryModel = database.model('country');

class Country extends CountryModel {
    constructor( {locale, countries} ) {
        super();
        this.locale = locale;
        this.countries = countries;
    }
    toApi() {
        let {locale, countries} = this;
        return {locale, countries};
    }

    static toListApi(countries) {
        return countries.map(country => country.toApi());
    }

    toLocaleApi() {
        let {locale} = this;
        return locale;
    }

    static toListLocaleApi(countries) {
        return countries.map(country => country.toLocaleApi());
    }
}

module.exports = Country;