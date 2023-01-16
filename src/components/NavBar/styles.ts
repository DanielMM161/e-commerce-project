
import styled  from 'styled-components';
import { medias } from '../../styled/vars';

export const StyledNavBar = styled.header`
  background-color: rgb(97, 17, 34);
  width: 100%;
  color: white;
  box-shadow: 0 5px 15px rgba(${p => p.theme.shadowColor}, 0.28);

  .logo {
    font-weight: bold;
    letter-spacing: 6px;
  }
  
  .navbar-container {           
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;    
    margin: 0 auto;
    max-width: 70%;
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

  /**When is mobile */
  @media (max-width: ${medias.md}px) {
    li span {
      display: none
    }

    .nav-ul {
      gap: 0px;
    }
  }

  /**When is mobile */
  @media (min-width: ${medias.md}px) {
    .nav-ul {
      gap: 60px;
    }
    .logo {
      font-size: .8rem;
    }
  }
`