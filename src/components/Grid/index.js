import React from "react";
import PropTypes from "prop-types";

import {StyledGrid} from "./style";
import Cell from "../Cell/";

class Grid extends React.PureComponent {
  state = {
    grid: [],
    mineAmount: this.props.mineAmount,
    cols: this.props.cols,
    rows: this.props.rows,
  };

  make2DArray = (cols, rows) => {
    const arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  };

  generateGrid = () => {
    const {cols, rows, mineAmount} = this.state;

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
          mine: false,
          mineCount: 0,
          x,
          y,
        };
      }
    }

    const gridWithMine = this.placeMines(mineAmount, grid, options);
    const gridWithCounter = this.countMines(gridWithMine);

    this.setState({grid: gridWithCounter});
  };

  placeMines = (amount, grid, options) => {
    let gridWithMine = grid;

    for (let i = 0; i < amount; i++) {
      let index = Math.floor(Math.random() * options.length);
      let pick = options[index];
      let x = pick[0];
      let y = pick[1];

      gridWithMine[x][y].mine = true;

      options.splice(index, 1);
    }

    return gridWithMine;
  };

  countMines = (grid) => {
    const {cols, rows} = this.props;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i;
        let y = j;

        if (grid[x][y].mine) {
          grid[x][y].mineCount = -1;
          continue;
        }
        let counter = 0;
        for (let xOff = -1; xOff <= 1; xOff++) {
          for (let yOff = -1; yOff <= 1; yOff++) {
            if (x + xOff > -1 && x + xOff < cols && y + yOff > -1 && y + yOff < rows) {
              let neighbour = grid[x + xOff][y + yOff];
              if (neighbour.mine) {
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

    if (grid[x][y].revealed) return;

    let newGrid;
    if (grid[x][y].mineCount === 0) {
      newGrid = this.revealNeighbor(grid, x, y);
    } else {
      newGrid = grid;
      newGrid[x][y].revealed = true;
    }
    this.setState({grid: [...newGrid]});
  };

  revealNeighbor = (grid, x, y) => {
    const {cols, rows} = this.props;

    for (let xOff = -1; xOff <= 1; xOff++) {
      for (let yOff = -1; yOff <= 1; yOff++) {
        if (x + xOff > -1 && x + xOff < cols && y + yOff > -1 && y + yOff < rows) {
          let neighbour = grid[x + xOff][y + yOff];
          if (!neighbour.revealed && !neighbour.mine) {
            neighbour.revealed = true;
            if (neighbour.mineCount === 0) {
              this.revealNeighbor(grid, x + xOff, y + yOff);
            }
          }
        }
      }
    }

    return grid;
  };

  renderGrid = () => {
    const {grid} = this.state;

    if (grid.length === 0) return;

    return grid.map((cols) => {
      return cols.map((cell) => {
        return (
          <Cell
            key={cell.key}
            x={cell.x}
            y={cell.y}
            mine={cell.mine}
            mineCount={cell.mineCount}
            revealed={cell.revealed}
            handleCellClick={this.handleCellClick}
          />
        );
      });
    });
  };
  componentDidMount() {
    this.generateGrid();
  }
  componentDidUpdate() {
    // console.log("up");
    // this.renderGrid();
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
