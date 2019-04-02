import React, {Component} from "react";
import Grid from "../Grid";
import HUD from "../HUD";
import {StyledApp} from "./style";

const difficulty = {
  easy: {cols: 9, rows: 9, ghosts: 10},
  medium: {cols: 16, rows: 16, ghosts: 40},
  hard: {cols: 30, rows: 16, ghosts: 99},
};
class App extends Component {
  state = {
    ghostAmount: difficulty.easy.ghosts,
    flagCount: 0,
    cols: difficulty.easy.cols,
    rows: difficulty.easy.rows,
    cellRevealedCount: 0,
    shouldRestart: false,
  };

  handleFlagCount = (flag) => {
    const {flagCount} = this.state;
    let newFlagCount = flagCount;
    if (flag) {
      newFlagCount++;
    } else {
      newFlagCount--;
    }
    this.setState({flagCount: newFlagCount});
  };

  handleCellRevealedCount = (count) => {
    this.setState((prevState) => ({cellRevealedCount: prevState.cellRevealedCount + count}));
  };

  restartGame = (bool) => {
    this.setState({shouldRestart: bool, cellRevealedCount: 0, flagCount: 0});
  };

  render() {
    const {cols, rows, flagCount, ghostAmount, cellRevealedCount, shouldRestart} = this.state;

    return (
      <StyledApp>
        <HUD
          ghostAmount={ghostAmount}
          flagCount={flagCount}
          cellRevealedCount={cellRevealedCount}
          totalCellCount={cols * rows}
          restartGame={this.restartGame}
        />
        <Grid
          flagCount={flagCount}
          handleFlagCount={this.handleFlagCount}
          handleCellRevealedCount={this.handleCellRevealedCount}
          shouldRestart={shouldRestart}
          cols={cols}
          rows={rows}
          restartGame={this.restartGame}
          ghostAmount={ghostAmount}
        />
      </StyledApp>
    );
  }
}

export default App;
