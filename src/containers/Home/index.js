import Scene from '../../components/Scene';
import { HomeContainer, HomeContent, Logo, CI } from './style';
import { Caption } from '../../components/Typography';
import Particles from 'react-tsparticles';

import ErmineLogo from '../../assets/hello-ermine_logo.png';
import CIImage from '../../assets/CI.png';

const Home = () => {
  return (
    <Scene>
      <HomeContainer>
        <HomeContent>
          <Logo src={ErmineLogo} alt='Ermine Logo' />
          <Caption>Break your limit, practice your skills</Caption>
        </HomeContent>
        <CI src={CIImage} alt='CI Image' />

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

export default Home;
