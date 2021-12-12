import React, { useState } from 'react';
import { Link } from '@reach/router';
import PlayerForm from '../components/Add';
import PlayersList from '../components/PlayerStatus';

const Status = () => {
	const [ player, setPlayer ] = useState("");
	const [ position, setPosition ] = useState("");

	return (
		<div className='wrapper'>
			{/* This is the same everywhere */}
			<div className="links-bar">
				< Link to="/status/game/1">Game 1</Link>
				< Link to="/status/game/1">Game 2</Link>
				< Link to="/status/game/1">Game 3</Link>
			</div>
			{/* < Add Player component here */}
			<h2>Add Player</h2>
			< PlayersList 
				player= { player }
				setPlayer =  { setPlayer }
			/>
		</div>
	)
}

export default Status;