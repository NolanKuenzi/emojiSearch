/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import App from '../src/app';
import Header from '../src/Header';

const egg = ['eslint-disable'];

// import emojisList from '../src/emojisList';
/*
jest.mock('../src/emojisList', ()=>(
  [{title: "Grinning", symbol: "😀", keywords: "grinning face happy smiley emotion emotion"},
  {title: "Grimacing", symbol: "😬", keywords: "grimacing face silly smiley emotion emotion selfie selfie"}]),
  { virtual: true })
*/

describe('<App /> component', () => {
  it('Renders a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('25 emojis are initially rendered', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('emojiDisplay').length).toBe(25);
  });
  it('Typing into the input filters the emoji list', () => {
    const wrapper = mount(<App />);
    wrapper.find('input').simulate('change', { target: { value: 'egg' } });
    expect(wrapper.state('emojiDisplay').length).toBe(2);
  });
});
