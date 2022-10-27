import styled from "styled-components";

export const Content =  styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button{
    font-size: 1rem;
    font-weight: 600;
    color: #FFF;
    background: var(--green);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.5rem;
    height: 3rem;
    transition: filter 0.2s;
    margin-top: 2rem;

    &:hover{
      filter: brightness(0.9);
      cursor: pointer;
    }
  }

  `