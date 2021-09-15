import React, { useEffect, useState } from "react";
import Scene from "../../components/Scene";
import {
  BackgroundFirst,
  Ink,
  AboutContainer,
  BoxContainer,
  ImgBg2,
  ImgErmine,
  Topic,
  scaleUpDelayMs,
  ParagraphContainer,
  // VisibleAboutContainer,
} from "./style";
import mascot from "../../assets/About/about_mascot.png";
import background3 from "../../assets/About/about_background3.png";
import PropTypes from 'prop-types';

const delay = scaleUpDelayMs + 3000;

const About = ({ in: inProp }) => {
  const [isBgFirstComplete, setIsBgFirstComplete] = useState(false);

  useEffect(() => {
    if (inProp) {
      setTimeout(() => {
        setIsBgFirstComplete(true);
      }, delay);
    }
  }, [inProp]);

  return (
    <Scene>
      <AboutContainer>
        <Topic>ABOUT</Topic>
        <BoxContainer>
          <ImgErmine src={mascot} />
          <ParagraphContainer>
            <p>
              ยินดีต้อนรับน้อง ๆ เข้าสู่โครงการ Hello World Ermine 
              โครงการที่จะพาน้อง ๆ ไปตะลุยและรับความรู้ในการสร้างเว็บไซต์หรือเกม
              เพื่อเสริมสร้างทักษะการเรียนรู้ทางด้านต่าง ๆ ที่จะนำไปต่อยอดได้จริงในอนาคต
              ไม่ว่าจะเป็นทางด้าน Front-End, Web Design, Game Development, Game Design และ Infrastructure
              ผ่านการสอนและเวิร์กชอปในรูปแบบต่าง ๆ
              จากรุ่นพี่คณะเทคโนโลยีสารสนเทศ
            </p>
            <p>เตรียมตัวให้พร้อม มาท้าความหนาวกับเหล่าเออร์มินไปด้วยกัน !!!</p>
          </ParagraphContainer>
        </BoxContainer>
        <ImgBg2 src={background3} />
      </AboutContainer>
      <BackgroundFirst visible={!isBgFirstComplete}>
        <Ink $start={inProp}></Ink>
      </BackgroundFirst>
    </Scene>
  );
};

export default About;

About.propTypes = {
  in: PropTypes.bool.isRequired,
};