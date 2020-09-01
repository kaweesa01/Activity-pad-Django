import React, { Fragment } from "react";
import "../style/style.css";
import TopSection from "./TopSection";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="container">
          <TopSection />
        </div>
      </Fragment>
    </Provider>
  );
}

ReactDom.render(<App />, document.getElementById("app"));

export default App;
