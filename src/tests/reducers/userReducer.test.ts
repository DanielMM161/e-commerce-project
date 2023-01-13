
import { IUpdateUser, IUserRegister } from '../../models';
import { store } from '../../redux/store';
import { createUser, loginUser, updateUser } from '../../services';


import userServer from '../servers/user.server';

beforeAll(() => {
  userServer.listen()
})

afterAll(() => {
  userServer.close
})

describe('State User Reducer', () => {

  test('Initial State', () => {
    expect(store.getState().user.user).toBeNull()
  })

})

describe('Test User Service', () => {

  
  test('create user', async () => {
    let userRegister: IUserRegister = {
      name: `test`,
      email: "test@mail.com",
      password: "123456",
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
    }

    let value = await store.dispatch(createUser(userRegister))    
    expect(value.payload.name).toBe(userRegister.name)

    userRegister = {
      ...userRegister,
      name: ``
    }
    value = await store.dispatch(createUser(userRegister))    
    expect(store.getState().user.user).toBeNull()
  })

  test('update user', async () => {
    const newFields: IUpdateUser = {
      id: 61,
      email: "newEmail@mail.com",
      fullName: "new Name",
    }

    await store.dispatch(updateUser({email: "newEmail@mail.com", fullName: "new name", id: 61}))      
    expect(store.getState().user.user?.email).toBe(newFields.email)
  })

  test('login user', async () => {
    await store.dispatch(loginUser({email: 'test', password: 'test'}))
    expect(store.getState().user.user).toHaveProperty('name')
  })

  
})