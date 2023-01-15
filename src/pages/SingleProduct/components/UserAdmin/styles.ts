import styled from "styled-components";

export const StyledUserAdmin = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .button-admin {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.125rem;
    background: black;
    color: rgb(255 255 255 / 1);
    min-height: 2.5rem;
    align-items: center;
  }

  .delete-button {
    background: red;
  }
`