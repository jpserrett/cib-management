import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import axios from 'axios';
import User from './components/User';
import Cib1List from './routes/Cib1List';
import Cib5List from './routes/Cib5List';
import Cib5BundleList from './routes/Cib5BundleList';
import CandidateProgramList from './routes/CandidateProgramList';
import { UserInfo } from './interfaces';
import './App.scss';

function App() {
    /**
     * Set up state for user info
     */
    const [user, setUser] = useState<UserInfo>(
        {
            name: '',
            email: '',
            role: '',
        },
    );

    /**
     * React hook to perform methods on update.
     */
    useEffect(() => {
        /**
         * Use axios to fetch user data from server
         */
        const getUser = async () => {
            try {
                const response = await axios.get('/users/2');
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getUser();
    }, []);

    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    CIB-Management
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/cib1">CIB1</Link></li>
                            <li><Link to="/cib5">CIB5</Link></li>
                            <li><Link to="/cib5-bundles">CIB5 Bundles</Link></li>
                            <li><Link to="/candidate-programs">Candidate Programs</Link></li>
                        </ul>
                    </nav>
                    <User {...user} />
                </header>
                <div className="main">
                    <Switch>
                        <Route path="/cib1" component={Cib1List} />
                        <Route path="/cib5" component={Cib5List} />
                        <Route path="/cib5-bundles" component={Cib5BundleList} />
                        <Route path="/candidate-programs" component={CandidateProgramList} />
                    </Switch>

                </div>
            </div>
        </Router>

    );
}

export default App;
