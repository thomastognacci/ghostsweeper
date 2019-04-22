import React from "react";
import PropTypes from "prop-types";

import {StyledGrid} from "./style";
import Cell from "../Cell/";

let timeoutIDs = [];
class Grid extends React.PureComponent {
  state = {
    grid: [],
    ghostAmount: this.props.ghostAmount,
    cols: this.props.cols,
    rows: this.props.rows,
    cellRevealedCount: 0,
  };

  make2DArray = (cols, rows) => {
    const arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  };

  generateGrid = () => {
    const {cols, rows, ghostAmount} = this.state;

    const grid = this.make2DArray(cols, rows);
    let options = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i;
        let y = j;
        options.push([x, y]);

        grid[x][y] = {
          key: j + x * cols,
          revealed: false,
          ghost: false,
          mineCount: 0,
          x,
          y,
        };
      }
    }

    const gridWithMine = this.placeGhosts(ghostAmount, grid, options);
    const gridWithCounter = this.countGhosts(gridWithMine);

    this.setState({grid: gridWithCounter});
  };

  placeGhosts = (amount, grid, options) => {
    let gridWithMine = grid;

    for (let i = 0; i < amount; i++) {
      let index = Math.floor(Math.random() * options.length);
      let pick = options[index];
      let x = pick[0];
      let y = pick[1];

      gridWithMine[x][y].ghost = true;

      options.splice(index, 1);
    }

    return gridWithMine;
  };

  countGhosts = (grid) => {
    const {cols, rows} = this.props;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i;
        let y = j;

        if (grid[x][y].ghost) {
          grid[x][y].mineCount = -1;
          continue;
        }
        let counter = 0;
        for (let xOff = -1; xOff <= 1; xOff++) {
          for (let yOff = -1; yOff <= 1; yOff++) {
            if (x + xOff > -1 && x + xOff < cols && y + yOff > -1 && y + yOff < rows) {
              let neighbour = grid[x + xOff][y + yOff];
              if (neighbour.ghost) {
                counter++;
              }
            }
          }
        }
        grid[x][y].mineCount = counter;
      }
    }

    return grid;
  };

  handleCellClick = (x, y) => {
    const {grid} = this.state;
    const {handleCellRevealedCount} = this.props;

    if (grid[x][y].revealed) return;

    if (grid[x][y].ghost) {
      this.gameOver();
    }
    let newGrid;
    if (grid[x][y].mineCount === 0) {
      return this.revealNeighbor(grid, x, y);
    }

    newGrid = grid;
    newGrid[x][y].revealed = true;
    return this.setState(
      {
        grid: [...newGrid],
      },
      () => handleCellRevealedCount(1)
    );
  };

  gameOver = () => {
    const {grid} = this.state;

    const revealedGrid = grid.map((cols) => {
      return cols.map((cell) => {
        return (cell.revealed = true);
      });
    });

    this.setState({grid: revealedGrid});
  };

  revealNeighbor = (newGrid, x, y) => {
    const {cols, rows, handleCellRevealedCount} = this.props;

    let revealedCount = 0;

    for (let xOff = -1; xOff <= 1; xOff++) {
      for (let yOff = -1; yOff <= 1; yOff++) {
        if (x + xOff > -1 && x + xOff < cols && y + yOff > -1 && y + yOff < rows) {
          let neighbour = newGrid[x + xOff][y + yOff];
          if (!neighbour.revealed && !neighbour.ghost) {
            neighbour.revealed = true;
            revealedCount++;
            if (neighbour.mineCount === 0) {
              timeoutIDs.push(
                setTimeout(() => {
                  requestAnimationFrame(() => this.revealNeighbor(newGrid, x + xOff, y + yOff));
                }, 100)
              );
            }
          }
        }
      }
    }

    return this.setState(
      {
        grid: [...newGrid],
      },
      () => handleCellRevealedCount(revealedCount)
    );
  };

  renderGrid = () => {
    const {grid} = this.state;
    const {handleFlagCount, flagCount, ghostAmount, shouldRestart} = this.props;

    if (grid.length === 0) return;

    return grid.map((cols) => {
      return cols.map((cell) => {
        return (
          <Cell
            key={cell.key}
            x={cell.x}
            y={cell.y}
            ghost={cell.ghost}
            mineCount={cell.mineCount}
            revealed={cell.revealed}
            handleCellClick={this.handleCellClick}
            handleFlagCount={handleFlagCount}
            flagCount={flagCount}
            ghostAmount={ghostAmount}
            shouldRestart={shouldRestart}
          />
        );
      });
    });
  };
  resetGrid = () => {
    const {restartGame} = this.props;

    timeoutIDs.map((id) => clearTimeout(id));
    this.generateGrid();
    restartGame(false);
  };
  componentDidMount() {
    this.generateGrid();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shouldRestart === false && this.props.shouldRestart) {
      this.resetGrid();
    }
  }

  render() {
    const {grid, cols, rows} = this.state;

    return (
      <StyledGrid onClick={this.handleClick} cols={cols} rows={rows}>
        {grid && this.renderGrid()}
      </StyledGrid>
    );
  }
}

Grid.propTypes = {
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
};

export default Grid;
