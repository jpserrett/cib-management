import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cib1Type } from '../interfaces';

const Cib1 = () => {
    const [cib1, setCib1] = useState<Cib1Type>({
        edition: 1,
        nsn: '',
        prodStatus: '',
        producer: '',
        classification: '',
        cellCurrencyYear: 0,
        nwCoord: 90,
        neCoord: 90,
        swCoord: 90,
        seCoord: 90,
    });

    useEffect(() => {
        const getCib1 = async () => {
            try {
                const response = await axios.get('/cib1/ABC123');
                setCib1(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib1();
    }, []);

    return (
        <>
            <h1>{cib1.nsn}</h1>

        </>
    );
};

export default Cib1;
