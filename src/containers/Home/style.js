import styled from 'styled-components';
import { downSizes, upSizes } from '../../constants/breakpoints';
import Background from '../../assets/home/home_background2.png';

export const HomeContainer = styled.section`
  position: relative;
  background-color: #1e1f21;
  height: 100%;
  width: 100%;
  background-image: url(${Background});
  background-position: 0 85%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const HomeContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  line-height: 0;
  z-index: 6;

  p {
    font-weight: 500;
    color: white;
  }
`;

export const Logo = styled.img`
  width: 50%;

  @media ${downSizes.sm} {
    width: 70vw;
  }
`;

export const CI = styled.img`
  position: absolute;
  top: 0;
  width: 300px;
  z-index: 5;
  opacity: ${(props) => props.show ? 1 : 0};
  transition: .4s;
  transition-delay: .6s;
  z-index: 15;

  @media ${upSizes.lg} {
    left: 50px;
  }

  @media ${downSizes.lg} {
    right: 25px;
    width: 200px;
  }
`;

export const ScrollGuide = styled.div`
  display: ${(props) => !props.show && 'none'};
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translate(40%, -40%);
  z-index: 6;
  background: rgba(251, 251, 251, 0.3);
  filter: drop-shadow(0px 2px 8px #000);
  border-radius: 10px;
  padding: 20px 30px 30px 30px;

  img.base {
    width: 30px;
    height: 50px;
  }

  img.arrow {
    top: 45%;
    left: 50%;
    transform: translate(-50%, 0);
    animation: arrow-attention 2s ease infinite both;
    position: absolute;
    width: 15px;
    height: 35px;
  }

  @media (orientation: portrait) {
    top: 60%;
    right: 50%;
    transform: translate(50%, 30%);
  }
`;

export const BackgroundElement = styled.img`
  position: absolute;
  width: 100%;
  z-index: 4;
  bottom: 0;
  transform: translateY(65%);
`;

export const TreeElement1 = styled.img`
  animation: tree1-wobble-hor 25s ease-in-out infinite both;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateX(-45%);
  width: 45%;
  z-index: 3;
`;

export const TreeElement2 = styled.img`
  animation: tree2-wobble-hor 20s ease infinite both;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30%;
  transform: translate(0, -10%);
  z-index: 2;
`;

export const TreeElement3 = styled.img`
  animation: tree3-wobble-hor 30s ease infinite both;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 25%;
  transform: translate(30%, -40%);
`;