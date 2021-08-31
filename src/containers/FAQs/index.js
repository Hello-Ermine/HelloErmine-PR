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
          <BoxContent><p>คำถาม 1 : รูปแบบการสอนของโครงการในปีนี้</p></BoxContent>
          <BoxContent><p>คำถาม 2 : รูปแบบการสอนของโครงการในปีนี้</p></BoxContent>
          <BoxContent><p>คำถาม 3 : รูปแบบการสอนของโครงการในปีนี้</p></BoxContent>
          <BoxContent><p>คำถาม 4 : รูปแบบการสอนของโครงการในปีนี้</p></BoxContent>
          <BoxContent><p>คำถาม 5 : รูปแบบการสอนของโครงการในปีนี้</p></BoxContent>
          <BoxContent><p>คำถาม 6 : รูปแบบการสอนของโครงการในปีนี้</p></BoxContent>
        </BoxCover>
        {/* <button onClick='showAns()'>Try it</button> */}
      </FAQsContainer>
    </Scene>


  );
};


export default FAQs;
