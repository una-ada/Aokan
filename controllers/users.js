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
      .findUser(req.params.user, 'profile')
      .then(user =>
        Promise.all(
          Array.from(
            { length: Math.ceil(user.anime_stats.total_entries / 300) },
            (_, i) => i + 1
          ).map(v =>
            mal.findUser(req.params.user, 'animelist', 'all', {
              page: v,
            })
          )
        )
          .then(pages =>
            res.send(pages.reduce((list, page) => list.concat(page.anime), []))
          )
          .catch(err => next(err))
      )
      .catch(err => next(err)),
};
