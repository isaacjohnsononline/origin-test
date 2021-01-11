import thunk from 'redux-thunk';
import axios from 'axios';
import configureStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';

import { getTableDataFromAPI } from '../../src/redux/actions/table';
import { expect } from 'chai';

const initialState = [
  {
    id: 0,
    name: 'test',
    email: 'test@email.com',
    phone: '0404123456',
    website: 'www.test.com',
  },
];

const apiURL = 'https://jsonplaceholder.typicode.com/users';
const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);

describe('reducers', () => {
  describe('async actions', () => {
    afterEach(() => {
      mock.reset();
      store.clearActions();
    });

    it('fires appropriate events during api call', () => {
      mock.onGet(apiURL).reply(200, initialState);

      const expectedActions = [
        { type: 'SET_LOADING', value: true },
        { type: 'SET_DATA', value: initialState },
        { type: 'SET_LOADING', value: false },
      ];

      return store.dispatch(getTableDataFromAPI() as any).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
    });

    it('handles errors correctly', () => {
      mock.onGet(apiURL).networkError();

      const expectedActions = [
        { type: 'SET_LOADING', value: true },
        { type: 'SET_ERROR', value: 'Network Error' },
        { type: 'SET_LOADING', value: false },
      ];

      return store.dispatch(getTableDataFromAPI() as any).then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
    });
  });
});
