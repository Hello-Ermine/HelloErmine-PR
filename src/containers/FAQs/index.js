import Scene from '../../components/Scene';
import { FAQsContainer, Topic, BoxCover, BoxContent } from './style';


//import { showAns } from './style';
//showAns;

const FAQs = () => {
 
  return(


    <Scene>
      <FAQsContainer>
        <Topic>FAQs</Topic>
        <BoxCover>
          <BoxContent><p>รูปแบบการสอนของโครงการในปีนี้</p></BoxContent>
          <BoxContent><p>สมัครแล้วมีสิทธิเข้าร่วมโครงการทุกคนไหม ?</p></BoxContent>
          <BoxContent><p>อุปกรณ์ที่จำเป็นในการเข้าร่วมโครงการ</p></BoxContent>
          <BoxContent><p>จำเป็นต้องมีพื้นฐานก่อนเข้าร่วมโครงการหรือไม่ ?</p></BoxContent>
          <BoxContent><p>จำเป็นต้องเข้าร่วมกิจกรรมทุกวันไหม ?</p></BoxContent>
          <BoxContent><p>เข้าร่วมโครงการแล้ว จะได้รับชั่วโมงกิจกรรมหรือไม่ ?</p></BoxContent>
        </BoxCover>
        {/* <button onClick='showAns()'>Try it</button> */}
      </FAQsContainer>
    </Scene>


  );
};


export default FAQs;
