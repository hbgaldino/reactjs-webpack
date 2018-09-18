import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { I18n } from 'react-i18next';

import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';

class App extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t, { i18n }) => (
                        <Router>
                            <div>
                                <h1>{t('title')}</h1>
                                <div>
                                    <h2>Subtítulo</h2>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/dashboard">Dashboard</Link></li>
                                    </ul>
                                    <button onClick={() => i18n.changeLanguage('en-US')}>enUS</button>
                                    <button onClick={() => i18n.changeLanguage('pt')}>ptBR</button>
                                </div>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/dashboard" component={Dashboard} />
                            </div>
                        </Router>
                    )
                }
            </I18n>
        );
    }
}

export default App;