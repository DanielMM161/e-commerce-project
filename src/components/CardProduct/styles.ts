import styled from "styled-components";
import { textOpacity } from './../../styled';

const {high, medium, low} = textOpacity

export const StyledCardProduct = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  .image-container {
    position: relative;

    & img {
        width: 100%;
        box-shadow: -7px 8px 20px 0px rgb(${p => p.theme.shadowColor} / 28%);
    }

    .icon-container {
        cursor: pointer;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background:  rgb(199 199 199 / 1);;
        position: absolute;
        bottom: 4px;
        left: 0;

        svg {
            color: white
        }
    }
  }

  .info-container {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;

    .price {
        font-weight: bold;
        opacity: ${high};
    }

    .title {
      opacity: ${medium};
    }
  }
`