import styled from 'styled-components';

export const TeamContainer = styled.section`
  background-color: #1e1f21;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  img {
    max-width: 56%;
    max-height: 56%;
  }
`;

export const TeamContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 72%;
`;

export const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 48px;
  font-weight: 700;
  color: ${(props) => props.color || 'black'};
`;

export const Details = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: white;
  text-indent: 54px;
  text-align: left;
  line-height: 2rem;
  word-spacing: 2px;
`;
