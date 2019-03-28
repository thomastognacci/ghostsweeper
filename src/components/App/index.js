import React, {Component} from "react";
import Grid from "../Grid";

class App extends Component {
  render() {
    return <Grid cols={5} rows={5} mineAmount={5} />;
  }
}

export default App;
