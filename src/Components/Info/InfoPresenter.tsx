import { Icon } from 'antd';
import React from 'react';
import Modal from '../Modal';
import './Info.css';

interface IState {
  show: boolean
}

class Info extends React.Component<IState>{
  
  public state = {
    show: false
  };

  public showModal = () => {
    this.setState({show:true})
  }

  public hideModal = () => {
    this.setState({show:false})
  }

  public render(){
    return (
    (
      <section className="Info">
        <div className="InfoTitle">
          <h1>Philociphy</h1>
          <p>
            베델은 이런 가치를 지향합니다. 여러분들과 이런여정을 떠나고 싶습니다.
      </p>
        </div>
        <div className="WholeBox">
          <div
            className="BoxLeft">
            <button onClick={this.showModal}>click me</button>
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <p>Modal</p>
                <p>Data</p>
              </Modal>
            <p>VISION</p>
            <Icon type="arrow-left" />
          </div>
          <div className="BoxRight">
            <p>VALUE</p>
            <Icon type="arrow-right" />
          </div>
        </div>
      </section>
    )
  )
  }
}

export default Info;