/**
 * Index router
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 * @since 2021.06.27
 */

/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';

/*----- Routes ---------------------------------------------------------------*/
const router = new Router();
router.get('/', (req, res) => res.send(['Placeholder', 'uwu']));

/*----- Exports --------------------------------------------------------------*/
export default router;
