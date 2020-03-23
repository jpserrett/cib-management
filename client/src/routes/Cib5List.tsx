import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import { Cib5Type } from '../interfaces';
import Cib5 from './Cib5';

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
                        <Link to={`/cib5/${cib5.nsn}`}>
                            <span>{`NSN: ${cib5.nsn}`}</span>
                            <span>{`Edition: ${cib5.edition}`}</span>
                        </Link>

                    </li>
                )) : null}
            </ul>
            <Route path="/cib5/:cib5Id" component={Cib5} />
        </>
    );
};

export default Cib5List;
