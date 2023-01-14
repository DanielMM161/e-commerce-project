import styled from "styled-components";
import { medias } from "../../styled";

export const StyledProductPage = styled.div`

  .products-container {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(min(100%, 25rem),1fr));
    gap: 30px;
  }

  .buttons-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 1.5rem;
  }

  .button-filter {
    border: 1px solid;        
    min-height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.125rem;
    text-transform: uppercase;
    text-align: center;
    background: black;
    color: rgb(255 255 255 / 1);
  }

  @media (max-width: ${medias.xxl}px) {
    .products-container {
      grid-template-columns: repeat(auto-fill,minmax(min(100%, 15rem),1fr));
      gap: 25px;
    }
  }

  /**When is mobile */
  @media (max-width: ${medias.md}px) {
    .products-container {
      grid-template-columns: repeat(auto-fit,minmax(min(100%,8rem),1fr));
      gap: 25px;
    }
  }

`