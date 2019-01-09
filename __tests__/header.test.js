import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/header';

describe('<Header /> Component', () => {
  it('Renders a <div />', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
});
