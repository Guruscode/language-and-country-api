const express = require('express');
const router = express.Router();
const { getLanguages, getCountries } = require('../controllers/dataController');

/**
 * @swagger
 * /api/languages:
 *   get:
 *     summary: Retrieve a list of all languages
 *     responses:
 *       200:
 *         description: A list of languages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: Failed to fetch languages
 */
router.get('/languages', getLanguages);

/**
 * @swagger
 * /api/countries:
 *   get:
 *     summary: Retrieve a list of all countries
 *     responses:
 *       200:
 *         description: A list of countries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: Failed to fetch countries
 */
router.get('/countries', getCountries);

module.exports = router;
