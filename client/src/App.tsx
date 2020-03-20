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

    const [cib1s, setCib1s] = useState();
    const [cib1, setCib1] = useState();
    const [cib5s, setCib5s] = useState();
    const [cib5, setCib5] = useState();
    const [cib5Bundles, setCib5Bundles] = useState();
    const [cib5Bundle, setCib5Bundle] = useState();
    const [candidatePrograms, setCandidatePrograms] = useState();
    const [candidateProgram, setCandidateProgram] = useState();

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

    useEffect(() => {
        const getCib1s = async () => {
            try {
                const response = await axios.get('/cib1');
                setCib1s(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const getCib1 = async () => {
            try {
                const response = await axios.get('/cib1/1');
                setCib1(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib1s();
        getCib1();
    }, []);

    useEffect(() => {
        const getCib5s = async () => {
            try {
                const response = await axios.get('/cib5');
                setCib5s(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const getCib5 = async () => {
            try {
                const response = await axios.get('/cib5/1');
                setCib5(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib5s();
        getCib5();
    }, []);

    useEffect(() => {
        const getCib5Bundles = async () => {
            try {
                const response = await axios.get('/cib5-bundles');
                setCib5Bundles(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const getCib5Bundle = async () => {
            try {
                const response = await axios.get('/cib5-bundles/3');
                setCib5Bundle(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib5Bundles();
        getCib5Bundle();
    }, []);

    useEffect(() => {
        const getCandidatePrograms = async () => {
            try {
                const response = await axios.get('/candidate-programs');
                setCandidatePrograms(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        const getCandidateProgram = async () => {
            try {
                const response = await axios.get('/candidate-programs/1');
                setCandidateProgram(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCandidatePrograms();
        getCandidateProgram();
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
