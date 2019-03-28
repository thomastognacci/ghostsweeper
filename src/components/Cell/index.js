import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {StyledCell} from "./style";

class Cell extends PureComponent {
  render() {
    const {revealed, mine, handleCellClick, mineCount, x, y} = this.props;
    let className = "land";
    if (revealed) {
      if (mine) {
        className = "mine";
      } else if (mineCount > 0) {
        className = `num-${mineCount}`;
      } else {
        className = "empty";
      }
    }
    return (
      <StyledCell
        revealed={revealed}
        mine={mine}
        isNumber={mineCount > 0}
        className={className}
        onClick={() => handleCellClick(x, y)}
      >
        {revealed ? (mine ? "👻" : mineCount === 0 ? "" : mineCount) : ""}
      </StyledCell>
    );
  }
}

Cell.propTypes = {};

export default Cell;
