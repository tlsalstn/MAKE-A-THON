const express = require('express');

const auth = require('../../middleware/middleware');
const Ctrl = require('./user.ctrl');

const router = express.Router();

router.post('/', Ctrl.signIn);
router.post('/login', Ctrl.signUp);
router.get('/profile', auth, Ctrl.userInfo);

module.exports = router;