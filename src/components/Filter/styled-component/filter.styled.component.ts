import styled from "styled-components";

export const StyledFilter = styled.div`
    width: 100%;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
    padding-top: 1rem;
    height: 100%;

    .buttons-container {
        width: 100%;
        max-height: 300px;
        overflow: auto;
    }

    .buttons-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
        gap: 10px;
    }

    .button-category {
        padding: 0.5rem;
        border: 1px solid;
        font-size: 0.8rem;
        background: transparent;
    }

    .button-clicked {
        padding: 0.5rem;
        border: 1px solid;
        font-size: 0.8rem;
        background: transparent;
        background-color: black;
        color: white;
    }

    .prices-container {
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
    }

    .prices-item {
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-top: 1px solid;
        border-bottom: 1px solid;
        background: transparent;
        display: flex;
        justify-content: space-between;
    }

    .check-icon {
        box-sizing: border-box;
        position: relative;
        display: block;
        transform: scale(var(--ggs,1));
        width: 22px;
        height: 22px;
        border: 2px solid transparent;
        border-radius: 100px
    }

    .check-icon::after {
        content: "";
        display: block;
        box-sizing: border-box;
        position: absolute;
        left: 3px;
        top: -1px;
        width: 6px;
        height: 10px;
        border-width: 0 2px 2px 0;
        border-style: solid;
        transform-origin: bottom left;
        transform: rotate(45deg)
    }
`

