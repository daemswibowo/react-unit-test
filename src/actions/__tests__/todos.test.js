import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import {GET, getTodos} from '../todos';
import {client} from '../../store';
import fetchMock from 'fetch-mock';

const middlewares =  [thunk, axiosMiddleware(client)];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Async todos', () => {
  it(`Creates ${GET} & ${GET}_SUCCESS when fetching todos`, () => {
    fetchMock.getOnce('/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedAction = [GET, `${GET}_SUCCESS`];

    return store.dispatch(getTodos()).then(res => {
      expect(
        store.getActions().find(a => expectedAction.includes(a.type))
      ).toBeDefined();
    });
  });
})
