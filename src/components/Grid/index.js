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
        grid[i][j] = <Cell key={j + i * cols} mine={Math.random() < 0.25} x={j} y={i} />;
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

Grid.propTypes = {
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
};

export default Grid;
