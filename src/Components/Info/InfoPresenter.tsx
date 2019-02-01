import { Icon } from 'antd';
import React from 'react';
import { ModalLeft, ModalRight } from '../Modal/Modal';
import './Info.css';

interface IState {
  showleft?:boolean,
  showright?:boolean
}

class Info extends React.Component<IState>{
  public state:IState = {
    showleft:false,
    showright: false
  }
  
  public showModalLeft = () => {
    this.setState({ showleft:true })
  }

  public showModalRight = () => {
    this.setState({ showright: true })
  }

  public hideModal = () =>  {
    this.setState({ 
      showleft: false, 
      showright: false 
    })
  }

  public render(){
    return (
    <div className="InfoSection">
      <section className="Info">
          <div className="InfoTitle">
            <h1>Faith</h1>
            <p>
              베델은 이러한 비전과 가치를 가지고 있습니다
            </p>
          </div>
          <div className="WholeBox">
            <div className="BoxLeft" onClick={this.showModalLeft}>
              <p>VISION</p>
              <Icon className="arrow" type="arrow-left" />
            </div>

            <div className="BoxRight" onClick={this.showModalRight}>
              <p>VALUE</p>
              <Icon className="arrow" type="arrow-right" />
            </div>
            <div onClick={this.hideModal}>
              <ModalLeft showleft={this.state.showleft} handleClose={this.hideModal}>
                <div className="modalboxLeft">
                  <h1>Vision</h1>
                  <span>
                    나의 달려갈 길과 주 예수께 받은 사명 곧 하나님의 은혜의
                    복음 증거하는 일을 마치려 함에는 나의 생명을 조금도 귀한
                    것으로 여기지 아니하노라 (행20:24)
                  </span>
                  <p className="a" style={{ paddingTop: "1.5rem", fontSize: "1.3rem", lineHeight:"3rem" }}>
                    베델교회는 세계 선교와 베트남 복음 전도를 위해 설립되었습니다
                    <br />
                    그 사역을 위해 지속적으로 베트남 지역에 수많은 교회를 세워
                    <br />
                    하나님의 복음이 확장되는데 필요한 전진기지가 될 것입니다
                  </p>
                </div>
              </ModalLeft>
            </div>
            <div onClick={this.hideModal}>
              <ModalRight showRight={this.state.showright} handleClose={this.hideModal}>
                <div className="modalboxRight">
                  <h1>Value</h1>
                  <span>
                    내가 너희에게 이르노니 이와 같이 죄인 한 사람이 회개하면
                    <br />
                    하나님의 사자들 앞에 기쁨이 되느니라 (눅15:10)
                  </span>
                  <p className="a" style={{ paddingTop: "1.5rem", fontSize: "1.3rem", lineHeight: "3rem" }}>
                    베델교회가 중요하게 여기는 것은 잃어버린 영혼을 찾는
                    일입니다<br /> 이것은 베델 교회 존재의 목적이며 베델 교회가
                    가장 소중하게 여기는 가치입니다<br /> 여러분과 함께 잃어버린
                    영혼들을 찾아 주님의 제자로 세워나가길 원합니다
                  </p>
                </div>
              </ModalRight>
            </div>
          </div>
        </section>
      </div>
      );
  }
}

export default Info;