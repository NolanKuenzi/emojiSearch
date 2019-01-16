import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Header from './header';
import emojisList from './emojisList.json';

class App extends React.Component {
  componentDidMount() {
    this.setDisplay(emojisList);
  }

  setDisplay = input => {
    if (input.length > 25) {
      input = input.slice(0, 25);
    }
    this.setState({
      emojiDisplay: input.map(item => (
        <CopyToClipboard
          id={item.title}
          data-testid={item.symbol}
          text={item.symbol}
          key={item.title + Math.floor(Math.random() * Math.floor(5000))}
        >
          <li
            onMouseOver={this.mouseOverFunc}
            onFocus={this.mouseOverFunc}
            onMouseOut={this.mouseLeaveFunc}
            onBlur={this.mouseLeaveFunc}
          >
            {item.symbol} {item.title}
          </li>
        </CopyToClipboard>
      )),
    });
  };

  changeDisplay = event => {
    if (event.target.value === '') {
      this.setDisplay(emojisList);
      return;
    }
    let findEmoji = [...emojisList];
    findEmoji = findEmoji.filter(
      item => item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1,
    );
    this.setDisplay(findEmoji);
  };

  mouseOverFunc = event => {
    const node = document.createElement('span');
    node.setAttribute('id', 'spanText');
    node.setAttribute('data-testid', 'testSpanText');
    const copyText = document.createTextNode('Click to copy emoji');
    node.appendChild(copyText);
    event.target.appendChild(node);
    event.target.style.backgroundColor = 'grey';
  };

  mouseLeaveFunc = event => {
    event.target.removeChild(event.target.lastChild);
    event.target.style.backgroundColor = 'white';
  };

  render() {
    const { ...display } = this.state;
    return (
      <div data-testid="headerDiv">
        <Header
          emoji1={emojisList[235].symbol}
          emoji2={emojisList[77].symbol}
          emoji3={emojisList[81].symbol}
          emoji4={emojisList[217].symbol}
        />
        <div id="inputDiv">
          <input
            id="input"
            data-testid="input"
            type="text"
            placeholder="Search for an Emoji"
            onChange={this.changeDisplay}
          />
          <div id="emojiDiv">
            <ul data-testid="emojiUl">{display.emojiDisplay}</ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
