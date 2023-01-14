
import styled  from 'styled-components';
import { medias } from '../../styled/vars';

export const StyledNavBar = styled.header`
  background-color: #252530;
  width: 100%;
  color: ${props => props.theme.title};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.28);
  
  .navbar-container {                
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;    
  }
  
  
  nav {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    li {
      list-style: none;
      cursor: pointer;
      margin-right: 10px;
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }

    .nav-ul {
        align-items: center;
        display: flex;
        padding-left: 10px;
        padding-right: 10px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      display: flex;
      gap: 8px;
    }
  }

  @media (min-width: ${medias.xxl}px) {
    .container {
      max-width: 80%;
    }
  }
  
  @media (min-width: ${medias.xl}px) {    
    .container {
      max-width: 90%;
    }
  }

  /**When is mobile */
  @media (max-width: ${medias.md}px) {
    li span {
      display: none
    }
  }
`