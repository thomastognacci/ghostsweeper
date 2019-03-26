import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {StyledCell} from "./style";

class Cell extends PureComponent {
  state = {
    mine: this.props.mine,
    revealed: false,
    counter: undefined,
    x: undefined,
    y: undefined,
  };
  render() {
    const {mine} = this.state;
    return <StyledCell>{mine ? "X" : "0"}</StyledCell>;
  }
}

Cell.propTypes = {};

export default Cell;
