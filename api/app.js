const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:8080', 'https://e-baron.github.io'],
};

const adminsRouter = require('./routes/admins');
const authsRouter = require('./routes/auths');
const productsRouter = require('./routes/products');
const quizzRouter = require('./routes/quizz');
const usersRouter = require('./routes/users');
const brandsRouter = require('./routes/brands');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use('/admin', adminsRouter);
app.use('/auths', authsRouter);
app.use('/products', productsRouter);
app.use('/quizz', quizzRouter);
app.use('/user', usersRouter);
app.use('/brands', brandsRouter);

module.exports = app;
