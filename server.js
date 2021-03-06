/**
 * Main server script.
 * @author Una Ada <una@anarchy.website>
 * @version 2021.06.27
 */

/*----- Imports --------------------------------------------------------------*/
import path from 'path';
import createError from 'http-errors';
import express from 'express';
import override from 'method-override';
import logger from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import charRouter from './routes/char.js';

/*----- Initialize -----------------------------------------------------------*/
// Infill for `__dirname`
// see: https://techsparx.com/nodejs/esnext/dirname-es-modules.html
const __dirname = path.dirname(new URL(import.meta.url).pathname),
  app = express();

/*----- Middleware -----------------------------------------------------------*/
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.use(override('_method'));
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*----- Routers --------------------------------------------------------------*/
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/char', charRouter);

/*----- Error Handling -------------------------------------------------------*/
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

/*----- Exports --------------------------------------------------------------*/
export default app;
