import styled from "styled-components";

export const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-bottom: 1rem;
    width: 100%;    
    padding: 1rem;
  }

  & .main-button {
    width: 100%;
    margin-bottom: 1rem;
  }

  span {
    cursor: pointer;
  }
`