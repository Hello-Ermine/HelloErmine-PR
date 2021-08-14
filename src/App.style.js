import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
`;

export const AppSocial = styled.div`
  position: fixed;
  left: 1em;
  bottom: 2em;
  margin: 1em;

  a {
    color: white;
    margin: 0 1em;
    text-align: center;
  }

  a i {
    background-color: #FFD8BB;
    padding: 10px;
    border-radius: 100%;
    width: 100px;
    transition: all .3s ease-out;
  }

  a i:hover {
    background-color: #F2B6B6;
    transform: translateY(-16px);
  }
`;