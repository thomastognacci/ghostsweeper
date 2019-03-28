import styled from "styled-components";

export const StyledGrid = styled.div`
  margin: 15%;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 50px);
  grid-auto-columns: 50px;
  justify-content: center;
  align-items: center;

  > div:nth-child(odd) {
    background: #0080003b;
  }
  > div:nth-child(even) {
    background: #ff00003d;
  }
`;
