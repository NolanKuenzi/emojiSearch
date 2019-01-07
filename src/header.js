import React from 'react';

const Header = props => {
  const { ...items } = props;
  return (
    <div>
      <div id="hDiv">
        <br />
        <div id="hDiv1">
          {items.emoji1}
          <br />
          <br />
          {items.emoji2}
        </div>
        <h1>Emoji Search</h1>
        <br />
        <div id="hDiv2">
          {items.emoji3}
          <br />
          <br />
          {items.emoji4}
        </div>
        <br />
      </div>
    </div>
  );
};
export default Header;
