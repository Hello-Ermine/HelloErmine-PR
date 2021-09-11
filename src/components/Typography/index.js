import styled from 'styled-components';
import { downSizes } from '../../constants/breakpoints';

export const Heading = styled.h1`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '128px'};
  font-weight: bold;
`;

export const Title = styled.h2`
  color: ${(props) => props.color || 'black'};
  font-size: 48px;
`;

export const Caption = styled.p`
  color: ${(props) => props.color || 'black'};
  font-size: 28px;
  transition: all .3s ease-out;

  @media ${downSizes.xl} {
    font-size: 2.2vw;
  }

  @media ${downSizes.xs} {
    font-size: 12px;
  }
`;