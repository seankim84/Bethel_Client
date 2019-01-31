import { Button, Steps } from 'antd';
import  React from 'react';
import './Map.css';

const Step = Steps.Step;

const steps = [
  {
    content: (
      <div className="Map">
        <div className="MapExplain">
            <p><strong>주소: </strong>380 Dien Bien Phu, Phuong 11, Quan 10, Ho Chi Minh</p>
            <p><strong>차량담당: </strong>0707-085-574</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4884490267727!2d106.67798231494179!3d10.773852062186894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f21323042f1%3A0xce93d104d13da15b!2z67Kg64246rWQ7ZqM!5e0!3m2!1sko!2skr!4v1548912214139" />
      </div>
    ),
    title: "사이공"
  },

  {
    content: (
      <div className="Map">
        <div className="MapExplain">
            <p><strong>주소: </strong>Tan Phong, District 7, Ho Chi Minh</p>
            <p><strong>차량담당: </strong>093-755-3962</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.00286753078922!2d106.7064955476992!3d10.73094483470305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fef1f5df9c7%3A0x70eed531a007e9a2!2sBethel+Church!5e0!3m2!1sko!2s!4v1545114549213" />
      </div>
    ),
    title: "푸미흥"
  },

  {
    content: (
      <div className="Map">
        <div className="MapExplain">
            <p><strong>주소: </strong>406 Truong Chinh, Phuong 13, Tan Binh, Ho Chi Minh</p>
            <p><strong>차량담당: </strong>093-778-2042</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1448543327697!2d106.63758041480092!3d10.800215692305343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752951cf180a59%3A0x9124a0824d8539cf!2zNDA2IFRyxrDhu51uZyBDaGluaCwgUGjGsOG7nW5nIDEzLCBUw6JuIELDrG5oLCBI4buTIENow60gTWluaCwg67Kg7Yq464Ko!5e0!3m2!1sko!2skr!4v1548912486162" />
      </div>
    ),
    title: "공항"
  },
  {
    content: (
      <div className="Map">
        <div className="MapExplain">
            <p><strong>주소: </strong>Toa nha Detech, So 8, Tôn That Thuyet, My Dinh, 2 Cau Giay, My Dinh, Cau Giay, Hanoi</p>
            <p><strong>차량담당: </strong>093-475-7210</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1001450482077!2d105.77992851493264!3d21.028678585998367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd4c609df%3A0x4d5733435648516e!2sHanoi+Bethel+Church!5e0!3m2!1sko!2skr!4v1548912527995" />
      </div>
    ),
    title: "하노이"
  }
];

class GoogleMap extends React.Component {
  
  public state = {current : 0}

  public next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  public prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  public render() {
    const { current } = this.state;
    return (
      <div className="MapContent">
          <h1>Contacts</h1>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {
            current < steps.length - 1
            && <Button type="primary" onClick={() => this.next()}>다음</Button>
          }
          
          {
            current > 0
            && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              이전
            </Button>
            )
          }
        </div>
      </div>
    );
  }
}

export default GoogleMap;