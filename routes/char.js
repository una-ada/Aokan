/**
 * Character related routes
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 * @module routes/char
 * @see module:controllers/char
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import charCtrl from '../controllers/char.js';

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();
router.get('/search/:name', charCtrl.search);
router.use(
  (err, req, res, next) =>
  console.error(err) || res.sendStatus(err.status || 500)
);

/*----- Exports --------------------------------------------------------------*/
export default router;
