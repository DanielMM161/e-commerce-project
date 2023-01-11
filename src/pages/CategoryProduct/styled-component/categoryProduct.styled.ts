
import styled from 'styled-components';

export const StyledCategoryProduct = styled.div`

  .product-container {
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(min(100%, 15rem),1fr));
    gap: 10px;
  }
`