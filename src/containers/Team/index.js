import Scene from '../../components/Scene';
import { Content, Details, TeamContainer, Title, TeamContent, Scroll, Mascot } from './style';

import { CircularMenu } from '../../components/CircularMenu';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../components/Button';
import { content as contentData } from './content';
import { gsap } from 'gsap';
import { VerticalMenu } from '../../components/VerticalMenu';

const Team = () => {
  const [preloadedMascots, setPreloadedMascots] = useState([]);
  const [contentIndex, setContentIndex] = useState(2);
  const teamContentRef = useRef(null);
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
    const teamContent = teamContentRef.current;

    gsap.to(teamContent, {
      autoAlpha: 0,
      duration: 0.25,
      onComplete: () => {
        setContentIndex(index);
        gsap.to(teamContent, {
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
        {isLandscape
          ? <CircularMenu angle="85" startIndex={contentIndex} onUpdateIndex={handleUpdateIndex}>{scrolls}</CircularMenu>
          : <VerticalMenu startIndex={contentIndex} onUpdateIndex={handleUpdateIndex}>{scrolls}</VerticalMenu>
        }
        <Content>
          <TeamContent ref={teamContentRef}>
            <Mascot src={preloadedMascots[contentIndex]?.src} alt={content.title}  portrait={[2, 3].includes(contentIndex)}/>
            <Title color={content.scheme}>{content.title}</Title>
            <Details>{content.details}</Details>
          </TeamContent>
          <Button href="#">REGISTER</Button>
        </Content>
      </TeamContainer>
    </Scene>
  );
};

export default Team;
