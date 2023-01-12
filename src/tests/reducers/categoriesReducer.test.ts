
import { store } from '../../redux/store';
import { fetchAllCategories } from '../../services';
import categoriesServer from './../servers/categories.server';

beforeAll(() => {
  categoriesServer.listen()
})

afterAll(() => {
  categoriesServer.close
})

describe('State Categories tests ', () => {

  test('Initial State', () => {
    expect(store.getState().categories.categories.length).toBe(0)
  })

  test('Fetch All Categories', async () => {
    await store.dispatch(fetchAllCategories())
    expect(store.getState().categories.categories.length).toBe(7)
  })

})