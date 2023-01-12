import {setupServer} from "msw/native";
import {rest} from "msw";

import { productsMocks, productByCategoryMock, singleProductMock, newProduct } from "../Mocks";
import { Product } from "../../models";

const handler = [
  /** fetch Products limit 7 */
  rest.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=7', (req, res, ctx) => {
    return res(
      ctx.json(
        productsMocks
      )
    )
  }),

  /** fetch Products limit 7 */
  rest.get('https://api.escuelajs.co/api/v1/categories/1/products?offset=0&limit=7', (req, res, ctx) => {
    return res(
      ctx.json(
        productByCategoryMock
      )
    )
  }),

  /** fetch Single Product */
  rest.get('https://api.escuelajs.co/api/v1/products/30', (req, res, ctx) => {
    return res(
      ctx.json(
        singleProductMock
      )
    )
  }),

  //delete product
  rest.delete('https://api.escuelajs.co/api/v1/products/95', async (req, res, ctx) => {
    const products = productsMocks.filter(item => item.id !== 95);
    return res(ctx.json(products))
  }),

  /** Create Product*/
  rest.post('https://api.escuelajs.co/api/v1/products/', async (req, res, ctx) => {
    const product: Product = await req.json();
    
    if(product.price <= 0) {
      return res(ctx.status(400, "Request failed with status code 400"));
    }
    return res(
      ctx.json(
        newProduct
      )
    )
  }),
]

const productServer = setupServer(...handler);
export default productServer