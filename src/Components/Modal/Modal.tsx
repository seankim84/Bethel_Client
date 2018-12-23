import React from 'react';
import Modal from 'react-modal';

interface IProps {
    openModal: any,
    closeModal: any
}

const customStyles = {
  content: {
    bottom: "auto",
    left: "50%",
    marginRight: "-50%",
    right: "auto",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
};

export default class ReactModal extends React.Component<IProps> {
    public render  (){
        return (
            <Modal
                isOpen={this.props.openModal}
                onRequestClose={this.props.closeModal}
                style={customStyles}>
                <h1>{this.props.children}</h1>
            </Modal>
        )
    }
    
}