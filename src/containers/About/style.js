import styled, { css, keyframes } from "styled-components";
import Paper from "../../assets/About/about_paper_03.png";
import background2 from "../../assets/About/about_background2.jpg";
import background1 from "../../assets/About/about_background1.png";
import snow from "../../assets/About/snow_transition.png";
import { downSizes, upSizes } from "../../constants/breakpoints";
import mascot from "../../assets/About/about_mascot.png";

const ScaleUpAbout = keyframes`
0%{
    transform: scale(0);
}
100%{
    transform: scale(1);
}
`;
export const AboutContainer = styled.div`
  position: relative;
  padding-left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background2});
  background-position: 0 25%;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 420px) {
    background-position: 100% 0;
  }
  /* animation: ${ScaleUpAbout} 11s ease-out 13s forwards normal; */
`;

export const Topic = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: bold;
  padding-bottom: .4em;
  text-align: center;

  @media ${downSizes.xl} {
    font-size: 4.45vw;
  }

  @media ${downSizes.xs} {
    font-size: 32px;
  }

  @supports (font-size: clamp(32px, 4.45vw, 64px)) {
    font-size: clamp(32px, 4.45vw, 64px);
  }

  /* @media screen and (max-width: 1280px) {
   padding-bottom: 0em;
  }
  @media screen and (max-width: 1030px) {
    padding-bottom: 0em;
  }
  @media screen and (max-width: 420px) {
    font-size: 18px;
  } */
`;

export const ParagraphContainer = styled.div`
  background-image: url(${Paper});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2em 2.5em 2.2em 2.5em;
    font-size: 24px;

  p {
    font-weight: 500;
  }

  p:first-of-type {
    text-indent: 2em;
    margin-bottom: 1.2em;
  }

  @media ${downSizes.xl} and (orientation: landscape) {
    font-size: 1.67vw;
  }

  @media ${downSizes.xs} {
    font-size: 12px;
  }
`;

export const BoxContainer = styled.div`
  text-align: left;
  width: 73.5%;
  margin-left: -4%;
  z-index: 1;
  overflow: visible;

  @media (orientation: portrait) {
    width: 84%;
  }
/* 
  @media screen and (max-width: 1280px) {
      height: 55%;
      width: 80%;
    p {
      font-size: 24px;
      width: 50vw;
    }
  }
  @media screen and (max-width: 1030px) {
    height: 500px;
    width: 830px;
    p {
      font-size: 24px;
      width: 52vw;
    }
  }
  @media screen and (max-width: 420px) {
    max-height: 220px;
    width: 60%;
    p {
      font-size: 9px;
      width: 45vw;
    }
  } */
`;

export const ImgErmine = styled.img`
  float: right;
  width: 38%;
  margin: 1em;
  margin-right: -13%;
  margin-top: -3.6%;
  transform: rotate(350deg);
  shape-outside: url(${mascot});
  shape-margin: 4em;
  
  @media ${downSizes.xl} and (orientation: landscape) {
    width: 30%;
    margin-top: 0;
    margin-right: -16%;
  }

  @media ${downSizes.md} and (orientation: portrait) {
    width: 36vw;
    margin-right: -8vw;
    margin-top: 180px;
    shape-margin: 2em;
  }
  
  @media ${upSizes.sm} and (orientation: portrait) {
    margin-top: 40%;
    shape-margin: 2.5em;
  }

  @media ${upSizes.md} and (orientation: portrait) {
    width: 50%;
    margin-right: -12%;
    margin-top: 20%;
    transform: rotate(0deg);
  }

  /* @media screen and (max-width: 1280px) {
  top: 22%;
  right: 1%;
  width: 35%;
  }
  @media screen and (max-width: 1030px) {
  top: 45%;
  right: 0;
  transform: rotate(10deg);
  }
  @media screen and (max-width: 420px) {
  top: 44%;
  } */
`;

export const ImgBg2 = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  bottom: 0;
  transform: translateY(35%);
 @media screen and (max-width: 1280px) {
    transform: translateY(30%);
  }
  @media screen and (max-width: 1030px) {
    transform: translateY(10%);
  }
  @media screen and (max-width: 420px) {
    transform: translateY(0%);
  }
  
  
`;

export const BackgroundFirst = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${background1});
  background-size: cover;
  background-position: 50% 45%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  z-index: 666;
  transition: 2s;
`;

const ScaleUp = keyframes`
    0.0%{
        transform: scale(0);
    }
    100%{
        transform: scale(20);
    }
`;

export const scaleUpDelayMs = 2000;

const ScaleUpInterpolated = css`
  animation: ${ScaleUp} 30s ease-out ${scaleUpDelayMs / 1000}s forwards normal;
`;

export const Ink = styled.div`
  background-image: url(${snow});
  transform: scale(0);
  background-size: cover;
  transform-origin: right bottom;
  width: 102%;
  height: 102%;
  ${(props) => props.$start && ScaleUpInterpolated};
`;
export const VisibleAboutContainer = styled.div`
  animation: ${ScaleUpAbout} 11s ease-out  forwards normal;
`;