import styled from "styled-components";

export const StyledDeleteProduct = styled.div`
  display: flex;
  flex-direction: column;

  .informative {
    font-weight: bold;
    padding-bottom: 1rem;
  }

  button {
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.125rem;
    background: transparent;
    color: black;
    min-height: 2.5rem;
  }

  .delete-button {
    background: black;
    color: rgb(255 255 255 / 1);
  }
`