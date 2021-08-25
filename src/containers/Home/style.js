import styled from 'styled-components';
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
`;

export const CI = styled.img`
  position: absolute;
  right: 32px;
  bottom: 38px;
  width: 219px;
  height: 71px;
  z-index: 5;
`;

export const BackgroundElement = styled.img`
  position: absolute;
  width: 100%;
  z-index: 4;
  bottom: 0;
  transform: translateY(65%);
`;

export const TreeElement1 = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateX(-45%);
  width: 45%;
  z-index: 3;
`;

export const TreeElement2 = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30%;
  transform: translate(0, -10%);
  z-index: 2;
`;

export const TreeElement3 = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 25%;
  transform: translate(30%, -40%);
`;