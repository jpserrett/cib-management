import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Cib5BundleType } from '../interfaces';

const Cib5BundlesList = () => {
    const [cib5Bundles, setCib5Bundles] = useState<Cib5BundleType[]>([]);

    useEffect(() => {
        const getCib5Bundles = async () => {
            try {
                const response = await axios.get('/cib5-bundles');
                setCib5Bundles(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib5Bundles();
    }, []);

    return (
        <>
            <div>CIB5 Bundles</div>
            <ul>
                {cib5Bundles && cib5Bundles.length > 1 ? cib5Bundles.map((bundle) => (
                    <li key={bundle.nsn}>
                        <span>{`NSN: ${bundle.nsn}`}</span>
                        <span>{`Edition: ${bundle.edition}`}</span>
                    </li>
                )) : null}
            </ul>
        </>
    );
};

export default Cib5BundlesList;
