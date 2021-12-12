import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Delete = (props) => {
	const {playerId, afterDelete} = props;
	
	const deleteHandler = () => {
		console.log(playerId)

		axios.delete('http://localhost:8000/api/team-manager/' + playerId)		
			.then((res) => {
				console.log("Player " + res.data.name + " successfully deleted")
				afterDelete(playerId)
			})
			.catch((err) => {console.log(err)})
	}
	return (
		<Button variant="danger" onClick={(e) => deleteHandler()}>
			Delete
		</Button>
	)
}

export default Delete;