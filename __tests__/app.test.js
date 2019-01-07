/* eslint-disable */
import React from 'react';
import Enzyme, { shallow, mount} from 'enzyme';
import App from '../src/app';
import Header from '../src/Header';
import emojisList from '../src/emojisList';

jest.mock('../src/emojisList', ()=>({
  settings: 'someSetting',
}), { virtual: true })

console.log(emojisList);

describe('<App /> component', () => {
  it('Renders a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
//  it('Renders the <Header /> Component', () => {});
});
