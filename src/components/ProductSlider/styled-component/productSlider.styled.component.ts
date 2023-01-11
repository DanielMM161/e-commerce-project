import styled from "styled-components";


export const StyledProductSlider = styled.div`
    max-width: 75vw;
    position: relative;

    button {
        background: transparent;
        cursor: pointer;
    }

    .button-carrousel {
        transition: all 200ms ease-in-out 25ms;
        background: rgba(0, 0, 0, 0.3);
        color: rgb(218, 218, 218);
        border: none;
        cursor: pointer;
        padding: 1rem;
        opacity: 1;
        border-radius: 0px 0.25rem 0.25rem 0px;
        position: absolute;
        height: 100%;
        top: 0;
    }

    .button-carrousel.left {
        left: 0
    }

    .button-carrousel.right {
        right: 0
    }

    .button-carrousel.right i {
        transform: rotate(180deg);

        &:hover {
            transform: scale(calc(1.16667));
            transform: rotate(180deg);
        }
    }

    .button-carrousel.left i {
        & :hover {
            transform: scale(calc(1.16667));
        }
    }

    .button-carrousel:hover {
        background: rgba(0, 0, 0, 0.6);
        color: rgb(255, 255, 255);
    }

    .carrousel-container {
        display: grid;
        overflow-x: auto;
        grid-auto-flow: column;
        grid-auto-columns: minmax(min(100%, 15rem), 1fr);        
        gap: 4rem;
        scroll-behavior: smooth;

        ::-webkit-scrollbar {
            display: none;
        }
    }
`
export const ArrowIcon = styled.i`
    & {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs,1));
        width: 42px;
        height: 42px;
        border: 2px solid transparent;
        border-radius: 100px
    }

    &:after {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 33px;
        height: 33px;
        border-bottom: 8px solid;
        border-left: 8px solid;
        transform: rotate(45deg);
        left: 6px;
        top: 4px
    }
`