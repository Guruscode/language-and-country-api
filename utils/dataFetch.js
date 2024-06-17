const axios = require('axios');
require('dotenv').config();

const getCountriesData = async () => {
  try {
    const response = await axios.get(process.env.RESTCOUNTRIES_API);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from RestCountries API');
  }
};

module.exports = { getCountriesData };
