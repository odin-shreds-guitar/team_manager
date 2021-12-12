import React from 'react'
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { navigate } from '@reach/router'
import Button from 'react-bootstrap/Button';


// form to add a player
const PlayerForm = (props) => {
	// we are passing only the player and setPlayer as they are handled in the Edit and Add pages
	const { player, setPlayer, position, setPosition } = props;

	// create player handler
	const createPlayer = () => {
		console.log(player)
		axios.post('http://localhost:8000/api/team-manager/new', { name: player, position: position})
			.then(res=>{
				console.log("Response: ", res) 
				navigate("/")
			})
			.catch(err=>{
				console.log("Error: ", err)
				if (err.response.data.errors){
					// setErrors(err.response.data.errors);
				}		  
		})
	}

	return (
		<div>
			<Form.Label>Player name: </Form.Label>
			<Form.Control className="box" type="text" name= "player" defaultValue={player} onChange = {(e)=>setPlayer(e.target.value)} />
			<Form.Label>Player position: </Form.Label>
			<Form.Control className="box" type="text" name= "position" defaultValue={position} onChange = {(e)=>setPosition(e.target.value)} />
			<Button variant="primary"  onClick={ createPlayer }>Create Player</Button>
		</div>
	)
}

export default PlayerForm