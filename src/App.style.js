import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
`;

export const AppSocial = styled.div`
  position: fixed;
  left: 48px;
  bottom: 48px;

  a {
    color: white;
    margin-right: 32px;
    text-align: center;
  }

  a:last-child {
    margin-right: 0;
  }

  a i {
    background-color: #ffd8bb;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    font-size: 48px;
    padding: 16px;
    transition: all 0.3s ease-out;
  }

  a i:hover {
    background-color: #f2b6b6;
    transform: translateY(-16px);
  }

  .fa-instagram {
    padding: 12.5px 16px;

    ::before {
      font-size: 54.84px;
    }
  }
`;

export const BlackScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  visibility: hidden;
`;
