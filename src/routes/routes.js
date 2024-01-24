const express = require('express');
const demoController = require('../controller/demo.js');

const router = express.Router();

router.get('/getdata', demoController.addition);
router.post('/create')

module.exports = router;
