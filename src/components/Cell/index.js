import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {StyledCell} from "./style";

class Cell extends PureComponent {
  state = {
    mine: this.props.mine,
    revealed: false || this.props.revealed,
    neighboursCount: undefined,
    x: undefined,
    y: undefined,
  };

  handleReveal = () => {
    this.setState({revealed: true});
  };

  componentDidUpdate = (prevProps) => {
    if (!prevProps.revealed && this.props.revealed) {
      this.handleReveal();
    }
  };
  render() {
    const {revealed} = this.state;
    const {mine, handleCellClick, x, y} = this.props;
    return (
      <StyledCell onClick={() => handleCellClick(x, y)}>
        {revealed ? (mine ? "X" : "0") : "-"}
      </StyledCell>
    );
  }
}

Cell.propTypes = {};

export default Cell;
