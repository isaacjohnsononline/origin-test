import 'jsdom-global/register';
import './setup';

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('<App />', () => {
  it('The componnent renders without issue', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.exist;
  });
});
