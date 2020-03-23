import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import CandidateProgram from './CandidateProgram';
import { CandidateProgramType } from '../interfaces';

const CandidateProgramList = () => {
    const [candidatePrograms, setCandidatePrograms] = useState<CandidateProgramType[]>([]);

    useEffect(() => {
        const getCandidatePrograms = async () => {
            try {
                const response = await axios.get('/candidate-programs');
                setCandidatePrograms(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCandidatePrograms();
    }, []);

    return (
        <>
            <div> Candidate Programs </div>
            <ul>
                {candidatePrograms && candidatePrograms.length > 1
                    ? candidatePrograms.map((program) => (
                        <li key={program.orderNumber}>
                            <Link to={`/candidate-programs/${program.orderNumber}`}><span>{`Order Number: ${program.orderNumber}`}</span></Link>
                        </li>
                    )) : null}
            </ul>
            <Route path="/candidate-programs/:candidateProgramId" component={CandidateProgram} />

        </>
    );
};

export default CandidateProgramList;
