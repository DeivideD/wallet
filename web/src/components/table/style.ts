import styled from "styled-components";


export const Container = styled.main`
  table {
    width: 100%;

    
    th {
      z-index: 0;
      text-transform: uppercase;
      text-align: center 
    }
    td { 
      color: var(--text-body);     
      font-weight: bolder;
      cursor: pointer;    
      text-align: center 
    }

    &:first-child {
      color: var(--tect-title);
    }  
  }
  .deposit {
    color: var(--green);
  } 
  
  .withdraw{
    color: var(--red);
  }  
`;
