import styled from "styled-components";


export const StyledTopCategories = styled.div`
    display: flex;
    flex-direction: column;
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
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(min(100%, 15rem), 1fr));        
        gap: 10px;
        margin-top: 2%;
    }

    .categories-container div {
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