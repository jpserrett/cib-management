import React from 'react';
import User from './components/User';
import { UserInfo } from './interfaces';
import './App.scss';

function App() {
    const user: UserInfo = {
        name: 'Jon Doe',
        email: 'jon.doe@gloogle.com',
        role: 'user',
    };

    return (
        <div className="app">
            <header className="app-header">
                CIB-Management
            </header>
            <div className="main">
                <User {...user} />
            </div>
        </div>
    );
}

export default App;
