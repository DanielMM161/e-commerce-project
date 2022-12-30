import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledBreadCrums = styled.div`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    span {
        font-size: 1.3rem;
    }
`

export const StyledLinks = styled(Link)`
    font-size: 1.5rem;

`

export const IconHouse = styled(Link)`
    & {
        background:
            linear-gradient(to left,
                currentColor 5px,transparent 0)
                no-repeat 0 bottom/4px 2px,
            linear-gradient(to left,
                currentColor 5px,transparent 0)
                no-repeat right bottom/4px 2px;
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs,1));
        width: 18px;
        height: 17px;
        border: 2px solid;
        border-top: 0;
        border-bottom: 0;
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        margin-bottom: -2px
    }
    &:after,
    &:before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute
    }
    &:before {
        border-top: 2px solid;
        border-left: 2px solid;
        border-top-left-radius: 4px;
        transform: rotate(45deg);
        top: -5px;
        border-radius: 3px;
        width: 14px;
        height: 14px;
        left: 0
    }
    &:after {
        width: 8px;
        height: 10px;
        border: 2px solid;
        border-radius: 100px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 0;
        left: 3px;
        bottom: 0
    }
`

