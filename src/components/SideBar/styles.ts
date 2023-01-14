import styled from "styled-components";
import { medias } from "../../styled";


export const StyledSideBar = styled.div`
    position: fixed;
    background-color: ${(p) => p.theme.body};
    color: ${(p) => p.theme.title};;
    top: 0;
    height: 100%;
    width: 460px;    
    transition: all 0.4s;
    z-index: 1;

    &.left {
        left: 0;
    }

    &.right {
        right: 0;
    }

    .header {
        width: 100%;        
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 0.7rem;
        padding-right: 0.7rem;
        height: 60px;
        border-bottom: 1px solid;        
    }

    .close-icon {
        cursor: pointer;
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs,1));
        width: 22px;
        height: 22px;
        border: 2px solid transparent;
        border-radius: 40px
    }

    .close-icon:after,
    .close-icon:before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 16px;
        height: 2px;
        background: currentColor;
        transform: rotate(45deg);
        border-radius: 5px;
        top: 8px;
        left: 1px
    }

    .close-icon:after {
        transform: rotate(-45deg)
    }
        
    /**When is mobile */
    @media (max-width: ${medias.md}px) {
        width: 300px;    
    }
`