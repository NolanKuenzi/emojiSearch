import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/app';

describe('<App /> component', () => {
  it('Renders a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('setDisplay function renders 25 emojis after the component mounts', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('li').length).toBe(25);
    expect(wrapper.state('emojiDisplay').length).toBe(25);
  });
  it('The changeDisplay function filters the emoji display', () => {
    const wrapper = mount(<App />);
    wrapper.find('input').simulate('change', { target: { value: 'egg' } });
    expect(wrapper.state('emojiDisplay').length).toBe(2);
    expect(wrapper.find('li').length).toBe(2);
  });
});
