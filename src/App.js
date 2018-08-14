import React, { Component } from "react";
import LargeList from "./components/LargeList";
import { Provider } from "react-redux";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <LargeList />
        </div>
      </Provider>
    );
  }
}

export default App;
