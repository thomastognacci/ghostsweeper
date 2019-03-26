import styled from "styled-components";

export const StyledGrid = styled.div`
  margin: 15%;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.cols}, 50px)`};
  grid-auto-rows: 50px;
  justify-content: center;
  align-items: center;

  > div:nth-child(odd) {
    background: #0080003b;
  }
  > div:nth-child(even) {
    background: #ff00003d;
  }
`;
