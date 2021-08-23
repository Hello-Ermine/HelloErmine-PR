import styled from 'styled-components';
import Background from '../../assets/home/home_background.png';

export const HomeContainer = styled.section`
  position: relative;
  background-color: #1e1f21;
  height: 100%;
  width: 100%;
  background-image: url(${Background});
  background-position: center;
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
`;