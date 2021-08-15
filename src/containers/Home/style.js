import styled from 'styled-components';

export const HomeContainer = styled.section`
  position: relative;
  background-color: rgba(10, 10, 10, 0.8);
  height: 100%;
  width: 100%;
`;

export const HomeContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;

  p {
    font-size: 24px;
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