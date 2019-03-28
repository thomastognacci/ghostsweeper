import React, {Component} from "react";
import Grid from "../Grid";

class App extends Component {
  render() {
    return <Grid cols={20} rows={20} mineAmount={45} />;
  }
}

export default App;
