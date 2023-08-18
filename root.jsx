import React from "react";
import Header from "./Header";
import Main from "./Main";

class Root extends React.Component {
  render() {
      return <>
          <Header />
          <Main />
      </>;
  }
}

export default Root