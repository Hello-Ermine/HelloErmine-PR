import styled from 'styled-components';
import scripture_head from '../../assets/faqs/scripture_head.png';
import faqs_background from '../../assets/faqs/faqs_background.jpg';
import scripture_body from '../../assets/faqs/scripture_body.png';

export const FAQsContainer = styled.section `
  background-image: url(${faqs_background});
  background-position: 50% 30%;
  background-size: cover;
  height: 100%;
  width: 100%;
  font-family : 'Mali';
  position: relative;
  color: black !important;
`;

export const Topic = styled.h1 `
  padding-top:12vh;
  text-align: center;
  margin-bottom:40px;
  color:white;
  font-size:64px;
  font-weight: bold;
`;

export const BoxCover = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .panel-toggle {
    background: transparent;
  }

  .active-panel {
    margin: 0;
    padding: 0;
  }

  .panel-wrap {
    transition: .35s ease;
  }

  .active-panel ~ .panel-wrap {
    transform: translateY(-40px) !important;
  }
`;

export const BoxContent = styled.div `
  margin: 5px 0;
  height : 65px;
  background-image: url(${scripture_head});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  font-size: 24px;
  line-height: 65px;
  font-weight: 500;
  width: 62.5vw;
  max-width: 900px;
  transition: filter .3s ease-out;
  position: relative;
  z-index: 111;

  p {
    padding: 0 30px;
  }

  @media (hover: hover) {
    :hover {
      filter: drop-shadow(0px 0px 8px #fff);
    }
  }

  @media (max-width: 885px) {
    padding: 0;
    line-height: 65px; 
    margin: 0 auto;
    font-size: 13.34px;
    width: 400px;
  }
`;

export const BoxAns = styled.div `
  padding: 2em 0 1em 0;
  background-image: url(${scripture_body});
  background-position: top center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size: 18px;
  font-weight: 300;
  width: 58.2vw;
  max-width: 838px;
  margin: 0 auto;
  position: relative;
  z-index: 110;

  p {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 885px) {
    font-size: 10px;
    width: 365.5px;
  }
`;
