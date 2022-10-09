import styled from "styled-components";


export const Container = styled.main`
  display: flex;
  flex-direction: row;
  padding: .1rem 3rem;
  
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    th { 
     color: var(--text-body); 
     font-weight: 300;
     padding: .5rem 2rem;
     text-align: center;
     line-height: .5rem;
    }
    td { 
      padding: .8rem 1.5rem;
      border: 0;
      text-align: center;
      background: var(--shape);
      color: var(--text-body);     
      border-radius: 0.25rem;
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
