import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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

    const { cib1Id } = useParams();

    useEffect(() => {
        const getCib1 = async () => {
            try {
                const response = await axios.get(`/cib1/${cib1Id}`);
                setCib1(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib1();
    }, [cib1Id]);

    return (
        <>
            <div>CIB1s</div>
            <span>{`NSN: ${cib1.nsn}`}</span>
        </>
    );
};

export default Cib1;
