import React from 'react';
import './Modal.css'

interface IProps {
    show?: boolean;
    handleClose: any;
    children: any;
};

const Modal: React.SFC<IProps> = ({ show, handleClose, children }) => {
    const showHideClassName = show ? "display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    )
}


export default Modal;