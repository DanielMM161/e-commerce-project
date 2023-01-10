import styled from "styled-components";

export const StyledModal = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  .modal {
    margin: 0 auto;
    max-height: 100vh;
    max-width: 100vw;
    overflow: auto;
    width: 945px;
    z-index: 2;
    width: 400px;
  }

  .modal-header {
    background: white;
    color: black;
    align-items: center;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.5rem - 1px);;
    border-top-right-radius: calc(0.5rem - 1px);;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    padding: 1rem 1rem;

    .button-close {
      background: transparent;
    }
  }

  .modal-content {
    background-clip: padding-box;
    background-color: #fff;
    padding: 2rem;
  }

  .children-container {
    color: black;
    padding: 2rem;
    background-color: white;
  }
`