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
    z-index: 20;

  .modal {
    margin: 0 auto;
    max-height: 100vh;
    max-width: 100vw;
    overflow: auto;
    width: 945px;
    z-index: 21;
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
  }

  .modal-content {
    background-clip: padding-box;
    background-color: #fff;
    padding: 2rem;
  }

  .close-icon {
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
    border: 2px solid;
    border-radius: 40px;
    background: transparent;
  }

  .close-icon::after,
  .close-icon::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 12px;
      height: 2px;
      background: currentColor;
      transform: rotate(45deg);
      border-radius: 5px;
      top: 8px;
      left: 3px
  }

  .close-icon::after {
      transform: rotate(-45deg)
  }
`