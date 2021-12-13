import React, {useState, useEffect} from 'react'
import axios from 'axios';
import{ Table } from 'react-bootstrap';
import Delete from './Delete';


const PlayersList = () => {
	const [ players, setPlayers ] = useState([]);

	// this is used in both the Delete and useEffect
	const getPlayers = () => {
		axios.get('http://localhost:8000/api/team-manager/')
		.then(response => {
			// inline sorting of the response.data
			setPlayers(response.data.sort((a,b) => (a.name > b.name)? 1 : ((b.name > a.name ) ? -1 : 0)))
		})
		.catch(err => console.log(`Couldn't load the list of players` + err))	
	}


	


	useEffect(() => {			
		getPlayers()
	},[])


	return (
		<div className="playersList">
					<Table striped bordered hover >
						<thead>
							<tr>
								<th>Players</th>
								<th>Preferred Position</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
						{ players.map((player, index) => {
						return (
							<tr key={index}>
								<td>
									{player.name}
								</td>
								<td>
									{player.position}
								</td>
								<td>
									< Delete playerId={player._id} afterDelete={getPlayers}/>
								</td>
							</tr>
						)})}
						</tbody>
					</Table>
		</div>
	)
}

export default PlayersList