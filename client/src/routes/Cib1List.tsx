import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cib1Type } from '../interfaces';

const Cib1List = () => {
    const [cib1s, setCib1s] = useState<Cib1Type[]>([]);

    useEffect(() => {
        const getCib1s = async () => {
            try {
                const response = await axios.get('/cib1');
                setCib1s(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib1s();
    }, []);

    return (
        <>
            <h1>CIB1s</h1>
            <ul>
                {cib1s && cib1s.length > 1 ? cib1s.map((cib) => (
                    <li key={cib.nsn}>
                        <span>{`NSN: ${cib.nsn}`}</span>
                        <span>{`Edition: ${cib.edition}`}</span>
                    </li>
                )) : null}
            </ul>
        </>
    );
};

export default Cib1List;
