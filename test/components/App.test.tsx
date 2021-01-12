import 'jsdom-global/register';

import '../setup';

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import App from '../../src/App';

const mockState = {
  table: {
    region: 'region',
    runtime: 'runtime',
    loading: false,
    error: '',
    data: [
      {
        id: '0',
        name: 'bob',
        email: 'bob@gmail.com',
        phone: '123123',
        website: 'bobne.com',
      },
    ],
  },
};

const mockStore = configureStore([thunk]);

describe('<App />', () => {
  it('The componnent renders without issue', () => {
    const store = mockStore(mockState);
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).to.exist;
  });

  it('Component renders inputs based on table state', () => {
    const store = mockStore(mockState);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find('input').length).to.equal(4);
  });

  it('Component renders get users button', () => {
    const store = mockStore(mockState);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find('button').length).to.equal(1);
  });

  it('Component renders get users button', () => {
    const store = mockStore(mockState);
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find('.aws').length).to.equal(2);
  });
});
