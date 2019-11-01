const express = require('express');

const auth = require('../../middleware/middleware');
const Ctrl = require('./rescue.ctrl');

const router = express.Router();

router.get('/rescueCheck/:id', auth, Ctrl.Check);
router.post('/rescueArrival/:id', auth, Ctrl.ArrivalTime);

module.exports = router;