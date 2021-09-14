import PropTypes from 'prop-types';
import Scene from '../../components/Scene';
import { 
  HomeContainer, 
  HomeContent, 
  Logo, 
  CI, 
  BackgroundElement, 
  TreeElement1, 
  TreeElement2, 
  TreeElement3, 
  ScrollGuide } from './style';
import { Caption } from '../../components/Typography';
import Particles from 'react-tsparticles';

import ErmineLogo from '../../assets/hello-ermine_logo.png';
import CIImage from '../../assets/CI.png';
import ScrollGuideBase from '../../assets/home/scrollguide.png';
import ScrollGuideArrow from '../../assets/home/scrollguide_arrow.png';

import FrontScene from '../../assets/home/home_background1.png';
import Tree1 from '../../assets/home/home_tree1.png';
import Tree2 from '../../assets/home/home_tree2.png';
import Tree3 from '../../assets/home/home_tree3.png';

const Home = ({ pageIndex, isMobile }) => {
  return (
    <Scene>
      <HomeContainer>
        <HomeContent>
          <Logo src={ErmineLogo} alt='Ermine Logo' />
          <Caption>Break your limit, practice your skills</Caption>
        </HomeContent>
        <CI src={CIImage} alt='CI Image' show={ pageIndex === 0 } />
        <ScrollGuide show={!isMobile}>
          <img className='base' src={ScrollGuideBase} alt="Scroll Guide Image"/>
          <img className='arrow' src={ScrollGuideArrow} alt="Scroll Guide Image"/>
        </ScrollGuide>
        <TreeElement1 src={Tree1}/>
        <TreeElement2 src={Tree2}/>
        <TreeElement3 src={Tree3}/>
        <BackgroundElement src={FrontScene}/>
      </HomeContainer>
      <Particles
        id='snow'
        style={{ position: 'absolute', zIndex: 10, left: 0, }}
        height={'50vw'}
        width='100%'
        options={{
          particles: {
            move: {
              enable: true,
              speed: .8,
              direction: 'bottom',
            },
            size: {
              value: 5,
              random: {
                enable: true,
                minimumValue: .5
              },
            },
            opacity: {
              value: .6,
              random: {
                enable: true,
                minimumValue: .2,
              },
              animation: {
                enable: true,
                minimumValue: .2,
                speed: 1
              }
            },
            number: {
              limit: 100,
              number: 20,
              density: {
                enable: true,
                area: 500,
              }
            },
          },
        }}
      />
    </Scene>
  );
};

Home.propTypes = {
  pageIndex: PropTypes.number,
  isMobile: PropTypes.bool
};

export default Home;
