import styled from "styled-components";
import { medias } from "../../styled";

export const StyleModal = styled.div`
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
    background-color: ${p => p.theme.modal};
    color: ${p => p.theme.title};
    align-items: center;
    border-bottom: 1px solid #dee2e6;
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
    background-color: ${p => p.theme.modal};
    color: ${p => p.theme.title};
    padding: 2rem;
  }

  /**When is mobile */
  @media (max-width: ${medias.md}px) {
    .modal {
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
    }
    .children-container {
      height: 100%;
    }
  }
`