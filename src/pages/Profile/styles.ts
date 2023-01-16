import styled from "styled-components";
import { medias } from "../../styled";

export const StyledProfile = styled.div`
  padding-bottom: 2rem;
  
  .info-container {
    box-shadow: 1px 1px 18px 1px  rgb(${p => p.theme.shadowColor} / 80%);
    display: flex;
    width: 100%;
    min-height: 500px;
    background: ${p => p.theme.modal};
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    border-width: 1px;

    & > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    form {
      padding-top: 1rem;
      padding-bottom: 4rem;
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(min(100%,21rem),1fr));
      gap: 1%;
      height: 80%;

      input {
        width: 100%;
        padding: 0.5rem;
      }
    }

    .logout-button {
      background: transparent;
      width: 30%;
      color: black;
      border: 1px solid;
    }

    .main-button {
      width: 30%;
    }

    .profile-section {
      width: 100%;
      display: flex;
      justify-content: space-between;

      & div {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%
        }
      }
    }
  }

  @media (min-width: ${medias.xxl}px) {
    .info-container
    form {
      grid-template-columns: repeat(auto-fill,minmax(min(100%,37rem),1fr));
    }
  }
`