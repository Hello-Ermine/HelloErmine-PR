import styled from 'styled-components';

export const GameContainer = styled.section`
  background-color: pink;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const GameContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Topic = styled.h1`
  width: 100%;
  font-size: 64px;
  text-align: center;
  color: white;
`;

export const GameButtom = styled.img`
  display: block;
  margin: 0 auto;
  width: 85%;
  text-align: center;
  margin-bottom: 7%;
  transition: transform .2s ease-out;
  cursor: pointer;

  :hover {
    transform: rotate(-5deg);
    filter: drop-shadow(30px 10px 4px #4444dd);
  }
`;