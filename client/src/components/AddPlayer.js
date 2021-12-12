import React from 'react';
import { Link } from '@reach/router';

const AddPlayer = () => {
	return (
		<div className='wrapper'>
			{/* This is the same everywhere */}
			< Link to="/players/list" >List</Link> 
			< Link to="/players/addplayer">Add Players</Link> 
			{/* < Add Player component here */}
		</div>
	)
}

export default AddPlayer;