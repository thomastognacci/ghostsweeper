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
  user-select: none;

  transition: background-color 0.3s;

  &.land {
    background-color: #4caf50;

    &:hover {
      background-color: #bdbdbd;
      transition: background-color 0.05s;
    }
  }
  &.empty {
    background-color: #795548;
  }
  &.mine {
    background-color: #ffffff;
  }
  &.num-1 {
    background-color: #8bc34a;
  }
  &.num-2 {
    background-color: #cddc39;
  }
  &.num-3 {
    background-color: #ffeb3b;
  }
  &.num-4 {
    background-color: #ffc107;
  }
  &.num-5 {
    background-color: #ff9800;
  }
  &.num-6 {
    background-color: #ff5722;
  }
  &.num-7 {
    background-color: #e91e63;
  }
  &.num-8 {
    background-color: #673ab7;
    color: white;
  }
`;
