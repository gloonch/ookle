const express = require('express');
const markerController = require('../controller/MarkerController');

const router = express.Router()

router.get('/', markerController.getAll)
router.post('/', markerController.create)

module.exports = router;