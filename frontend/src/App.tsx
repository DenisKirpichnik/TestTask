import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Form from './pages/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
