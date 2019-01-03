import React from 'react';
import './Modal.css';

interface IProps {
    handleClose:any,
    show:any,
    children:any,
    showHideClassname: any
};

const Modal: React.SFC<IProps> = props => (
  <div className={props.showHideClassname}>
    <section className="modal-main">
      {props.children}
      <button onClick={props.handleClose}>close</button>
    </section>
  </div>
);

export default Modal;