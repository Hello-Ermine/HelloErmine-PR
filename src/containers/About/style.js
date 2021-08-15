import styled from 'styled-components';
export const AboutContainer = styled.section`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  flex-direction: column;
  background-color: lightblue;
  height: 100%;
  width: 100%;
`;
export const Topic = styled.h1`
  padding-top:12vh;
  text-align: center;
    margin-bottom:40px;
    color:white;
    font-size:64px;
    /* @media screen and (max-width:600px){
      font-size:20px;
    } */
`;
export const BoxCover = styled.div`
  display:flex; 
  flex-direction: column;
  /* align-items: center;
  justify-content: center */
`;
export const BoxWithErmine = styled.div`
display:flex;
margin-left:13vw;
border-radius: 10px;
  img{
  left:66%;
  top:20%;
  width:439px;
  height: 478px;
   transform: rotate(-11.33deg);
   position: absolute;
   
  };
  background-color:#D9D9D9;
  /* width:1048px; */
  width:72vw;
  height:344px;
`;
export const ContentInBox = styled.p`
  border-radius: 10%;
  font-size:24px;
  @media screen and (max-width:1300px){
      font-size:23px;
    }
  @media screen and (max-width:1250px){
      font-size:20px;
    }
  @media screen and (max-width:1100px){
      font-size:16px;
    }
`;
export const NewLine = styled.span`
  margin-left:48px;
  display:block;
`;
export const NewLineTop = styled.span`
margin-top:40px;
  margin-left:84px;
  display:block;
`;