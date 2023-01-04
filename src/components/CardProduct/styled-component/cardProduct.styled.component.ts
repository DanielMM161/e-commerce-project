import styled from "styled-components";

export const ItemCard = styled.div`
    background-color: white;
    padding: 10px;
    border-radius: 8px;

    .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    .info {
        height: 140px;
        display: flex;
        flex-direction: column;
    }

    .info .span {
        display: block;
        text-align: center;
        color: #1e1e1e;
        padding: 5px;
        border-radius: 10px;
    }

    .info .title {
        font-size: 1rem;
        margin-top: 10px;
    }

    .info .price {
        margin-top: 4px;
        font-size: 1.4rem;
        font-weight: bold;
    }
`

export const StyledButtonCart = styled.button`
    border-radius: 8px;
    width: 100%;
    padding: 6px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    span {
        font-weight: bold;
        font-size: 0.85rem;
    }

    &:hover {
        background-color: black;
        color: white;
    }
`

export const IconCart = styled.i`
    & {
        display: block;
        box-sizing: border-box;
        position: relative;
        transform: scale(var(--ggs,1));
        width: 20px;
        height: 21px;
        background:
            linear-gradient(
                to left,currentColor 12px,
                transparent 0
            )
                no-repeat -1px 6px/18px 2px,
            linear-gradient(
                to left,currentColor 12px,
                transparent 0
            )
                no-repeat 6px 14px/11px 2px,
            linear-gradient(
                to left,currentColor 12px,
                transparent 0
            )
                no-repeat 0 2px/4px 2px,
            radial-gradient(
                circle,currentColor 60%,
                transparent 40%
            )
                no-repeat 12px 17px/4px 4px,
            radial-gradient(
                circle,currentColor 60%,
                transparent 40%
            )
                no-repeat 6px 17px/4px 4px
    }
    &:after,
    &:before {
        content: "";
        display: block;
        position: absolute;
        box-sizing: border-box;
        width: 2px;
        height: 14px;
        background: currentColor;
        top: 2px;
        left: 4px;
        transform: skew(12deg)
    }
    &:after {
        height: 10px;
        top: 6px;
        left: 16px;
        transform: skew(-12deg)
    }
    &:hover {
        color: white;
    }
`