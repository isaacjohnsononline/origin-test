import 'jsdom-global/register';

import sinon from 'sinon';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import '../setup';
import EditableCell from '../../src/components/EditableCell';

describe('<EditableCell />', () => {
  it('The componnent renders without issue', () => {
    const wrapper = shallow(<EditableCell index={0} initialValue='test' dispatch={() => {}} label='test' />);
    expect(wrapper).to.exist;
  });

  it('Handles onChange and dispatches appropriate action', () => {
    const fakeDispatch = sinon.spy();

    const wrapper = mount(<EditableCell index={0} initialValue='test' dispatch={fakeDispatch} label='test' />);
    const input = wrapper.find('input');
    input.simulate('change', {});

    wrapper.update();

    expect(fakeDispatch.calledOnce).to.be.true;
  });
});
