import Scene from '../../components/Scene';
import { HomeContainer, HomeContent, Logo, CI } from './style';
import { Caption } from '../../components/Typography';

import ErmineLogo from '../../assets/hello-ermine_logo.png';
import CIImage from '../../assets/CI.png';

const Home = () => {
  return (
    <Scene>
      <HomeContainer>
        <HomeContent>
          <Logo src={ErmineLogo} alt='Ermine Logo'/>
          <Caption>Break your limit, practice your skills</Caption>
        </HomeContent>
        <CI src={CIImage} alt='CI Image'/>
      </HomeContainer>
    </Scene>
  );
};

export default Home;
