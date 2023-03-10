import styled from "styled-components";

export const StyleHeroImage = styled.div`
    position: relative;

    h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        border: 7px solid;
        border-style: inset;
        padding: 2rem;
        font-style: italic;
        text-transform: uppercase;
    }

    .hero-image {
        box-shadow: -1px 6px 20px 3px rgb(${p => p.theme.shadowColor} / 58%);
    }
`
