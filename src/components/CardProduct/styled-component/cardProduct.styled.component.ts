import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCardProduct = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    .image-container {
        position: relative;

        & img {
            width: 100%
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

        .price {
            font-weight: bold;
        }
    }
`