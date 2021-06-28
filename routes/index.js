/**
 * Index router
 * @author Una Ada <una@anarchy.website>
 * @version 2021.06.27
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();
router.get('/', (req, res) => res.render('index'));

/*----- Exports --------------------------------------------------------------*/
export default router;
