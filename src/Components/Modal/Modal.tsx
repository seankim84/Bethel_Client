import React from 'react';
import './Modal.css'

interface IProps {
    show?: any;
    handleClose?: any;
    children: any;
};

const Modal:React.SFC<IProps> = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "display-block" : "display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>close</button>
            </section>
        </div>
    );
};

export default Modal;