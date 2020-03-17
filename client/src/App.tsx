import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './components/User';
import { UserInfo } from './interfaces';
import './App.scss';
import TestForm from './components/Form';

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
        <div className="app">
            <header className="app-header">
                CIB-Management
            </header>
            <div className="main">
                <User {...user} />
                <TestForm />
            </div>
        </div>
    );
}

export default App;
