import React from "react";
import PropTypes from "prop-types";

import {StyledGrid} from "./style";
import Cell from "../Cell/";

class Grid extends React.PureComponent {
  state = {
    grid: [],
    cols: 5,
    rows: 5,
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
        grid[i][j] = <Cell key={j + i * cols} x={j} y={i} />;
      }
    }

    this.setState({grid});
  };

  renderGrid = () => {
    const {grid} = this.state;

    return grid;
  };
  componentDidMount() {
    this.generateGrid();
  }
  render() {
    const {grid, cols, rows} = this.state;
    return (
      <StyledGrid cols={cols} rows={rows}>
        {grid && this.renderGrid()}
      </StyledGrid>
    );
  }
}

Grid.propTypes = {};

export default Grid;
