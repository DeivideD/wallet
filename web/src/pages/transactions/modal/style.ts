
import styled from "styled-components";
import { transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-weight: 1rem;
    margin: 0.3rem 1rem 1.2rem 0;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border:0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

  }
`;

export const TrasactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

export const TwoColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  div {
    display: inline-block;
  }
`;

interface IsActive {
  isActive: boolean;
  activeColor: string;
}

export const ButtonBox = styled.button<IsActive>`
  height: 3.5rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive ? transparentize(0.9, props.activeColor) : 'transparent'};
  

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border-color: #aaa;
  }

  img { 
    width: 28px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--test-title);
  }
`;