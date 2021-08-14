import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.bg || 'white'};
  color: ${(props) => props.color || '#f2b6b6'};
  font-size: ${(props) => (props.large ? '36px' : '24px')};
  border-radius: ${(props) => (props.large ? '30px' : '10px')};
  font-family: inherit;
  font-weight: 700;
  padding: 0.4em 2em;
`;
