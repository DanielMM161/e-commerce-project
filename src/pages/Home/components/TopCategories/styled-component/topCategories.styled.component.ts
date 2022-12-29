import styled from "styled-components";


export const StyledTopCategories = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: 1rem;
    padding-top: 1rem;

    h4 {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-size: 1.25rem;
        line-height: 1.75rem;

        span {
            font-size: .75rem;
            line-height: 2;
        }
    }

    .categories-container {
        width: 100%;
        flex-wrap: wrap;
        gap: 4px;
        display: inline-flex;
        margin-top: 2%;
    }

    .categories-container div {
        width: 24%;
        height: 34px;
        display: flex;
        margin-bottom: 1rem;
        justify-content: center;
        align-items: center;    

        a {
            font-size: .875rem;
            line-height: 1.25rem;
            padding: 1rem;
            width: 100%;
            background-color: #FFFFFF;
        }
    }
`