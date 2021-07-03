/**
 * User related routes
 * @author Una Ada <una@anarchy.website>
 * @version 2021.07.03
 * @module routes/users
 * @see module:controllers/users
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import usersCtrl from '../controllers/users.js';

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();
router.get('/:user', usersCtrl.getList);
router.use(
  (err, req, res, next) =>
    console.error(err) || res.sendStatus(err.status || 500)
);

/*----- Exports --------------------------------------------------------------*/
export default router;
