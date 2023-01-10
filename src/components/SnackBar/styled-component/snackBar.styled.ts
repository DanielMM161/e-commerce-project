import styled from "styled-components";

export const StyledSnackBar = styled.div<{error: boolean}>`
    position: absolute;
    left: 1rem;
    padding: 1rem;
    min-width: 20rem;
    min-height: 5rem;    
    bottom: 1rem;
    background:  ${e => (e.error ? "red" : "green")};
    z-index: 3;

    .message-snack {
        padding-bottom: 1rem;
    }

    .button-snack {
        background: white;
        padding: 0.5rem;
        color:  ${e => (e.error ? "red" : "green")};
        text-transform: uppercase;
    }  
`
