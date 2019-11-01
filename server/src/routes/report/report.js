const express = require('express');
const multer = require('multer');
const path = require('path');

const auth = require('../../middleware/middleware');
const Ctrl = require('./report.ctrl');

const router = express.Router();

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'public/');
      },
      filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const basename = path.basename(file.originalname, ext);
        cb(null, basename + new Date().valueOf() + ext);
      }
    }),
});

router.get('/', auth, Ctrl.AllData);
router.post('/', auth, upload.single('image'), Ctrl.Report);
router.patch('/changeState/:id', auth, Ctrl.State);

module.exports = router;