import React from "react";
import "./App.css";
import { YoutubeScreen } from "./modules/youtube";
import BasicLayout from "./layouts/basicLayout/BasicLayout";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BasicLayout>
          <YoutubeScreen />
        </BasicLayout>
      </div>
    );
  }
}

export default App;
