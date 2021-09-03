import Scene from "../../components/Scene";
import { BackgroundFirst,Ink} from "./style";
// import mascot from "../../assets/About/about_mascot.png";
// import background3 from "../../assets/About/about_background3.png";
// AboutContainer,BoxContainer,ImgBg2,ImgErmine,Topic,
const About = () => {
  return (  
    <Scene>
      <BackgroundFirst>
        <Ink></Ink>
      </BackgroundFirst>
      {/* <AboutContainer>
        <Topic>ABOUT</Topic>
        <BoxContainer>
          <p>
            ยินดีต้อนรับน้องเข้าสู่โครงการ “Hello World-Hello Ermine“
            โครงการที่จะพาน้องๆ ไปตะลุยและรับความรู้ทางด้านการสร้าง
            เว็บไซต์หรือเกมเพื่อเสริมสร้างทักษะการเรียนรู้ทางด้านต่างๆ
            เพื่อที่จะนำไปต่อยอดได้จริงในอนาคต ไม่ว่าจะเป็นทางด้าน Front-End,
            Web Design, Game Development, Game Design และ Infrastructure
            ผ่านการสอน และเวิร์กชอปในรูปแบบต่าง ๆ จากรุ่นพี่คณะเทคโนโลยีสารสนเทศ
          </p>  
          <p>เตรียมตัวให้พร้อม มาท้าความหนาวกับเหล่าเออร์มินไปด้วยกัน!!</p>
          <ImgErmine src={mascot} />
        </BoxContainer>
        <ImgBg2 src={background3} />
      </AboutContainer> */}
    </Scene>
  );
};
export default About;
