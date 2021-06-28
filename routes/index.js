/**
 * Index router
 * @author Una Ada <una@anarchy.website>
 * @version 0.1.1
 * @since 0.1.1
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();
router.get('/', (req, res) => res.render('index'));

/*----- Exports --------------------------------------------------------------*/
export default router;
