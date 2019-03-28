import styled from "styled-components";

export const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  height: 100%;
  width: 100%;
  border: ${(props) => (props.revealed ? "none" : "1px dashed #6fbd73")};
  cursor: pointer;

  &.land {
    background: #4caf50;
  }
  &.empty {
    background: #795548;
  }
  &.mine {
    background: #ffffff;
  }
  &.num-1 {
    background: #8bc34a;
  }
  &.num-2 {
    background: #cddc39;
  }
  &.num-3 {
    background: #ffeb3b;
  }
  &.num-4 {
    background: #ffc107;
  }
  &.num-5 {
    background: #ff9800;
  }
  &.num-6 {
    background: #ff5722;
  }
  &.num-7 {
    background: #e91e63;
  }
  &.num-8 {
    background: #673ab7;
    color: white;
  }
  &:hover {
    background: #bdbdbd;
  }
`;
