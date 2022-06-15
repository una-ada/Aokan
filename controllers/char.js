/**
 * Character controller
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 * @module controllers/char
 * @see module:routes/char
 */

/*----- Imports --------------------------------------------------------------*/
//import Jikan from "jikan4.js";
import fetch from "cross-fetch";
import {
  ApolloClient,
  ApolloError,
  HttpLink,
  InMemoryCache,
} from "@apollo/client/core/index.js";
import { loadDocuments } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

//const mal = new Jikan.Client();
const aniList = new ApolloClient({
    link: new HttpLink({
      uri: "https://graphql.anilist.co/",
      fetch,
    }),
    cache: new InMemoryCache(),
  }),
  queries = await loadDocuments("./queries/characterSearch.graphql", {
    loaders: [new GraphQLFileLoader()],
  });

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
        query: queries[0].document,
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
