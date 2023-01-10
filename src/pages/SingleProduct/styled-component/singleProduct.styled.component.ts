import styled from "styled-components";

export const StyledSingleProduct = styled.div`
  display: flex;
  border-radius: 18px;
  border: 1px solid;
  background: white;
  box-shadow: 5px 5px 10px rgb(0 0 0 / 30%);
  padding: 1.7rem;
  gap: 10px;

  .image-container {
    width: 100%;    

    img {
      width: 100%;
      border-radius: 11px;
      height: 100%;
      object-fit: cover;
    }
  }

  .info-container {
    width: auto;
    gap: 20px;
    display: flex;
    flex-flow: column;
  }

  .info-container 
  .info-title-category {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h3 {  
      font-weight: 200;
      font-size: 1.4rem;
    }

    a {
      font-weight: 200;
    }
  }

  .info-container
  .description {
    font-weight: 700;
    font-size: 1.5rem;
    padding-right: 1.5rem;
  }

  .info-container
  .price-section {
    width: 100%;
  }

  .info-container
  .price-section
  .price-info {
    margin-top: 1rem;
    margin-bottom: 1rem;

    span {
      font-weight: bold;
      font-size: 1.5rem;
    }

    .text-price {
      font-size: .875rem;
      line-height: 1.25rem;
    }

    div {
      font-size: .75rem;
      line-height: 1rem;
      color: rgb(153 153 153/1);
      margin-top: 0.25rem;
    }
  }

  .info-container
  .cart-section {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    input {
      width: 10%;
      text-align: center;
    }
  }

  .garanties {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    li {
      display: flex;
    }

    .check-icon {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs,1));
      width: 22px;
      height: 22px;
      border: 2px solid transparent;
      border-radius: 100px
    }

    .check-icon::after {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      left: 3px;
      top: -1px;
      width: 6px;
      height: 10px;
      border-width: 0 2px 2px 0;
      border-style: solid;
      transform-origin: bottom left;
      transform: rotate(45deg)
    }
  }
`

export const StyledUserAdmin = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .button-admin {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.125rem;
    background: black;
    color: rgb(255 255 255 / 1);
    min-height: 2.5rem;
    align-items: center;
  }

  .delete-button {
    background: red;
  }
`