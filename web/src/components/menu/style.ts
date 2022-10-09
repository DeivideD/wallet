import style from 'styled-components';

export const Container = style.main`

  a {
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    color: #FFF;
    border: 0;
    padding: 0 1rem;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
      cursor: pointer;
    }
  }
`;