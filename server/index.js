const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 3002
const app = express();

const db = require('./models');
const userRouter = require('./src/routes/user/user');
const reportRouter = require('./src/routes/report/report');
const rescueRouter = require('./src/routes/rescue/rescue');

db.sequelize.sync({
    logging: false
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/user', userRouter);
app.use('/api/report', reportRouter);
app.use('/api/rescue', rescueRouter);

app.listen(port, () => {
    console.log(`서버 구동 ${port}`);
});