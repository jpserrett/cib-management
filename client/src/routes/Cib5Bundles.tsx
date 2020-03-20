import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cib5Bundles = () => {
    const [cib5Bundles, setCib5Bundles] = useState();
    const [cib5Bundle, setCib5Bundle] = useState();

    useEffect(() => {
        const getCib5Bundles = async () => {
            try {
                const response = await axios.get('/cib5-bundles');
                setCib5Bundles(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const getCib5Bundle = async () => {
            try {
                const response = await axios.get('/cib5-bundles/3');
                setCib5Bundle(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib5Bundles();
        getCib5Bundle();
    }, []);

    return (
        <div>CIB5 Bundles</div>
    );
};

export default Cib5Bundles;
