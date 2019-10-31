const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const env = process.env.NODE_ENV || 'development';
const { PORT } = require("./config/config.json")[env];
const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('서버 구동 3002PORT');
});