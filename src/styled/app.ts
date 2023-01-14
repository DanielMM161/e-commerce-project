import styled from 'styled-components';
import { medias } from './vars';

export const StyledApp = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  background-color: transparent;

  @media (min-width: ${medias.xxl}px) {
    max-width: 80%;
    .container {
      max-width: 80%;
    }
  }

  @media (min-width: ${medias.xl}px) {
    max-width: 90%;
    .container {
        max-width: 90%;
    }
  }
  
  /**When is mobile */
  @media (max-width: ${medias.md}px) {
    max-width: 90%;
  }

`