import styled from "styled-components";

export const StyledButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 1.5rem;

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

    .filter-icon,
    .filter-icon::after,
    .filter-icon::before {
        display: block;
        box-sizing: border-box;
        height: 2px;
        border-radius: 4px;
        background: currentColor
    }
    .filter-icon {
        position: relative;
        transform: scale(var(--ggs,1));
        width: 8px
    }
    .filter-icon::after,
    .filter-icon::before {
        content: "";
        position: absolute
    }
    .filter-icon::before {
        width: 12px;
        top: -4px;
        left: -2px
    }
    .filter-icon::after {
        width: 4px;
        top: 4px;
        left: 2px
    }

    .add-icon {
        box-sizing: border-box;
        position: relative;
        display: block;
        width: 22px;
        height: 22px;
        border: 2px solid;
        transform: scale(var(--ggs,1));
        border-radius: 4px
    }
    .add-icon::after,
    .add-icon::before {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        width: 10px;
        height: 2px;
        background: currentColor;
        border-radius: 5px;
        top: 8px;
        left: 4px
    }
    .add-icon::after {
        width: 2px;
        height: 10px;
        top: 4px;
        left: 8px
    }
`

export const StyledProducts = styled.div`
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(min(100%, 15rem),1fr));
    gap: 10px;
`