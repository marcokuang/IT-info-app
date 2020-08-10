import React from "react";
import LoginPage from "pages/LoginPage";
import HomePage from "pages/HomePage";
import ListPage from "pages/ListPage";
import DetailPage from "pages/DetailPage";
import { Route, HashRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact component={LoginPage} />
        <Route path="/list" exact component={ListPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/detail" exact component={DetailPage} />
      </HashRouter>
    );
  }
}

export default App;
