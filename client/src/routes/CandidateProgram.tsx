import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { CandidateProgramType } from '../interfaces';

const CandidateProgram = () => {
    const [candidateProgram, setCandidateProgram] = useState<CandidateProgramType>({
        cib5s: [],
        cib1s: [],
        cib5Bundles: [],
        volumesAllocated: 0,
        volumesProduces: 0,
        quartersAllocated: 0,
        quartersProduced: 0,
        budgetUsed: '',
        budgetOrdered: '',
        budgetCompleted: '',
        orderNumber: '',
    });
    const { candidateProgramId } = useParams();

    useEffect(() => {
        const getCandidatePrograms = async () => {
            try {
                const response = await axios.get(`/candidate-programs/${candidateProgramId}`);
                setCandidateProgram(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCandidatePrograms();
    }, [candidateProgramId]);

    return (
        <>
            <div> Candidate Program </div>
            <span>{`Order Number: ${candidateProgram.orderNumber}`}</span>
        </>
    );
};

export default CandidateProgram;
