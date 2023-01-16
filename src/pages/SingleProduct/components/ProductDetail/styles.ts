import styled from "styled-components";
import { medias, textOpacity } from "../../../../styled";

const {high, medium} = textOpacity

export const StylesProductDetail = styled.div`
  display: flex;
  
  .single-img {
    width: 40%;
    margin-right: 50px;
  }

  .small-img-group {
    display: flex;
    justify-content: space-between;
  }

  .small-img-group
  .small-img-col {
    flex-basis: 32%;
    cursor: pointer;
  }

  .main-img {
    box-shadow: 7px 5px 18px 0px rgb(${p => p.theme.shadowColor} / 28%);
  }

  .small-img-col
  img {
    box-shadow: -3px 8px 18px 0px rgb(${p => p.theme.shadowColor} / 28%);
  }

  .single-detail {
    width: 50%;
    padding-top: 30px;
  }

  .single-detail
  h4, h2 {
    padding: 40px 0 20px 0;
  }

  .single-detail
  #title {
    font-size: clamp(1em, 2em, 2.5em);
    opacity: ${high}
  }

  .single-detail
  #category {
    font-size: clamp(.5rem, 1.2rem, 1.7rem);
    opacity: ${medium}
  }

  .single-detail
  #description-title {
    font-size: clamp(.4em, 1.5em, 1.8em);
    opacity: ${high}
  }

  .single-detail
  #description {
    font-size: clamp(.4em, 1.5em, 1.8em);
    opacity: ${high}
  }

  .single-detail
  input {
    width: 50px;
    height: 47px;
    padding-left: 10px;
    font-size: 16px;
    margin-right: 10px;

    &:focus {
      outline: none;
    } 
  }

  .single-detail
  button {
    background: #088178;
    color: #fff;
  }

  .single-detail
  span {
    line-height: 25px;
  }

  /**When is mobile */
  @media (max-width: ${medias.md}px) {
    flex-direction: column;
    .single-img {
      width: 100%;
      margin-right: 0;
    }

    .single-detail {
      width: 100%;
      padding-top: 30px;
    }
  }
  
`