import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {StyledCell} from "./style";

class Cell extends PureComponent {
  state = {
    flag: false,
    questionMark: false,
  };
  renderCellContent = () => {
    const {flag, questionMark} = this.state;
    const {revealed, ghost, mineCount} = this.props;

    if (revealed) {
      if (ghost) {
        return "👻";
      } else {
        if (mineCount === 0) {
          return "";
        } else {
          return mineCount;
        }
      }
    }
    if (flag) {
      return "✅";
    }
    if (questionMark) {
      return "👀";
    }
  };
  handleFlag = (e) => {
    const {flagCount, ghostAmount} = this.props;
    const {flag, questionMark} = this.state;
    e.preventDefault();
    if (flag) {
      this.setState({flag: false, questionMark: true});
    } else if (questionMark) {
      this.setState({questionMark: false});
    } else {
      if (flagCount >= ghostAmount) {
        this.setState({questionMark: true});
      } else {
        this.setState({flag: true});
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const {handleFlagCount} = this.props;

    if (prevProps.shouldRestart === false && this.props.shouldRestart) {
      this.setState({flag: false});
    }
    if (prevState.flag !== this.state.flag && !this.props.revealed) {
      handleFlagCount(this.state.flag);
    }
  }

  render() {
    const {revealed, ghost, handleCellClick, mineCount, x, y} = this.props;
    let className = "land";
    if (revealed) {
      if (ghost) {
        className = "ghost";
      } else if (mineCount > 0) {
        className = `num-${mineCount}`;
      } else {
        className = "empty";
      }
    }
    return (
      <StyledCell
        revealed={revealed}
        ghost={ghost}
        isNumber={mineCount > 0}
        className={className}
        onClick={() => handleCellClick(x, y)}
        onContextMenu={this.handleFlag}
      >
        {this.renderCellContent()}
      </StyledCell>
    );
  }
}

Cell.propTypes = {};

export default Cell;
