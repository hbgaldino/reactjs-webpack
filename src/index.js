import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './js/pages/Home.jsx';
import Dashboard from './js/pages/Dashboard.jsx';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <h1>Título</h1>
                    <div>
                        <h2>Subtítulo</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));