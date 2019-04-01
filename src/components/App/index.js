import React, {Component} from "react";
import Grid from "../Grid";
import HUD from "../HUD";
import {StyledApp} from "./style";

const difficulty = {easy: 30, medium: 45, hard: 60};
class App extends Component {
  state = {
    ghostAmount: difficulty.easy,
    flagCount: 0,
    cols: 15,
    rows: 15,
    cellRevealedCount: 0,
  };

  handleFlagCount = (flag) => {
    const {flagCount} = this.state;
    let newFlagCount = flagCount;
    if (!flag) {
      newFlagCount++;
    } else {
      newFlagCount--;
    }
    this.setState({flagCount: newFlagCount});
  };

  handleCellRevealedCount = (count) => {
    this.setState((prevState) => ({cellRevealedCount: prevState.cellRevealedCount + count}));
  };

  render() {
    const {cols, rows, flagCount, ghostAmount, cellRevealedCount} = this.state;

    return (
      <StyledApp>
        <HUD
          ghostAmount={ghostAmount}
          flagCount={flagCount}
          cellRevealedCount={cellRevealedCount}
          totalCellCount={cols * rows}
        />
        <Grid
          flagCount={flagCount}
          handleFlagCount={this.handleFlagCount}
          handleCellRevealedCount={this.handleCellRevealedCount}
          cols={cols}
          rows={rows}
          ghostAmount={ghostAmount}
        />
      </StyledApp>
    );
  }
}

export default App;
