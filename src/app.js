import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import emojisList from './emojisList.json';
import Header from './header';

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

  mouseOverFunc = event => {
    const node = document.createElement('span');
    node.setAttribute('id', 'spanText');
    const copyText = document.createTextNode('Click to copy emoji');
    node.appendChild(copyText);
    event.target.appendChild(node);
    event.target.style.backgroundColor = 'grey';
  };

  mouseLeaveFunc = event => {
    event.target.removeChild(event.target.lastChild);
    event.target.style.backgroundColor = 'white';
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

  render() {
    const { ...display } = this.state;
    return (
      <div>
        <Header
          emoji1={emojisList[235].symbol}
          emoji2={emojisList[77].symbol}
          emoji3={emojisList[81].symbol}
          emoji4={emojisList[217].symbol}
        />
        <div id="inputDiv">
          <input
            id="input"
            type="text"
            placeholder="Search for an Emoji"
            onChange={this.changeDisplay}
          />
          <div id="emojiDiv">
            <ul>{display.emojiDisplay}</ul>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
