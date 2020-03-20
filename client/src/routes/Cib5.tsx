import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cib5 = () => {
    const [cib5s, setCib5s] = useState();
    const [cib5, setCib5] = useState();

    useEffect(() => {
        const getCib5s = async () => {
            try {
                const response = await axios.get('/cib5');
                setCib5s(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const getCib5 = async () => {
            try {
                const response = await axios.get('/cib5/1');
                setCib5(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib5s();
        getCib5();
    }, []);

    return (
        <div>CIB5s</div>
    );
};

export default Cib5;
