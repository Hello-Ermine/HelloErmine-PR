import styled from 'styled-components';
import scripture_head from '../../assets/faqs/scripture_head.png';
import faqs_background from '../../assets/faqs/faqs_background.jpg';
//import React from 'react';


export const FAQsContainer = styled.section`
  background-image: url(${faqs_background});
  height: 100%;
  width: 100%;
  font-family : mali;
  position: relative;
 ` ;
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
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    
`;
export const BoxContent = styled.div`
    display : flex;
    margin-top:0.5vw;
    align-items : center;
    height : 55px;
    background-image: url(${scripture_head});
    background-size: 571px;
    font-size: 24px;

    p{
      padding-left : 30px;
      padding-right : 30px;
    }

`;

/*/export function showAns(){
  document.getElementById('show').innerHTML = <h1> hello my name is susy </h1>;
}/

/export default function Modal({open,children,onClose}) {

  if(!open){return null;}

  return(
    <div>
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  );
}*/