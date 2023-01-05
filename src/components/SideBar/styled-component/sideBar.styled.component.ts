import styled from "styled-components";

export const StyledSideBar = styled.div`
    position: absolute;
    background-color: white;
    color: black;
    top: 0;
    left: 0;
    height: 100vh;
    width: 460px;    
    transition: all 0.4s;

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
`