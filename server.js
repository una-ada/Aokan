/**
 * Main server script.
 * @author Una Ada <una@anarchy.website>
 * @version 0.1.0
 * @since 0.1.0
 */

/*----- Imports --------------------------------------------------------------*/
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import override from 'method-override';

/*----- Initialize -----------------------------------------------------------*/
// Infill for `__dirname`
// see: https://techsparx.com/nodejs/esnext/dirname-es-modules.html
const __dirname = path.dirname(new URL(import.meta.url).pathname),
  app = express();

/*----- Middleware -----------------------------------------------------------*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(override('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*----- Routers --------------------------------------------------------------*/

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
