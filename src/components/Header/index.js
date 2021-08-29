import React from 'react';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
     <h1 className="m-0 py-3">Brad Smith's React Portfolio</h1>
      {props.children}
    </header>
  );
}

export default Header;