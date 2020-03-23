import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Cib1Type } from '../interfaces';
import Cib1 from './Cib1';

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
                        <Link to={`/cib1/${cib.nsn}`}>
                            <span>{`NSN: ${cib.nsn}`}</span>
                            <span>{`Edition: ${cib.edition}`}</span>
                        </Link>
                    </li>
                )) : null}
            </ul>
            <Route path="/cib1/:cib1Id" component={Cib1} />
        </>
    );
};

export default Cib1List;
