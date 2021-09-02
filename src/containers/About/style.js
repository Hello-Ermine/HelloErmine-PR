import styled from 'styled-components';
import Paper from '../../assets/About/about_paper_03.png';
import background2 from '../../assets/About/about_background2.jpg';


export const AboutContainer = styled.div`
position: relative;
  padding-left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background2});
  background-position: 0 25%;
  background-repeat: no-repeat;
  background-size: cover ;
`;

export const Topic = styled.h1`
  color: white;
  font-size: 64px;
  font-weight: bold;
  padding: 0 1em 1em 1em;
  text-align: center;
`;

export const BoxContainer = styled.div`
  background-image: url(${Paper});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
  text-align: justify;
  width: 60%;
  z-index: 1;

  p {
    text-indent: .5in;
    font-size: 24px;
    font-weight: 500;
    width: 40vw;
    margin: 1em 0 1em 1em;
  }
`;

export const ImgErmine = styled.img`
  position: absolute;
  width: 30%;
  top: 28%;
  right: 4%;
  transform: rotate(350deg);
`;

export const ImgBg2 = styled.img`
 position: absolute;
 z-index: 0;
 width: 100%;
 bottom: 0;
 transform: translateY(30%);
`;

// `;

// export const Topic = styled.h1`
//   padding-top:12vh;
//   text-align: center;
//     margin-bottom:40px;
//     color:white;
//     font-size:64px;
//     /* @media screen and (max-width:600px){
//       font-size:20px;
//     } */
// `;

// export const BoxCover = styled.div`
//   display:flex;
//   flex-direction: column;
//   /* align-items: center;
//   justify-c
//   ontent: center */
// `;
// export const BoxWithErmine = styled.div`
//   display:flex;
//   margin-left:13vw;
//   border-radius: 10px;
//   background-color:#D9D9D9;
//   /* width:1048px; */
//   width:72vw;
//   height:344px;

//   img {
//     position: absolute;
//     right: 10%;
//     top:20%;
//     width: 439px;
//     height: 478px;
//     transform: rotate(-11.33deg);
//   };
// `;

// export const ContentInBox = styled.p`
//   border-radius: 10%;
//   font-size:24px;

//   @media screen and (max-width:1300px){
//     font-size:23px;
//   }
//   @media screen and (max-width:1250px){
//     font-size:20px;
//   }
//   @media screen and (max-width:1100px){
//       font-size:16px;
//   }
// `;

// export const NewLine = styled.span`
//   margin-left:48px;
//   display:block;
// `;

// export const NewLineTop = styled.span`
//   margin-top:40px;
//   margin-left:84px;
//   display:block;
// `;
