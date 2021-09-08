import Scene from '../../components/Scene';
import { FAQsContainer, Topic, BoxCover, BoxContent, BoxAns, AvoidWrap } from './style';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

//import { showAns } from './style';
//showAns;

function FAQs() {

  const [activeId, setActiveId] = useState('0');

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }
 
  return(
    <Scene>
      <FAQsContainer>
        <Topic>FAQs</Topic>
        <BoxCover className='FAQs'>
          <Accordion defaultActiveKey={activeId}>
            <div className={activeId === '0' ? 'panel-wrap active-panel' : 'panel-wrap'}>
              <div className='panel-header'>
                <Accordion.Toggle onClick={() => toggleActive('0')} className='panel-toggle' variant='link' eventKey='0'>
                  <BoxContent><p>รูปแบบการสอนของโครงการในปีนี้</p></BoxContent>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='0'>
                <div className='panel-body'>
                  <BoxAns><p>
                    <AvoidWrap>ในปีนี้โครงการจะจัดในรูปแบบออนไลน์</AvoidWrap>&nbsp;
                    <AvoidWrap>ผ่านโปรแกรม Microsoft Team</AvoidWrap>&nbsp;
                    <AvoidWrap>ตั้งแต่วันที่ 23 ตุลาคม-20 พฤศจิกายน 2564</AvoidWrap>&nbsp;
                    <AvoidWrap>ทุก ๆ วันจันทร์เวลา 17.30 น.-20.00 น.</AvoidWrap>&nbsp;
                    <AvoidWrap>และวันเสาร์เวลา 13.30 น.-16.30 น.</AvoidWrap>
                  </p></BoxAns>
                </div>
              </Accordion.Collapse>
            </div>
            <div className={activeId === '1' ? 'panel-wrap active-panel' : 'panel-wrap'}>
              <div className='panel-header'>
                <Accordion.Toggle onClick={() => toggleActive('1')} className='panel-toggle' variant='link' eventKey='1'>
                  <BoxContent><p>สมัครแล้วมีสิทธิเข้าร่วมโครงการทุกคนไหม</p></BoxContent>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='1'>
                <div className='panel-body'>
                  <BoxAns><p>
                    <AvoidWrap>เนื่องจากโครงการ Hello World Hello Ermine</AvoidWrap>&nbsp;
                    <AvoidWrap>มีผู้ให้ความสนใจเข้ามาสมัครเป็นจำนวนมาก</AvoidWrap>&nbsp;
                    <AvoidWrap>ทางโครงการจึงต้องมีการคัดเลือกน้อง ๆ ที่มีสิทธิ์</AvoidWrap>
                    <AvoidWrap>เข้าร่วมโครงการในแต่ละสาขาที่เปิดรับสมัคร</AvoidWrap>
                  </p></BoxAns>
                </div>
              </Accordion.Collapse>
            </div>
            <div className={activeId === '2' ? 'panel-wrap active-panel' : 'panel-wrap'}>
              <div className='panel-header'>
                <Accordion.Toggle onClick={() => toggleActive('2')} className='panel-toggle' variant='link' eventKey='2'>
                  <BoxContent><p>อุปกรณ์ที่จำเป็นในการเข้าร่วมโครงการ</p></BoxContent>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='2'>
                <div className='panel-body'>
                  <BoxAns><p>
                    <AvoidWrap>อุปกรณ์ที่จำเป็นต่อโครงการของเราคือ</AvoidWrap>&nbsp;
                    <AvoidWrap>Notebook หรือ Laptop</AvoidWrap>&nbsp;
                    <AvoidWrap>ในส่วนของโปรแกรมที่ต้องติดตั้งในแต่ละฝ่าย</AvoidWrap>&nbsp;
                    <AvoidWrap>พี่ ๆ จะแจ้งน้องอีกรอบหลังจากประกาศรายชื่อ</AvoidWrap>
                    <AvoidWrap>ผู้มีสิทธิ์เข้าร่วมโครงการ</AvoidWrap>
                  </p></BoxAns>
                </div>
              </Accordion.Collapse>
            </div>
            <div className={activeId === '3' ? 'panel-wrap active-panel' : 'panel-wrap'}>
              <div className='panel-header'>
                <Accordion.Toggle onClick={() => toggleActive('3')} className='panel-toggle' variant='link' eventKey='3'>
                  <BoxContent><p>จำเป็นต้องมีพื้นฐานก่อนเข้าร่วมโครงการหรือไม่ ?</p></BoxContent>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='3'>
                <div className='panel-body'>
                  <BoxAns><p>
                    <AvoidWrap>ไม่จำเป็น เพราะพี่ ๆ ทุกฝ่ายจะสอนน้อง ๆ ตั้งแต่</AvoidWrap>
                    <AvoidWrap>ความรู้พื้นฐาน หากน้อง ๆ คนไหนมีข้อสงสัย</AvoidWrap>
                    <AvoidWrap>ก็สามารถถามพี่ ๆ ได้ตลอดเลย</AvoidWrap>&nbsp;
                    <AvoidWrap>รับรองว่าน้อง ๆ สามารถเข้าร่วมโครงการได้อย่าง</AvoidWrap>&nbsp;
                    <AvoidWrap>สนุกและเต็มเปี่ยมไปด้วยความรู้อย่างแน่นอน</AvoidWrap>
                  </p></BoxAns>
                </div>
              </Accordion.Collapse>
            </div>
            <div className={activeId === '4' ? 'panel-wrap active-panel' : 'panel-wrap'}>
              <div className='panel-header'>
                <Accordion.Toggle onClick={() => toggleActive('4')} className='panel-toggle' variant='link' eventKey='4'>
                  <BoxContent><p>จำเป็นต้องเข้าร่วมกิจกรรมทุกวันไหม ?</p></BoxContent>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='4'>
                <div className='panel-body'>
                  <BoxAns><p>
                    <AvoidWrap>เนื่องจากเนื้อหาในแต่ละครั้งมีความต่อเนื่องกัน</AvoidWrap>&nbsp;
                    <AvoidWrap>น้อง ๆ จึงจำเป็นที่จะต้องเข้าร่วมโครงการให้</AvoidWrap>
                    <AvoidWrap>ครบทุกวัน เพื่อความรู้ที่อัดแน่นและต่อเนื่อง</AvoidWrap>&nbsp;
                    <AvoidWrap>แต่ถ้าหากมีธุระจริง ๆ สามารถแจ้งที่พี่ ๆ ประจำ</AvoidWrap>
                    <AvoidWrap>สาขาของน้อง ๆ ได้เลย</AvoidWrap>
                  </p></BoxAns>
                </div>
              </Accordion.Collapse>
            </div>
            <div className={activeId === '5' ? 'panel-wrap active-panel' : 'panel-wrap'}>
              <div className='panel-header'>
                <Accordion.Toggle onClick={() => toggleActive('5')} className='panel-toggle' variant='link' eventKey='5'>
                  <BoxContent><p>เข้าร่วมโครงการแล้ว จะได้รับชั่วโมงกิจกรรมหรือไม่ ?</p></BoxContent>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey='5'>
                <div className='panel-body'>
                  <BoxAns><p>
                    <AvoidWrap>ทางโครงการได้เตรียมชั่วโมงกิจกรรมให้กับน้อง ๆ</AvoidWrap>&nbsp;
                    <AvoidWrap>ที่เข้าร่วมโครงการทุกคน</AvoidWrap>
                    <AvoidWrap>แต่เงื่อนไขคือ น้อง ๆ ต้องเข้าร่วมโครงการมากกว่า</AvoidWrap>&nbsp;
                    <AvoidWrap>60% ของจำนวนครั้งที่เรียนทั้งหมด</AvoidWrap>&nbsp;
                    <AvoidWrap>โดยจะมีพี่ ๆ แต่ละฝ่ายคอยเช็กชื่อน้อง ๆ ทุกครั้ง</AvoidWrap>
                    <AvoidWrap>เมื่อมีการเรียนการสอนในแต่ละวัน</AvoidWrap>
                  </p></BoxAns>
                </div>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </BoxCover>
      </FAQsContainer>
    </Scene>

  );
}

export default FAQs;