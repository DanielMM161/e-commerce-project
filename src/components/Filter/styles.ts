import styled from "styled-components";

export const StyledFilter = styled.div`
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  height: 100%;

  & h5 {
      font-weight: inherit;
      margin-bottom: .75rem
  }

  .buttons-filter_container {
      width: 100%;
      max-height: 300px;
      overflow: auto;
  }

  .buttons-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
      gap: 10px;
  }

  .button-category {
      padding: 0.5rem;
      border: 1px solid ${p =>  p.theme.title};
      font-size: 0.8rem;
      background: transparent;      
      color:  ${p => p.theme.title};
  }

  .button-clicked {
      padding: 0.5rem;
      border: 1px solid;
      font-size: 0.8rem;
      background-color: ${p =>  p.theme.title};
      color:  ${p => p.theme.body};
  }

  .prices-container {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
  }

  .button-prices {
      padding-top: 1rem;
      padding-bottom: 0.75rem;
      padding-left: 0.75rem;    
      border-bottom: 1px solid;
      background: transparent;
      display: flex;
      justify-content: space-between;
      background: transparent;      
      color:  ${p => p.theme.title};
  }
`

