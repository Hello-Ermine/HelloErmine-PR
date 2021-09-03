import styled, { keyframes } from "styled-components";
import Paper from "../../assets/About/about_paper_03.png";
import background2 from "../../assets/About/about_background2.jpg";
import background1 from "../../assets/About/about_background1.png";
import snow from "../../assets/About/snow_transition.png";
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
  padding: 0 1em 1em 1em;
  text-align: center;
  @media screen and (max-width: 1280px) {
   padding-bottom: 0em;
  }
  @media screen and (max-width: 1030px) {
    padding-bottom: 0em;
  }
  @media screen and (max-width: 420px) {
    font-size: 18px;
  }
`;

export const BoxContainer = styled.div`
  background-image: url(${Paper});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
  text-align: justify;
  width: 60%;
  height: 38%;
  z-index: 1;
  p {
    text-indent: 0.5in;
    font-size: 24px;
    font-weight: 500;
    width: 40vw;
    margin: 1em 0 1em 1em;
  }

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
  }
`;

export const ImgErmine = styled.img`
  position: absolute;
  width: 30%;
  top: 28%;
  right: 4%;
  transform: rotate(350deg);
  @media screen and (max-width: 1280px) {
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
  }
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
  background-image: url(${background1});
  background-size: cover;

  background-position: 50% 45%;
  width:100%;
  height:100%;
`;

const ScaleUp = keyframes`
    0.0%{
        transform: scale(0);
    }
    100%{
        transform: scale(20);
    }
`;



export const Ink = styled.div`
  background-image: url(${snow});
  transform: scale(0);
  transform-origin: right bottom;
  width:100%;
  height:100%;
  animation: ${ScaleUp} 10s ease-out 3s forwards normal;
`;
export const VisibleAboutContainer = styled.div`
  animation: ${ScaleUpAbout} 11s ease-out  forwards normal;
`;