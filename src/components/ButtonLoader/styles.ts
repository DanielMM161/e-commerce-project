import styled, { keyframes } from "styled-components";
import { medias } from "../../styled";

const loadAnimation = keyframes`
    0% { transform rotate(0deg) }
    50% { transform rotate(180deg); opacity .35; }
    100% { transform rotate(360deg); }    
`

export const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
`

export const StyledButtonLoader = styled.button`
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: .75rem;
    line-height: 1rem;
    text-transform: uppercase;
    width: 30%;
    min-height: 2.5rem;
    border: 1px solid ${p => p.theme.title};
    color: ${p => p.theme.title};

    /**When is mobile */
    @media (max-width: ${medias.md}px) {
        width: 100%;
    }
`

export const StyledLoad = styled.span`
    display: inline-block;
    width: 20px;
	height: 20px;
	border: 5px solid black;
	border-radius: 100%;
    border-top: 5px solid transparent;
	animation: ${loadAnimation} infinite linear 1s;
    color: ${p => p.theme.title}
`

