import React from "react";
import PropTypes from "prop-types";

const index = ({flagCount, ghostAmount, cellRevealedCount, totalCellCount}) => {
  return (
    <div>
      <div>Ghost: {ghostAmount}</div>
      <div>
        Flags: {flagCount}/{ghostAmount}
      </div>
      <div>
        Cell Revealed: {cellRevealedCount}/{totalCellCount}
      </div>
      <div>Score : {ghostAmount * cellRevealedCount}</div>
    </div>
  );
};

index.propTypes = {};

export default index;
