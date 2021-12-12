import React from 'react';
import { Link } from '@reach/router';
import PlayersList from '../components/PlayersList';

const Main = () => {
	return (
		<div className='wrapper'>
			{/* This is the same everywhere */}
			< Link to="/players/list" >List</Link> 
			< Link to="/players/addplayer">Add Player</Link> 
			{/* < PlayersList component here */}
			< PlayersList /> 
		</div>
	)
}

export default Main;