import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: ${(props) => `repeat(${props.rows}, ${500 / props.rows}px)`};
  grid-auto-columns: ${(props) => `${500 / props.rows}px`};
  justify-content: center;
  align-items: center;

  position: relative;
  width: 500px;
  margin: 10vh auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.25);

  &:before {
    content: "";
    position: absolute;
    pointer-events: none;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/img/bg.png");
    opacity: 0.35;
  }
`;
