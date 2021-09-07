import styled from 'styled-components';
import scripture_head from '../../assets/faqs/scripture_head.png';
import faqs_background from '../../assets/faqs/faqs_background.jpg';
import scripture_body from '../../assets/faqs/scripture_body.png';

export const FAQsContainer = styled.section `
  background-image: url(${faqs_background});
  height: 100%;
  width: 100%;
  font-family : 'Mali';
  position: relative;
`;

export const Topic = styled.h1 `
  padding-top:12vh;
  text-align: center;
  margin-bottom:40px;
  color:white;
  font-size:64px;
  font: bold;
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
  width: 848px;
  transition: filter .3s ease-out;

  p {
    padding: 0 30px;
  }

  :hover {
    filter: drop-shadow(0px 0px 8px #fff);
  }
`;

export const BoxAns = styled.div `
  /* min-height : 220px; */
  padding: 1em 0;
  background-image: url(${scripture_body});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  font-size: 18px;
  font-weight: lighter;
  width: 790px;
  margin: 0 auto;
  transform: translateY(-30px);

  p {
    padding-top: 3%;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
