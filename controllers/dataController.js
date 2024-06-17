const { getCountriesData } = require('../utils/dataFetch');

const getLanguages = async (req, res) => {
  try {
    const data = await getCountriesData();
    const languages = new Set();

    data.forEach(country => {
      if (country.languages) {
        Object.values(country.languages).forEach(lang => languages.add(lang));
      }
    });

    res.json([...languages]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCountries = async (req, res) => {
  try {
    const data = await getCountriesData();
    const countries = data.map(country => country.name.common);

    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getLanguages, getCountries };
