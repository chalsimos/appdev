const express = require('express');
const router = express.Router();
const paroda = require('../controller/ParodaController');

router.get('/',paroda.spicy);


module.exports = router;