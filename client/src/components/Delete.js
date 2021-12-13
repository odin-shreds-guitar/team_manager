import React, { useState } from 'react';
import axios from 'axios';
import {Button, Modal} from 'react-bootstrap';

const Delete = (props) => {
	const {playerId, afterDelete} = props;
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	
	const deleteHandler = () => {
		console.log(playerId)

		axios.delete('http://localhost:8000/api/team-manager/' + playerId)		
			.then((res) => {
				console.log("Player " + res.data.name + " successfully deleted")
				afterDelete(playerId)
				// forcing the modal to close due to some off behavior with it not closing
				handleClose()
			})
			.catch((err) => {console.log(err)})
	}
	return (
		<>
		<Button variant="danger" onClick={() => setShow(true)}>
			Delete
		</Button>

		<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Deleting Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this player?</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            No
        </Button>
		<Button variant="primary" onClick={deleteHandler}>
			Yes
		</Button>
        </Modal.Footer>
    	</Modal>
	</>
	)
}

export default Delete;