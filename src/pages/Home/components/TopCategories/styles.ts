import styled from "styled-components";
import { medias, title } from "../../../../styled";


export const StyledTopCategories = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    color: ${(props) => props.theme.title};

    h2 {
      ${title}
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;        
      line-height: 1.75rem;

      span {
        font-size: .75rem;
        line-height: 2;
      }
    }

    .categories-container {
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(min(100%, 10rem), 1fr));        
      gap: 10px;
      padding-top: 1.5rem;
      max-height: 720px;
    }

    .categories-container 
    .category-item {        
      display: flex;
      flex-direction: column;

      h5 {
          padding-top: 1rem;
          font-size: clamp(.5em, 1.5em, 2em);
          font-weight: 400;
      }
      a {
          max-height: 75%;
      }
      a img {
          width: 100%;
          height: 100%;
      }
      img {
          box-shadow: -4px 5px 11px 1px rgb(0 0 0 / 28%);
      }
    }

    /**When is mobile */
    @media (max-width: ${medias.md}px) {
      .categories-container {
          grid-template-columns: repeat(auto-fit,minmax(min(100%, 8rem), 1fr));           
          gap: 30px;
          max-height: fit-content;
      }
      a {
          height: 100%;
      }
    }
`