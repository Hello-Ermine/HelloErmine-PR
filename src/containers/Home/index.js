import Scene from '../../components/Scene';
import { HomeContainer, HomeContent, Logo, CI } from './style';

import ErmineLogo from '../../assets/hello-ermine_logo.png';
import CIImage from '../../assets/CI.png';

const Home = () => {
  return (
    <Scene>
      <HomeContainer>
        <HomeContent>
          <Logo src={ErmineLogo} alt='Ermine Logo'/>
          <p>Break your limit, practice your skills</p>
        </HomeContent>
        <CI src={CIImage} alt='CI Image'/>
      </HomeContainer>
    </Scene>
  );
};

export default Home;
