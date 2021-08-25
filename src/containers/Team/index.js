import Scene from '../../components/Scene';
import { Content, Details, TeamContainer, Title, TeamContent } from './style';

import { CircularMenu } from '../../components/CircularMenu';
import { useRef, useState } from 'react';
import { Button } from '../../components/Button';
import { content as contentData } from './content';
import { gsap } from 'gsap';

const Team = () => {
  const [content, setContent] = useState(contentData[2]);
  const teamContentRef = useRef(null);

  const handleUpdateIndex = (index) => {
    const teamContent = teamContentRef.current;
    const newContent = contentData[index];

    gsap.to(teamContent, {
      autoAlpha: 0,
      duration: 0.25,
      onComplete: () => {
        setContent(newContent);
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
            <img src={content.mascot} alt={content.title} />
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
