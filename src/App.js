import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home'
import Update from './components/Update';
import Create from './components/Create';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Router>

        <Route path="/list">
          <List />
        </Route>

        <Route path="/create">
          <Create />
        </Route>


        <Route path="/update/:id"
        render={props=>(<Update {...props} />
        )}
        >   
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

      </Router>
      
    </div>
  );
}

export default App;
