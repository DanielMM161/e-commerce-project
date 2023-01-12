import {setupServer} from "msw/native";
import {rest} from "msw";
import { productsMocks, productByCategoryMock, singleProductMock } from "../Mocks";

const handler = [
  /** fetch Products limit 73 */
  rest.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=7', (req, res, context) => {
    return res(
      context.json(
        productsMocks
      )
    )
  }),

  /** fetch Products limit 7 */
  rest.get('https://api.escuelajs.co/api/v1/categories/1/products?offset=0&limit=7', (req, res, context) => {
    return res(
      context.json(
        productByCategoryMock
      )
    )
  }),

  /** fetch Single Product */
  rest.get('https://api.escuelajs.co/api/v1/products/30', (req, res, context) => {
    return res(
      context.json(
        singleProductMock
      )
    )
  }),

  //delete product
  rest.delete('https://api.escuelajs.co/api/v1/products/95', async (req, res, context) => {
    const products = productsMocks.filter(item => item.id !== 95);
    return res(context.json(products))
  }),
]

const productServer = setupServer(...handler);
export default productServer