import Scene from '../../components/Scene';
import { FAQsContainer, Topic, BoxCover, BoxContent, BoxAns } from './style';
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
                  <BoxAns><p>ในปีนี้โครงการจะจัดในรูปแบบออนไลน์ ผ่านโปรแกรม Microsoft Team <br /> 
                  ตั้งแต่วันที่ 23 ตุลาคม-20 พฤศจิกายน 2564 <br />
                  ทุก ๆ วันจันทร์เวลา 17.30 น.-20.00 น. และวันเสาร์เวลา 13.30 น.-16.30 น.</p></BoxAns>
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
                  <BoxAns><p>เนื่องจากโครงการ Hello World Hello Ermine มีผู้ให้ความสนใจเข้ามาสมัครเป็นจำนวนมาก <br />
                  ทางโครงการจึงต้องมีการคัดเลือกน้อง ๆ ที่มีสิทธิ์เข้าร่วมโครงการในแต่ละสาขาที่เปิดรับสมัคร</p></BoxAns>
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
                  <BoxAns><p>อุปกรณ์ที่จำเป็นต่อโครงการของเราคือ Notebook หรือ Laptop <br />
                  ในส่วนของโปรแกรมที่ต้องติดตั้งในแต่ละฝ่าย พี่ ๆ จะแจ้งน้องอีกรอบ <br />
                  หลังจากประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมโครงการ</p></BoxAns>
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
                  <BoxAns><p>ไม่จำเป็น เพราะพี่ ๆ ทุกฝ่ายจะสอนน้อง ๆ ตั้งแต่ความรู้พื้นฐาน <br />
                  หากน้อง ๆ คนไหนมีข้อสงสัยก็สามารถถามพี่ ๆ ได้ตลอดเลย <br />
                  รับรองว่าน้อง ๆ สามารถเข้าร่วมโครงการได้อย่างสนุก และเต็มเปี่ยมไปด้วยความรู้อย่างแน่นอน</p></BoxAns>
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
                  <BoxAns><p>เนื่องจากเนื้อหาในแต่ละครั้งมีความต่อเนื่องกัน น้อง ๆ จึงจำเป็นที่จะต้องเข้าร่วมโครงการให้ครบทุกวัน<br />
                  เพื่อความรู้ที่อัดแน่นและต่อเนื่อง แต่ถ้าหากมีธุระจริง ๆ สามารถแจ้งที่พี่ ๆ ประจำสาขาของน้อง ๆ ได้เลย</p></BoxAns>
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
                  <BoxAns><p>ทางโครงการได้เตรียมชั่วโมงกิจกรรมให้กับน้อง ๆ ที่เข้าร่วมโครงการทุกคน<br />
                  แต่เงื่อนไขคือ น้อง ๆ ต้องเข้าร่วมโครงการมากกว่า 60% ของจำนวนครั้งที่เรียนทั้งหมด<br />
                  โดยจะมีพี่ ๆ แต่ละฝ่ายคอยเช็กชื่อน้อง ๆ ทุกครั้งเมื่อมีการเรียนการสอนในแต่ละวัน</p></BoxAns>
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