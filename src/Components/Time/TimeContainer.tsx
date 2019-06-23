import { Button, Card, Steps } from 'antd';
import  React from 'react';
import './Time.css';

const Step = Steps.Step;

const steps = [
  {
    content: <div className="TimeForm">
        <div>
            <p
              style={{
                color: 'rgba(0, 0, 0, 0.85)',
                fontSize: 14,
                fontWeight: 500,
                marginBottom: 16,
              }}
            >
              <p style={{fontSize: "1.2rem"}}>사이공 교회 예배</p>
            </p>
    <div className="CardBox">
        <Card
          type="inner"
          title="주일 예배">
            오전 11시 30분 (본당)
        </Card>

        <Card
          type="inner"
          title="중고등부">
          오전 10시 (본당)
        </Card>

        <Card
          type="inner"
          title="초등부">
          오전 10시 (본당 1층)
        </Card>

        <Card
          type="inner"
          title="유치부">
          오전 11시 (본당 1층)
        </Card> 
            </div>
        </div>
    </div>,
    title: "사이공"
  },

  {
    content: <div className="TimeForm">
        <div>
            <p
              style={{
                color: 'rgba(0, 0, 0, 0.85)',
                fontSize: 14,
                fontWeight: 500,
                marginBottom: 16,
              }}
            >
              <p style={{fontSize: "1.2rem"}}>푸미흥 교회 예배</p>
            </p>
    <div className="CardBox">
        <Card
          type="inner"
          title="주일 예배">
            오전 9시 30분 (본당)
        </Card>

        <Card
          type="inner"
          title="중고등부">
          오후 1시 30분 (본당)
        </Card>

        <Card
          type="inner"
          title="초등부">
          오전 11시 (교육관)
        </Card>

        <Card
          type="inner"
          title="유치부">
          오전 11시 (교육관)
        </Card>

        <Card
          type="inner"
          title="수요예배">
          오전 10시 (본당)
        </Card> 

        <Card
          type="inner"
          title="새벽예배 (화~토)">
          오전 5시 (본당)
        </Card>  
            </div>
        </div>
    </div>,
    title: "푸미흥",  
  },
  
  {
    content: <div className="TimeForm">
        <div>
            <p
              style={{
                color: 'rgba(0, 0, 0, 0.85)',
                fontSize: 14,
                fontWeight: 500,
                marginBottom: 16,
              }}
            >
              <p style={{fontSize: "1.2rem"}}>하노이 교회 예배</p>
            </p>
    <div className="CardBox">
        <Card
          type="inner"
          title="주일 예배 1부">
            오전 9시 15분 (본당)
        </Card>

        <Card
          type="inner"
          title="주일 예배 2부">
            오전 11시 (본당)
        </Card>

        <Card
          type="inner"
          title="수요예배">
          오전 10시 30분 (본당)
        </Card>

        <Card
          type="inner"
          title="주일학교">
          오전 11시 (본당)
        </Card>
            </div>
        </div>
    </div>,
    title: "하노이"
    
  }
];

class Time extends React.Component {
  
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
      <div className="TimeContent">
          <h1>예배와 시간</h1>
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

export default Time;