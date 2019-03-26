import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  height: 100%;
  width: 100%;
`;

class Cell extends PureComponent {
  state = {
    mine: this.props.isMine,
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
