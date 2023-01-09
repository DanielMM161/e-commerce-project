import { Link } from "react-router-dom";
import styled from "styled-components";
import { textLight } from "../../../styles/vars";


export const StyledNavBar = styled.header`
    background-color: #252530;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${textLight};

    .container {        
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }

    nav {
        display: flex;
        justify-content: flex-end;
        width: 50%;
        height: 100%;

        .nav-ul {
            align-items: center;
            display: flex;
            border-right: 1px solid white;
            border-left: 1px solid white;
            padding-left: 10px;
            padding-right: 10px;
        }

        a, span {
            cursor: pointer;
            margin-right: 10px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px
        }
    }
`

export const Logo = styled(Link)`
    display: flex;
    justify-content: flex-start;
    width: 50%;
`

