import styled from "styled-components";

export const StyledRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    padding: .75rem;
  }

  .input-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: .75rem;
  }

  .input-email {
    width: 100%;
  }

  .input {
    width: 48%;
  }

  & .main-button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  & span {
    cursor: pointer;
  }
`