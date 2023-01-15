import styled from "styled-components";
import { medias } from "../../styled";

export const StyledProductPage = styled.div`

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

`