import Scene from '../../components/Scene';
import { Content, Details, TeamContainer, Title, TeamContent } from './style';

import { CircularMenu } from '../../components/CircularMenu';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../components/Button';
import { content as contentData } from './content';
import { gsap } from 'gsap';

const Team = () => {
  const [preloadedMascots, setPreloadedMascots] = useState([]);
  const [contentIndex, setContentIndex] = useState(2);
  const teamContentRef = useRef(null);
  const content = contentData[contentIndex];

  useEffect(() => {
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

  return (
    <Scene>
      <TeamContainer>
        <CircularMenu
          angle="80"
          onUpdateIndex={handleUpdateIndex}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </CircularMenu>
        <Content>
          <TeamContent ref={teamContentRef}>
            <img src={preloadedMascots[contentIndex]?.src} alt={content.title} />
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
