/**
 * Character controller
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 * @module controllers/char
 * @see module:routes/char
 */

/*----- Imports --------------------------------------------------------------*/
import {
  ApolloClient,
  ApolloError,
  HttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client/core/index.js";
import fetch from "cross-fetch";
const aniList = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql.anilist.co/",
    fetch,
  }),
  cache: new InMemoryCache(),
});
//import Jikan from "jikan4.js";
//const mal = new Jikan.Client();

/*----- Export Modules -------------------------------------------------------*/
export default {
  /**
   * @function charCtrl.search Search for a character by name string.
   * @arg {Express.Request} req HTTP GET Request
   * @arg {Express.Response} res HTTP Response
   * @arg {Express.NextFunction} next Next function in the Express pipeline.
   */
  search: (req, res, next) =>
    aniList
      .query({
        query: gql`
          query ($search: String) {
            Page {
              characters(search: $search) {
                id
                name {
                  full
                  native
                }
                image {
                  large
                  medium
                }
                description(asHtml: true)
              }
            }
          }
        `,
        variables: {
          search: req.params.name,
        },
      })
      .then((results) => res.json(results))
      .catch((err) => {
        if (err instanceof ApolloError)
          console.log(err?.networkError.result.errors);
        next(err);
      }),
};
