import React from 'react'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function Model() {
    const [showKey, setShowKey] = React.useState(false)
  const ShowInputKey = () => {
    return setShowKey(!false)
  }
    return (
        <>
            <Button variant="success" onClick={ShowInputKey}>
                Open Modal
            </Button>
            <Modal show={showKey}>
                <Modal.Header closeButton onClick={ShowInputKey}>
                    <Modal.Title>React Modal Popover Example</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={ShowInputKey}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={ShowInputKey}>
                        Store
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Model