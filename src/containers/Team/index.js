import Scene from '../../components/Scene';
import { Content, Details, TeamContainer, Title, TeamContent } from './style';

import { CircularMenu } from '../../components/CircularMenu';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { content as contentData } from './content';

const Team = () => {
  const [content, setContent] = useState(contentData[2]);

  return (
    <Scene>
      <TeamContainer>
        <CircularMenu
          onUpdateIndex={(index) => {
            setContent(contentData[index]);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </CircularMenu>
        <Content>
          <TeamContent>
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
