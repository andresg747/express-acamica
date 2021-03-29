const { Router } = require('express');
const router = Router();
const { listCountries, getCountry, getCountriesByRegion } = require('../../controllers');

router.get('/paises', listCountries);

// router.get('/pais/:id', getCountry);

// router.get('/paises/region/:region', getCountriesByRegion);

module.exports = router;
