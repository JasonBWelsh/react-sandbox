import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Home from './components/Home/Home.js';
import Drd1 from './components/Drd1/Drd1.js';
import Drd2 from './components/Drd2/Drd2.js';
import Drd3 from './components/Drd3/Drd3.js';

function App() {
  const history = useHistory();
  console.log('DRD history::', history);

  const handleGoBack = () => {
    // history.goBack();
  };

  return (
    <Router>
      <div className="App">
        <header className="main-header">
          <h1 className="main-title">Some Title</h1>
          <nav>
            <ul className="main-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Drd/1">DRD1</Link>
              </li>
              <li>
                <Link to="/Drd/2">DRD2</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: '/Drd/3',
                    state: {
                      from: 'App.js',
                      testKey: 'testing',
                    },
                  }}
                >
                  DRD3
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Drd/1" component={Drd1} />
            <Route path="/Drd/2" component={Drd2} />
            <Route path="/Drd/3" component={Drd3} />
          </Switch>
          <button onClick={handleGoBack}>Back</button>
        </main>
      </div>
    </Router>
  );
}

export default App;
