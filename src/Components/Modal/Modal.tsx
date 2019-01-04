import { Icon } from 'antd';
import React from 'react';
import './Modal.css';

interface IProps {
    handleClose:any,
    showleft?:boolean,
    showright?:boolean,
    children:any
};

export const ModalLeft: React.SFC<IProps> = props => {  
    const showHideClassName = props.showleft ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
            <button onClick={props.handleClose}><Icon style={{fontSize:"2.2rem"}} type="close" /></button>
              {props.children}
            </section>
        </div>
  )
};

export const ModalRight: React.SFC<IProps> = props => {
    const showHideClassName = props.showright ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button onClick={props.handleClose}><Icon style={{ color: "#ffffff", fontSize: "2.2rem" }} type="close" /></button>
                {props.children}
            </section>
        </div>
    )
};
