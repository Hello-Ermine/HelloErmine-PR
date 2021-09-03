import styled from 'styled-components/macro';
import background from '../../assets/teams/team_background1.jpg';
import background2 from '../../assets/teams/team_background2.png';
import { downSizes, upSizes } from '../../constants/breakpoints';

export const TeamContainer = styled.section`
  background-color: #1e1f21;
  height: 100%;
  width: 100%;
  background-image: url(${background});
  background-position: 40% 64%;
  background-size: cover;
  position: relative;
`;


export const Content = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
  padding-top: 4%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    
  @media ${downSizes.lg} and (orientation: landscape) {
    max-height: 700px;
  }

  @media (orientation: portrait) {
    height: 90vh;
    left: 0;
    transform: translate(-10%, -55%);
  }

  @media ${downSizes.xs} and (orientation: portrait) {
    max-height: 666px;
  }

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 72%;
  max-width: 58vw; */

  /* background-image: url(${background2});
  background-size: 76vh;
  background-position: 52% calc(-50% + 8.5vw);
  background-repeat: no-repeat;

  @media (orientation: portrait) {
    background-size: 92vw;
    background-position: -11vw calc(50% - 25vw);
    align-items: flex-start;
    padding-left: 6.25%;
  }
  
  @media ${downSizes.xs} and (orientation: portrait) {
    background-position: -11vw calc(50% - 120px);
  }

  @media ${upSizes.sm} and (orientation: portrait) {
    background-position: -11vw calc(50% - 18vw);
  }

  @media ${downSizes.xs} and (orientation: landscape) {
    background-size: 64vh;
    background-position: 52% calc(50% - 150px);
  } */
`;

export const BaseMascotContainer = styled.div`
  grid-area: 1 / 1 / 10 / 2;
  display: grid;
  grid-template: 'container';
  place-items: center;
  place-content: center;
  /* max-width: 50vw; */
  max-width: 80vh;
  margin: 0 auto;
  align-self: end;
  /* background: red; */
  
  @media ${downSizes.lg} {
    align-self: center;
  }

  @media (orientation: portrait) {
    max-width: 90vw;
  }

  > * {
    grid-area: container;
  }
`;

export const BackgroundElement = styled.img`
  width: 100%;
`;

export const Mascot = styled.img`
  width: ${props => props.portrait ? '34%' : '46%'};
  margin-top: 6%;
  animation: fold-ermine 5s ease infinite both;

  /* @media (orientation: portrait) {
    width: ${props => props.portrait ? '30vw' : '40vw'};
  } */
`;

export const Title = styled.div`
  grid-area: 8 / 1 / 9 / 2;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.color || 'black'};
  z-index: 333;

  @media ${downSizes.xl} and (orientation: landscape) {
    font-size: 3.3vw;
  }

  @media ${downSizes.xs} and (orientation: landscape) {
    font-size: 18px;
  }

  @supports (font-size: clamp(18px, 3.3vw,48px)) {
    font-size: clamp(18px, 3.3vw,48px);
  }
  
  @media ${upSizes.xs} and (orientation: portrait) {
    font-size: 3.3vh;

    @supports (font-size: clamp(18px, 3.3vh, 48px)){
      font-size: clamp(18px, 3.3vh, 48px);
    }
  }

  @media ${downSizes.xs} and (orientation: portrait) {
    grid-area: 7 / 1 / 8 / 2;
    margin-top: 16%;
  }
`;

export const Details = styled.div`
  grid-area: 9 / 1 / 12 / 2;
  font-size: 18px;
  font-weight: 300;
  color: white;
  text-indent: 3em;
  text-align: left;
  line-height: 1.78em;
  word-spacing: 2px;
  max-width: 58vw;
  z-index: 332;
  
  @media ${downSizes.xl} and (orientation: landscape) {
    font-size: 3.3vw;
  }

  @media ${downSizes.xs} and (orientation: landscape) {
    font-size: 9px;
    line-height: 2em;
    text-indent: 1.6em;
  }
  
  @supports (font-size: clamp(9px, 1.25vw, 18px)){
    font-size: clamp(9px, 1.25vw, 18px);
  }

  @media ${downSizes.xs} and (orientation: portrait) {
    grid-area: 8 / 1 / 11 / 2;
  }

  @media ${upSizes.xs} and (orientation: portrait) {
    font-size: 1.25vh;

    @supports (font-size: clamp(9px, 1.25vh, 18px)){
      font-size: clamp(9px, 1.25vh, 18px);
    }
  }
  
  /* @media ${downSizes.xs} and (orientation: portrait) {
    font-size: 9px;
    line-height: 2em;
    text-indent: 1.6em;
  } */
`;

export const Button = styled.a`
  grid-area: 11 / 1 / 13 / 2;
  place-self: center;
  background-color: white;
  color: #f2b6b6;
  font-size: 24px;
  border-radius: 10px;
  font-family: inherit;
  font-weight: 700;
  padding: 0.4em 2em;
  text-decoration: none;
  transition: .2s ease-out;
  
  @media ${downSizes.sm} {
    grid-area: 12 / 1 / 13 / 2;
  }
  :hover {
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.5),
      0 0 100px rgba(255, 255, 255, 0.2);
  }

  @supports (font-size: clamp(14px, 1.67vw, 24px)) {
    font-size: clamp(14px, 1.67vw, 24px);
  }

  @media ${downSizes.xs} and (orientation: portrait) {
    grid-area: 9 / 1 / 13 / 2;
    /* margin-top: 8; */
  }

  @media ${upSizes.xs} and (orientation: portrait) {
    font-size: 1.67vh;
    grid-area: 10 / 1 / 13 / 2;
  }
  
  @media ${upSizes.md} and (orientation: portrait) {
    grid-area: 10 / 1 / 12 / 2;
  }

`;

export const Scroll = styled.div`
  display: block;
  position: relative;
  width: 20vh;
  height: 11vh;
  /* opacity: ${props => props.active ? 1 : .4}; */
  filter: ${props => props.active ? `
    drop-shadow(0 0 16px ${props.scheme}7f)
    drop-shadow(0 0 96px ${props.scheme}20)` : ''};
  transition: all .2s, transform 1s;
  transform: translateX(-.8vh) ${props => props.active && 'translateY(-.64vh)'};

  &:hover {
    opacity: 1;

    &::after {
      visibility: visible;
    }

    &::before {
      visibility: hidden;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -5.5%;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.close});
    background-size: 100%;
    background-repeat: no-repeat;
    visibility: ${props => props.active ? 'hidden' : 'visible'};
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.open});
    background-size: 100%;
    background-repeat: no-repeat;
    visibility: ${props => props.active ? 'visible' : 'hidden'};
  }

  @media ${downSizes.xs} {
    width: 24vw;
    height: 14vw;
  }

  
  @media ${downSizes.lg} and (orientation: landscape) {
    width: 16vh;
    height: 8.8vh;
  }
`;