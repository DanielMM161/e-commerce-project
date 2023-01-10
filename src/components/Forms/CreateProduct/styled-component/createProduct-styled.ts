import styled from "styled-components";

export const StyledCreateProduct = styled.form`
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    padding: 1rem;
  }

  input {
    margin-bottom: 1rem;
    width: 100%;
    height: 2.5rem;
    padding: 1rem;
  }

  .price-category-container {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;

    input {
      height: 1.5rem;
      width: 50%;
    }

    select {
      padding: 0.5rem;
    }

    .price-container {
      width: 100%;
    }
  }

  button {
    margin: 0 auto;
  }

`