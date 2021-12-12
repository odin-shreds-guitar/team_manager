import { Router, Link } from '@reach/router';
import Main from './views/Main';
import './App.css';
import AddPlayer from './views/AddPlayer';
import Status from './views/Status';

function App() {
  return (
    <div className="App">
      {/* These are always present */}
    	<div className='links-bar'>
        < Link to="/players/list" >Manage Players</Link> 
              < Link to="/status/game/1">Manage Player Status</Link>
      </div>
      < Router>
          < Main default path="/players/list"/>
          < AddPlayer path="/players/addplayer" />
          < Status path="/status/game/1"/>
      </Router>
    </div>
  );
}

export default App;
