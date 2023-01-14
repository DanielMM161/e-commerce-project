import styled from 'styled-components';
import { medias } from './vars';

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;

  .hero-image {
    width: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.28);
    object-fit: cover;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 70%;
  }

  @media (max-width: ${medias.xxl}px) {
    .container {
       max-width: 80%;
    }
    .navbar-container {
      max-width: 80%;
    }
  }

  @media (max-width: ${medias.xl}px) {
    .container {
      max-width: 90%;
    }
    .navbar-container {
        max-width: 90%;
    }
  }
  
  /**When is mobile */
  @media (max-width: ${medias.md}px) {
    .container {
      max-width: 90%;
    }
  }

`