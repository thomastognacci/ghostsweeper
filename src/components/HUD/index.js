import React from "react";
import PropTypes from "prop-types";
import {StyledHUD} from "./style";

const index = ({flagCount, ghostAmount, cellRevealedCount, restartGame}) => {
  return (
    <StyledHUD>
      <div className="ghost-amount">Ghosts: {ghostAmount - flagCount}</div>

      <div className="restart">
        <button onClick={restartGame}>
          <span role="img" aria-label="restart">
            👻
          </span>
        </button>
      </div>
      <div className="score">Score : {ghostAmount * cellRevealedCount}</div>
    </StyledHUD>
  );
};

index.propTypes = {};

export default index;
