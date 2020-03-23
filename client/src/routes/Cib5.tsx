import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Cib5Type } from '../interfaces';

const Cib5 = () => {
    const [cib5, setCib5] = useState<Cib5Type>({
        edition: 0,
        nsn: '',
        prodStatus: '',
        producer: '',
        classification: '',
        cellCurrencyYear: 2005,
        cib1s: [],
    });

    const { cib5Id } = useParams();

    useEffect(() => {
        const getCib5 = async () => {
            try {
                const response = await axios.get(`/cib5/${cib5Id}`);
                setCib5(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib5();
    }, [cib5Id]);

    return (
        <>
            <div>CIB5s</div>
            <span>{`NSN: ${cib5.nsn}`}</span>
        </>
    );
};

export default Cib5;
