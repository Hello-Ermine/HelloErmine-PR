import Scene from '../../components/Scene';
import { Content, Details, TeamContainer, Title, Scroll, Mascot, Button, BaseMascotContainer, BackgroundElement, } from './style';
import PropTypes from 'prop-types';
import { CircularMenu } from '../../components/CircularMenu';
import { useEffect, useRef, useState } from 'react';
import { content as contentData } from './content';
import { gsap } from 'gsap';
import { VerticalMenu } from '../../components/VerticalMenu';
import background2 from '../../assets/teams/team_background2.png';

const MascotContainer = ({ children }) => {
  return (
    <BaseMascotContainer>
      <BackgroundElement src={background2}/>
      {children}
    </BaseMascotContainer>
  );
};

MascotContainer.propTypes = {
  children: PropTypes.node,
};

const Team = () => {
  const [preloadedMascots, setPreloadedMascots] = useState([]);
  const [contentIndex, setContentIndex] = useState(2);
  const mascotRef = useRef(null);
  const titleRef = useRef(null);
  const detailsRef = useRef(null);
  const content = contentData[contentIndex];
  const [isLandscape, setIsLandscape] = useState(true);

  const handleOrientationChange = (e) => {
    setIsLandscape(!e.matches);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(orientation: portrait)`);
    setIsLandscape(!mediaQuery.matches);
    mediaQuery.addEventListener(`change`, handleOrientationChange);

    Promise.all(contentData.map(async ({ mascot }) => {
      const img = new Image();
      img.src = mascot;
      await img.decode();
      return img;
    })).then(setPreloadedMascots);
  }, []);

  const handleUpdateIndex = (index) => {
    const targets = [mascotRef.current, titleRef.current, detailsRef.current];

    gsap.to(targets, {
      autoAlpha: 0,
      duration: 0.25,
      onComplete: () => {
        setContentIndex(index);
        gsap.to(targets, {
          autoAlpha: 1,
          duration: 0.25,
        });
      },
    });
  };

  const scrolls = contentData.map(({ scroll, title, scheme }, index) => {
    return (
      <Scroll
        key={title}
        close={scroll.close}
        open={scroll.open}
        scheme={scheme}
        active={index == contentIndex}
      />
    );
  });

  return (
    <Scene>
      <TeamContainer>
        <CircularMenu angle="85" startIndex={contentIndex} onUpdateIndex={handleUpdateIndex} active={isLandscape}>{scrolls}</CircularMenu>
        <VerticalMenu startIndex={contentIndex} onUpdateIndex={handleUpdateIndex} active={!isLandscape}>{scrolls}</VerticalMenu>
        <Content>
          <MascotContainer>
            <Mascot src={preloadedMascots[contentIndex]?.src} alt={content.title} portrait={[2, 3].includes(contentIndex)} ref={mascotRef} />
          </MascotContainer>
          <Title color={content.scheme} ref={titleRef}>{content.title}</Title>
          <Details ref={detailsRef}>{content.details}</Details>
          <Button href='https://forms.gle/MBMkfeXVscJC7iUr7'>REGISTER</Button>
        </Content>
      </TeamContainer>
    </Scene>
  );
};

export default Team;
