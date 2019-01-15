import React from 'react';
import './Modal.css';

interface IProps {
    handleClose:any,
    showleft?:boolean,
    showRight?:boolean,
    children:any
};

export const ModalLeft: React.SFC<IProps> = props => {  
    const showHideClassName = props.showleft ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section id="modalMain1" className="modal-main">
                <button onClick={props.handleClose}>X</button>
              {props.children}
            </section>
        </div>
  )
};

export const ModalRight: React.SFC<IProps> = props => {
    const showHideClassName = props.showRight ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section id="modalMain2" className="modal-main">
                <button onClick={props.handleClose}>X</button>
                {props.children}
            </section>
        </div>
    )
};
