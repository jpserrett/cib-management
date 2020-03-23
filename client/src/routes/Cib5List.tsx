import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cib5Type } from '../interfaces';

const Cib5List = () => {
    const [cib5s, setCib5s] = useState<Cib5Type[]>([]);

    useEffect(() => {
        const getCib5s = async () => {
            try {
                const response = await axios.get('/cib5');
                setCib5s(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib5s();
    }, []);

    return (
        <>
            <h1>CIB5s</h1>
            <ul>
                {cib5s && cib5s.length > 1 ? cib5s.map((cib5) => (
                    <li key={cib5.nsn}>
                        <span>{`NSN: ${cib5.nsn}`}</span>
                        <span>{`Edition: ${cib5.edition}`}</span>
                    </li>
                )) : null}
            </ul>
        </>
    );
};

export default Cib5List;
