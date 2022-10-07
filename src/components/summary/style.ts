import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: -10rem;
    border-radius:0.4rem;
    padding: 0.6rem;
    div {
      background: var(--shape);
      min-width: 300px;
      padding: 1.5rem 2rem;
      border-radius: 0.4rem;

      header{ 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      strong {
        display: block;
        font-size:1.6rem;
        font-weight: 500;
      }
    }
    .diferent{
      background: var(--green);
      color: #fff;
    }
`;