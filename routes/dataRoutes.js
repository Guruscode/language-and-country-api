const express = require('express');
const router = express.Router();
const { getLanguages, getCountries } = require('../controllers/dataController');

router.get('/languages', getLanguages);
router.get('/countries', getCountries);

module.exports = router;
