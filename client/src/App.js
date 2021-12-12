import { Router, Link } from '@reach/router';
import Main from './views/Main';
import './App.css';
import AddPlayer from './views/AddPlayer';

function App() {
  return (
    <div className="App">
      {/* These are always present */}
    	< Link to="/players/list" >Manage Players</Link> 
			< Link to="/status/game/1">Manage Player Status</Link> 
      < Router>
          < Main default path="/players/list"/>
          < AddPlayer path="/players/addplayer" />
      </Router>
    </div>
  );
}

export default App;
