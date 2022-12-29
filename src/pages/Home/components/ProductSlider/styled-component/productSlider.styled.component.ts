import styled from "styled-components";


export const StyledProductSlider = styled.div`
    max-width: 75vw;
    position: relative;

    button {
        background: transparent;
        cursor: pointer;
    }

    button:nth-child(2) i {
        transform: rotate(180deg);
    }
`

export const StyledCarousel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const StyledButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 50%;
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
        width: 40px;
        height: 40px;
        border-bottom: 2px solid;
        border-left: 2px solid;
        transform: rotate(45deg);
        left: 6px;
        top: 4px
    }
`