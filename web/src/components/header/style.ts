import styled from 'styled-components';


export const Container = styled.header`
  background: var(--dark);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem ${props => props.title === 'home' || '' ? 9 : 2}rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`