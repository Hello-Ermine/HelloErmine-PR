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
