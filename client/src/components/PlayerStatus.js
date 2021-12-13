import React, {useState, useEffect} from 'react'
import axios from 'axios';
import{ Button, Table } from 'react-bootstrap';

const PlayersListFromStatus = () => {
	const [ players, setPlayers ] = useState([]);

	// this is used in both the useEffect and player status updates (through buttons)
	const getPlayers = () => {
		axios.get('http://localhost:8000/api/team-manager/')
		.then(response => {
			setPlayers(response.data)
		})
		.catch(err => console.log(`Couldn't load the list of players` + err))	
	}

	const updatePlayer = (player, status) => {
		axios.put('http://localhost:8000/api/team-manager/'+ player._id, {status: status})
			.then(response => {
				console.log("Player status successfully updated")
				getPlayers()
			})
			.catch(err=>console.log( err )) 
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
								<th>Status</th>
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
									< Button name = "playing" variant={
										(player.status === "playing")
											? "success"
											: "light"
									} onClick={() => {
										updatePlayer(player, "playing")
									}}>Playing</Button>
																		
									< Button name = "notplaying" variant={
										(player.status === "notplaying")
											? "danger"
											: "light"
									} onClick={() => {
										updatePlayer(player, "notplaying")
									}}>Not Playing</Button>
									
									< Button name = "undecided" variant={
										(player.status === "undecided")
											? "warning"
											: "light"
									} onClick={() => {
										updatePlayer(player, "undecided")
									}}>Undecided</Button>
								</td>
							</tr>
						)})}
						</tbody>
					</Table>
		</div>
	)
}

export default PlayersListFromStatus