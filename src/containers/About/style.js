import styled, { keyframes } from "styled-components";
import Paper from "../../assets/About/about_paper_03.png";
import background2 from "../../assets/About/about_background2.jpg";
import background1 from "../../assets/About/about_background1.png";
import snow from "../../assets/About/snow_transition.png";
export const AboutContainer = styled.p`
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
`;

export const Topic = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: bold;
  padding: 0 1em 1em 1em;
  text-align: center;
`;

export const BoxContainer = styled.div`
  background-image: url(${Paper});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
  text-align: justify;
  width: 60%;
  z-index: 1;

  p {
    text-indent: 0.5in;
    font-size: 24px;
    font-weight: 500;
    width: 40vw;
    margin: 1em 0 1em 1em;
  }
`;

export const ImgErmine = styled.img`
  position: absolute;
  width: 30%;
  top: 28%;
  right: 4%;
  transform: rotate(350deg);
`;

export const ImgBg2 = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  bottom: 0;
  transform: translateY(30%);
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