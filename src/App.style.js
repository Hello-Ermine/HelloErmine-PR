import styled from 'styled-components';
import { downSizes } from './constants/breakpoints';

export const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
`;

export const AppSocial = styled.div`
  position: fixed;
  left: 28px;
  bottom: 48px;

  a {
    color: white;
    margin-right: 32px;
    text-align: center;
  }

  a:last-child {
    margin-right: 0;
  }

  a .svg-inline--fa {
    background-color: #302F2F;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    font-size: 48px;
    padding: 16px;
    transition: all 0.5s ease-out;
  }

  a:hover {
    box-shadow: 0 0 35px 5px rgb(135,206,255);
  }

  @media ${downSizes.sm} {
    bottom: 40px;

    a {
      margin-right: 22px;
    }

    a .svg-inline--fa {
      width: 40px;
      height: 40px;
      font-size: 25px;
      padding: 7px;
    }
  }
`;

export const BlackScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.visible ? 'black' : 'transparent'};
  opacity: 0;
  visibility: hidden;
`;
