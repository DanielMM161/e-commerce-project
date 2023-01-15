import {setupServer} from "msw/native";
import {rest} from "msw";
import { IUpdateUser, IUserRegister } from "../../models";
import { userMock } from "../Mocks/user.mock";


const handler = [

  /** Register user */
  rest.post('https://api.escuelajs.co/api/v1/users/', async (req, res, ctx) => {
    const userRegister: IUserRegister = await req.json();

    const isValuesEmpty = Object.values(userRegister).some(v => v === "");

    if(isValuesEmpty) {
      return res(ctx.status(400, "The values can't be empty"));
    }

    return res(
      ctx.json(userMock)
    )
  }),

  /** Update user */
  rest.put('https://api.escuelajs.co/api/v1/users/61', async (req, res, ctx) => {
    const userUpdate: IUpdateUser = await req.json();

    const newUser = {...userMock}

    newUser.email = userUpdate.email ? userUpdate.email : newUser.email
    newUser.name = userUpdate.fullName ? userUpdate.fullName : newUser.name

    return res(
      ctx.json(newUser)
    )
  }),

  /** Login User */
  rest.post('https://api.escuelajs.co/api/v1/auth/login', async (req, res, ctx) => {    
    return res(
      ctx.json(userMock)
    )
  }),

]

const userServer = setupServer(...handler);
export default userServer