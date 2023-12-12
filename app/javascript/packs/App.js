import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => {
  return 
  <div>
    <Router>
        <Route path="/" exact component={Greeting} />
    </Router>
  </div>
};

export default App;
