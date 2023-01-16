import styled from "styled-components";

export const StyledLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.title};

  input {
    margin-bottom: 1rem;
    width: 100%;    
    padding: 1rem;
    background-color: ${p => p.theme.modal};
    color: ${p => p.theme.title}
    
  }

  & .main-button {
    width: 100%;
    margin-bottom: 1rem;
  }

  span {
    cursor: pointer;
  }
`