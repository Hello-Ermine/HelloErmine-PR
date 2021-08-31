import Scene from '../../components/Scene';
import { HomeContainer, HomeContent, Logo, CI, BackgroundElement, TreeElement1, TreeElement2, TreeElement3 } from './style';
import { Caption } from '../../components/Typography';

import ErmineLogo from '../../assets/hello-ermine_logo.png';
import CIImage from '../../assets/CI.png';

import FrontScene from '../../assets/home/home_background1.png';
import Tree1 from '../../assets/home/home_tree1.png';
import Tree2 from '../../assets/home/home_tree2.png';
import Tree3 from '../../assets/home/home_tree3.png';

const Home = () => {
  return (
    <Scene>
      <HomeContainer>
        <HomeContent>
          <Logo src={ErmineLogo} alt='Ermine Logo'/>
          <Caption>Break your limit, practice your skills</Caption>
        </HomeContent>
        <CI src={CIImage} alt='CI Image' />
        <TreeElement1 src={Tree1}/>
        <TreeElement2 src={Tree2}/>
        <TreeElement3 src={Tree3}/>
        <BackgroundElement src={FrontScene}/>
      </HomeContainer>
    </Scene>
  );
};

export default Home;
