import { Icon } from 'antd';
import React from 'react';
import ReactModal from '../Modal';
import './Info.css';

interface IState {
  modalIsOpen: any;
}

class Info extends React.Component<IState>{
  public state:IState = {
    modalIsOpen: false
  };

  public openModal() {
    this.setState({ modalIsOpen: true })
  }

  public closeModal() {
    this.setState({ 
      modalIsOpen: false })
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
          <div className="BoxLeft" onClick={this.openModal}>
            <ReactModal openModal={this.openModal}
              closeModal={this.closeModal}
               >
               <button onClick={this.closeModal}>close </button>
               sadfsafdasf
               </ReactModal>
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
  }
}

export default Info;