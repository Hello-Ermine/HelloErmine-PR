import styled from 'styled-components';
import Background from '../../assets/game/game_background.jpg';
import { downSizes } from '../../constants/breakpoints';

export const GameContainer = styled.section`
  background-image: url(${Background});
  background-position: 0 40%;
  background-size: cover;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const GameContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  a.disabled {
    pointer-events: none;
    cursor: default;
  }
`;

export const Topic = styled.h1`
  width: 100%;
  font-size: 64px;
  text-align: center;
  color: white;
  font-weight: bold;

  @media ${downSizes.xl} {
    font-size: 4.45vw;
  }

  @media ${downSizes.xs} {
    font-size: 32px;
  }

  @supports (font-size: clamp(32px, 4.45vw, 64px)) {
    font-size: clamp(32px, 4.45vw, 64px);
  }
`;

export const GameButton = styled.img`
  display: block;
  margin: 0 auto;
  width: 85vw;
  max-width: 700px;
  text-align: center;
  margin-bottom: 7%;
  transition: all .2s ease-out;
  cursor: pointer;

  :hover {
    transform: rotate(-5deg) scale(1.05);
    filter: drop-shadow(0px 5px 8px #fff);
  }
  
  :active {
    transform: rotate(-5deg) scale(1.03);
    transition: 0.1s;
  }

  @media ${downSizes.sm} {
    width: 70vw;
  }
`;