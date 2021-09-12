import Create from "./components/create";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Update from "./components/update";
import Read from "./components/read";
import { Button, Table } from "semantic-ui-react";
import Box from "./components/Box";

function App() {
  return (
    <Router>
      <div className="app">
        <h1 className="app__text">React Crud Operations</h1>
        <div className="box">
          <Route path="/" component={Box}/>
        </div>
        <div>
          <Route exact path="/create" component={Create} />
        </div>
        <div>
          <Route exact path="/read" component={Read} />
        </div>
        <Route path="/update" component={Update} />
      </div>
    </Router>
  );
}

export default App;
