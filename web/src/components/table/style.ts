import styled from "styled-components";


export const Container = styled.main`
  table {
    width: 100%;

    
    th {
      z-index: 0;
    }
    td { 
      padding: .7rem 2.5rem;
      color: var(--text-body);     
      border-radius: 0.25rem;
      font-weight: bolder;
      cursor: pointer;    
      &:first-child {
        padding: .3rem 0 .5rem .5rem;
      }  
      &:last-child {
        padding: .3rem 0 .5rem .5rem;
      }  
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
