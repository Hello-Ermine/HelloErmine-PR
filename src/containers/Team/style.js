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
`;


export const Content = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 2%;
  background-image: url(${background2});
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
  }
`;

// TODO: Create a mascot container and use background2 as a bg there.

export const Mascot = styled.img`
  width: ${props => props.portrait ? '30vh' : '40vh'};
  animation: fold-ermine 5s ease infinite both;

  @media (orientation: portrait) {
    width: ${props => props.portrait ? '30vw' : '40vw'};
  }
`;

export const TeamContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 72%;
  max-width: 58vw;
`;

export const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.color || 'black'};

  @media ${downSizes.xs} and (orientation: portrait) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const Details = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: white;
  text-indent: 54px;
  text-align: left;
  line-height: 2rem;
  word-spacing: 2px;

  @media ${downSizes.xs} and (orientation: portrait) {
    font-size: 9px;
    line-height: 2em;
    text-indent: 1.6em;
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