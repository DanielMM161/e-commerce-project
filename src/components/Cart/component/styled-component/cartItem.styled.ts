import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  .image-container {
    width: 40%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .info-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    padding-left: 0.75rem;

    .title-container {
      height: 100%;
    }

    .input-delete-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background: transparent;
      }
  
      input {
        width: 15%;
      }
    }
  }
`