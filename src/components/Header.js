import React from "react";

const Header = (props) => {
  const {text,handleRefreshPage} = props;
  return (
    <header className="App-header" >
      <h2 onClick={()=> handleRefreshPage() }>{text}</h2>
    </header>
  );
};

export default Header;
