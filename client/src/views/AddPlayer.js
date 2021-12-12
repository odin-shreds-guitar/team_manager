import React, { useState } from 'react';
import { Link } from '@reach/router';
import PlayerForm from '../components/Add';

const AddPlayer = () => {
	const [ player, setPlayer ] = useState("");
	const [ position, setPosition ] = useState("");

	return (
		<div className='wrapper'>
			{/* This is the same everywhere */}
			< Link to="/players/list" >List</Link> 
			< Link to="/players/addplayer">Add Players</Link> 
			{/* < Add Player component here */}
			<h2>Add Player</h2>
			< PlayerForm 
				player= { player }
				setPlayer =  { setPlayer }
				position= { position }
				setPosition = { setPosition }
			/>
		</div>
	)
}

export default AddPlayer;