// Created by Jason Chiu, 12/12/2017

const router = require('express').Router();
const tlv = require('./tlv');
router.use('/tlv', tlv);
module.exports = router;
