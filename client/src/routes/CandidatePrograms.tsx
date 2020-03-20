import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CandidatePrograms = () => {
    const [candidatePrograms, setCandidatePrograms] = useState();
    const [candidateProgram, setCandidateProgram] = useState();

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
        <div> Candidate Programs </div>
    );
};

export default CandidatePrograms;
