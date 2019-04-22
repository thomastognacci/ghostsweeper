import styled from "styled-components";

export const StyledHUD = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem;

  .ghost-amount {
    font-size: 1.25em;
  }
  .restart {
    button {
      cursor: pointer;
      appearance: none;
    }
    span {
      font-size: 2em;
    }
  }
  .score {
    font-size: 1.25em;
  }
`;
