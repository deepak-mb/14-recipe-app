import React, { Component } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";

//Components
import Navbar from "./components/layout/Navbar";
import Recipies from "./components/recipies/Recipies";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Navbar />
          <Recipies />
        </div>
      </Provider>
    );
  }
}

export default App;
