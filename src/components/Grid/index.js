import React from "react";
import PropTypes from "prop-types";

import {StyledGrid} from "./style";
import Cell from "../Cell/";

class Grid extends React.PureComponent {
  state = {
    grid: [],
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
    const {cols, rows} = this.state;

    const grid = this.make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i;
        let y = j;
        grid[x][y] = {
          key: j + x * cols,
          mine: Math.random() < 0.25,
          x,
          y,
        };
      }
    }

    this.setState({grid});
  };

  handleCellClick = (x, y) => {
    const {grid} = this.state;
    console.log("click", x, y);

    const newGrid = grid;

    newGrid[x][y].revealed = true;

    this.setState({grid: [...newGrid]});
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
