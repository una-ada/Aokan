/**
 * Character controller
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 * @module controllers/character
 */

/*----- Imports --------------------------------------------------------------*/
import { Client } from "jikan4.js";
const mal = new Client();

/*----- Export Modules -------------------------------------------------------*/
export default {
  /**
   * @function character.search Search for a character by name string.
   * @arg {Express.Request} req HTTP GET Request
   * @arg {Express.Response} res HTTP Response
   * @arg {Express.NextFunction} next Next function in the Express pipeline.
   */
  search: (req, res, next) =>
    mal.characters
      .search(req.params.name)
      .then((results) => res.send(results))
      .catch((err) => next(err)),
};
