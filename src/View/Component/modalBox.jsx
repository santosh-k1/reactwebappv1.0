import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class ModalBox extends React.Component {
    constructor(props, context) {
        super(props, context);
  
        // Handle state
        this.state = {
            show: false
        };
    }
  
    render() {
        // Close the dialog
        let close = () => {
            this.setState({ show: false});
        };
        let headerData = this.props.showheader;
        let showContent = this.props.showContent;
  
        return (
            <div className="modal-container" >
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={() => this.setState({ show: true })}
                >
                    Launch contained modal
                </Button>
  
                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">{headerData}</Modal.Title>
                    </Modal.Header>
  
                    <Modal.Body>
                        {showContent}
                    </Modal.Body>
  
                    <Modal.Footer>
                        <Button onClick={close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
  }
  export default ModalBox ;