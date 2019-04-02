import React from "react";
import PropTypes from "prop-types";

const index = ({flagCount, ghostAmount, cellRevealedCount, totalCellCount, restartGame}) => {
  return (
    <div>
      <div>Ghost: {ghostAmount - flagCount}</div>
      <div>
        Cell Revealed: {cellRevealedCount}/{totalCellCount}
      </div>
      <div>Score : {ghostAmount * cellRevealedCount}</div>
      <button onClick={restartGame}>
        <span role="img" aria-label="restart">
          👻
        </span>
      </button>
    </div>
  );
};

index.propTypes = {};

export default index;
