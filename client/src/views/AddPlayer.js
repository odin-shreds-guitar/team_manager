import React, { useState } from 'react';
import { Link } from '@reach/router';
import PlayerForm from '../components/Add';

const AddPlayer = () => {
	const [ player, setPlayer ] = useState("");
	const [ position, setPosition ] = useState("");

	return (
		<div className='wrapper'>
			{/* This is the same everywhere */}
			<div className="links-bar">
				< Link to="/players/list">List</Link>
				< Link to="/players/addplayer">Add Player</Link>
			</div>
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