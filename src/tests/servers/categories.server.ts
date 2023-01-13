import {setupServer} from "msw/native";
import {rest} from "msw";
import { categoriesMock } from "../Mocks";

const handler = [
  /** fetch all categories */
  rest.get('https://api.escuelajs.co/api/v1/categories', (req, res, context) => {
    return res(
      context.json(
        categoriesMock
      )
    )
  }),
]

const categoriesServer = setupServer(...handler);
export default categoriesServer