import api from '../services/apiService';

class Locations {
  constructor(api) {
    this.api = api;
    this.countries = null;
    this.cities = null;
  }
  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
    ]);

    const [countries, cities] = response;
    this.countries = countries;
    this.cities = cities;

    return response;
  }

  serializeCountries(countries) {
    //{'Country code': {...}}
    return countries.reduce((acc, country)=>{
      acc[country.code]=country;
      return acc;
    },{});
  }

  serializeCities(cities) {
    //{'City name, Country name': {...}}
    return cities.reduce((acc, city)=>{
      acc[city.code]=country;
      return acc;
    },{});
  }

  getCitiesByCountryCode(code) {
    return this.cities.filter(city => city.country_code === code);
  }
}

const locations = new Locations(api);

export default locations;

//{'City,Country': null}
//[{}, {}]
//{'City': {...}=>ci}
