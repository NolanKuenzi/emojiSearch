/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { App } from '../src/app.js';

describe('<App /> component', () => {
  it('Renders a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
