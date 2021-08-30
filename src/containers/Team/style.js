import styled from 'styled-components/macro';
import background from '../../assets/teams/team_background1.jpg';
import background2 from '../../assets/teams/team_background2.png';

export const TeamContainer = styled.section`
  background-color: #1e1f21;
  height: 100%;
  width: 100%;
  background-image: url(${background});
  background-position: 0 64%;
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
  background-image: url(${background2});
  background-size: 90vh;
  background-position: 52% -22%;
  background-repeat: no-repeat;

  img {
    max-width: 50%;
    max-height: 56%;
    animation: fold-ermine 5s ease infinite both;
  }
`;

export const TeamContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 72%;
  max-width: 64vw;
`;

export const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.color || 'black'};
`;

export const Details = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: white;
  text-indent: 54px;
  text-align: left;
  line-height: 2rem;
  word-spacing: 2px;
`;

export const Scroll = styled.div`
  display: block;
  position: relative;
  width: 20vh;
  height: 11vh;
  opacity: ${props => props.active ? 1 : .4};
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
`;