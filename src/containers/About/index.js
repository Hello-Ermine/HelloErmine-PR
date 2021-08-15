import Scene from '../../components/Scene';
import { AboutContainer, BoxCover, BoxWithErmine, ContentInBox, NewLine, Topic , NewLineTop } from './style';
import mascot from '../../assets/mascot3.png';
const About = () => {
  return (
    <Scene>
      <AboutContainer>
        {/* เป็นกล่อง สำหรับใส่ข้อความ*/}
        <Topic>ABOUT</Topic>
        <BoxCover>
          <BoxWithErmine>
            <ContentInBox>
              <NewLineTop>
                ยินดีต้อนรับน้องเข้าสู่โครงการ “ Hello World-Hello Ermine “
              </NewLineTop>
              <NewLine>
                โครงการที่จะพาน้อง ๆ ไปตะลุยและรับความรู้ทางด้านการสร้าง
              </NewLine>
              <NewLine>
                เว็บไซต์หรือเกมเพื่อเสริมสร้างทักษะการเรียนรู้ทางด้านต่าง ๆ
              </NewLine>
              <NewLine>
                เพื่อที่จะนำไปต่อยอดได้จริงในอนาคต ไม่ว่าจะเป็นทางด้าน
              </NewLine>
              <NewLine>
                Front-End, Web Design, Game Development, Game Design
              </NewLine>
              <NewLine>
                และ Infrastructure ผ่านการสอน และเวิร์กชอปในรูปแบบต่าง ๆ
              </NewLine>
              <NewLine>
                จากรุ่นพี่คณะเทคโนโลยีสารสนเทศ เตรียมตัวให้พร้อม
              </NewLine>
              <NewLine>
                มาท้าความหนาวกับเหล่าเออร์มินไปด้วยกัน!!
              </NewLine>
            </ContentInBox>
            <img src={mascot} />
          </BoxWithErmine>
        </BoxCover>

      </AboutContainer>
    </Scene>
  );
};

export default About;
