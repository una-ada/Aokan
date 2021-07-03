/**
 * Users controller
 * @author Una Ada <una@anarchy.website>
 * @version 2021.07.03
 * @module controllers/users
 * @see module:routes/users
 */

/*----- Imports --------------------------------------------------------------*/
import Jikan from 'jikan-node';
const mal = new Jikan();

/*----- Export Modules -------------------------------------------------------*/
export default {
  /**
   * @function usersCtrl.getList Get user anime list.
   * @arg {Express.Request} req HTTP GET Request
   * @arg {Express.Response} res HTTP Response
   * @arg {Express.NextFunction} next Next function in the Express pipeline.
   */
  getList: (req, res, next) =>
    mal
      .findUser(req.params.user, 'animelist')
      .then(user => res.send(user))
      .catch(err => next(err)),
};
