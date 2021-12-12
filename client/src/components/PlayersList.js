import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from "@reach/router";
import{ Button, Table } from 'react-bootstrap';
import Delete from './Delete';

const PlayersList = (props) => {
	const [ players, setPlayers ] = useState([]);

	// this is used in both the Delete and useEffect
	const getPlayers = () => {
		axios.get('http://localhost:8000/api/team-manager/')
		.then(response => {
			setPlayers(response.data)
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
									{<Link className="list" to={"/player/"+ player._id} >{player.name}</Link>}
								</td>
								<td>
									{<Link className="list" to={"/player/"+ player._id} >{player.position}</Link>}
								</td>
								<td>
									{/* {<Link className="list" to={"/player/"+ player._id} ><Button variant="primary" >Edit</Button></Link>} */}
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