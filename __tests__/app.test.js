import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import App from '../src/app';

describe('<App /> component', () => {
  it('Displays the inital 25 emojis after the component mounts', () => {
    const { getByTestId } = render(<App />);
    const emojiList = getByTestId('emojiUl');
    expect(emojiList.children.length).toBe(25);
  });
  it('Typing into the input box filters the list', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('input');
    const emojiList = getByTestId('emojiUl');
    fireEvent.change(input, { target: { value: 'egg' } });
    expect(emojiList.children.length).toBe(2);
    fireEvent.change(input, { target: { value: 'e' } });
    expect(emojiList.children.length).toBe(25);
    fireEvent.change(input, { target: { value: 'eggd' } });
    expect(emojiList.children.length).toBe(0);
  });
  test('Hovering over an emoji displays the text, "Click to copy emoji" and removing the mouse removes the text.', () => {
    const { getByTestId: selectElement } = render(<App />);
    const Grin = selectElement('😁');
    fireEvent.mouseOver(Grin);
    const spanText = selectElement('testSpanText');
    expect(spanText.innerHTML).toBe('Click to copy emoji');
  });
});
