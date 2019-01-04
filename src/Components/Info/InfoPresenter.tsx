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
    this.setState({ showright: false, showleft: false })
  }

  public render(){
    return <section className="Info">
        <div className="InfoTitle">
          <h1>Philociphy</h1>
          <p>
            베델은 이런 가치를 지향합니다. 여러분들과 이런여정을 떠나고
            싶습니다.
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
          <div>
            <ModalLeft showleft={this.state.showleft} handleClose={this.hideModal}>
              <div className="modalboxLeft">
                <h1>Vision</h1>
                <span>
                  카카오벤처스는 우리에게 필요한 미래를 앞당기는 혁신에
                  함께하는 든든한 동반자입니다.
                </span>
                <p>
                  창업은 세상의 문제를 해결하는 과정이며, 궁극적으로 삶의
                  질을 높이는 혁신을 가능케 합니다. 결국 창업을 통해
                  우리에게 다가올 긍정적인 미래를 앞당길 수 있습니다. 따라서
                  창업가는 문제 해결을 통해 세상을 바꾸는 개척자라고
                  믿습니다. 우리는 창업가를 진심으로 존경하고, 역량 있는
                  인재들이 창업하기에 좋은 생태계를 조성하는 데 최선을
                  다하고 있습니다. 카카오벤처스는 창업가의 어렵고 험난한
                  여정에 함께하는 든든한 동반자가 되겠습니다.
                </p>
              </div>
            </ModalLeft>
          </div>
          <div>
            <ModalRight showright={this.state.showright} handleClose={this.hideModal}>
              <div className="modalboxRight">
                <h1>Value</h1>
                <span>
                  카카오벤처스는 우리에게 필요한 미래를 앞당기는 혁신에
                  함께하는 든든한 동반자입니다.
                </span>
                <p>
                  창업은 세상의 문제를 해결하는 과정이며, 궁극적으로 삶의
                  질을 높이는 혁신을 가능케 합니다. 결국 창업을 통해
                  우리에게 다가올 긍정적인 미래를 앞당길 수 있습니다. 따라서
                  창업가는 문제 해결을 통해 세상을 바꾸는 개척자라고
                  믿습니다. 우리는 창업가를 진심으로 존경하고, 역량 있는
                  인재들이 창업하기에 좋은 생태계를 조성하는 데 최선을
                  다하고 있습니다. 카카오벤처스는 창업가의 어렵고 험난한
                  여정에 함께하는 든든한 동반자가 되겠습니다.
                </p>
              </div>
            </ModalRight>
          </div>
        </div>
      </section>;
  }
}

export default Info;