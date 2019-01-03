import { Icon } from 'antd';
import React from 'react';
import Modal from '../Modal'
import './Info.css';

class Info extends React.Component{
  public state = {
    show: false
  }
  public showModal():void {
    this.setState({ show:true })
  }

  public hideModal():void  {
    this.setState({show: false})
  }

  public ClickEvent() {
    return <main>
        <h1>React Modal</h1>
        <Modal showHideClassname="" show={this.state.show} handleClose={this.hideModal}>
          <p>sean</p>
          <p>Data</p>
        </Modal>
      </main>;
  }


  public render(){
    return (
      <section className="Info">
        <div className="InfoTitle">
          <h1>Philociphy</h1>
          <p>
            베델은 이런 가치를 지향합니다. 여러분들과 이런여정을 떠나고 싶습니다.
        </p>
        </div>
        <div className="WholeBox">
          <div className="BoxLeft" onClick={this.showModal}>
            <p>VISION</p>
            <Icon className="arrow" type="arrow-left" />
          </div>

          <div className="BoxRight" onClick={this.ClickEvent}>
            <p>VALUE</p>
            <Icon className="arrow" type="arrow-right" />
          </div>
        </div>
      </section>
  )
  }
}

export default Info;