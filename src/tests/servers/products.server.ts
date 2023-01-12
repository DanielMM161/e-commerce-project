import {setupServer} from "msw/native";
import {rest} from "msw";
import { productsFake } from "../fakeData";

const handler = [
  rest.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=5', (req, res, context) => {
    return res(
      context.json(
        productsFake
      )
    )
  })
]

const productServer = setupServer(...handler);
export default productServer