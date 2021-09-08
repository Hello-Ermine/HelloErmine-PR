import styled from 'styled-components';
import scripture_head from '../../assets/faqs/scripture_head.png';
import faqs_background from '../../assets/faqs/faqs_background.jpg';
import scripture_body from '../../assets/faqs/scripture_body.png';
import { downSizes, upSizes } from '../../constants/breakpoints';

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
  margin-bottom: 24px;
  color:white;
  font-size:64px;
  font-weight: bold;

  @media ${downSizes.xl} {
    font-size: 4.45vw;
  }

  @media ${downSizes.xs} {
    font-size: 32px;
  }

  @supports (font-size: clamp(32px, 4.45vw, 64px)) {
    font-size: clamp(32px, 4.45vw, 64px);
  }
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
    /* transform: translateY(-5vh) !important; */
    transform: translateY(-5vh) !important;
    
    @media ${downSizes.xs} {
      transform: translateY(-6vh) !important;
    }
    
    @media ${upSizes.sm} and (orientation: portrait) {
      transform: translateY(-3vh) !important;
    }
  }
`;

export const BoxContent = styled.div `
  margin: 7px 0;
  /* margin: 0 auto; */
  /* margin: 1vmin auto; */
  /* margin-bottom: 2vmin; */
  height : 7vmin;
  background-image: url(${scripture_head});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  font-size: 24px;
  line-height: 7vmin;
  font-weight: 500;
  width: 62.5vw;
  max-width: 900px;
  transition: filter .3s ease-out;
  position: relative;
  z-index: 111;
  white-space: nowrap;

  p {
    padding: 0 30px;
  }

  @media (hover: hover) {
    :hover {
      filter: drop-shadow(0px 0px 8px #fff);
    }
  }

  @media ${downSizes.xl} {
    font-size: 1.67vw;
  }

  @media ${downSizes.md} {
    width: 70vw;
  }

  @media ${downSizes.sm} {
    width: 80vw;
  }

  @media ${downSizes.xs} {
    font-size: 10px;
  }

  @supports (font-size: clamp(10px, 1.67vw, 24px)) {
    font-size: clamp(10px, 1.67vw, 24px);
  }

  @media ${upSizes.sm} and (orientation: portrait) {
    font-size: 18px;
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
  }
  
  @media ${downSizes.xl} {
    font-size: 1.25vw;
  }

  @media ${downSizes.md} {
    width: 65vw;
  }

  @media ${downSizes.sm} {
    width: 75vw;
  }

  @media ${downSizes.xs} {
    font-size: 9px;
  }

  @supports (font-size: clamp(9px, 1.25vw, 18px)) {
    font-size: clamp(9px, 1.25vw, 18px);
  }

  @media ${upSizes.sm} and (orientation: portrait) {
    font-size: 14px;
  }
`;
