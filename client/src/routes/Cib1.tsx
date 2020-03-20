import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cib1 = () => {
    const [cib1s, setCib1s] = useState();
    const [cib1, setCib1] = useState();

    useEffect(() => {
        const getCib1s = async () => {
            try {
                const response = await axios.get('/cib1');
                setCib1s(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        const getCib1 = async () => {
            try {
                const response = await axios.get('/cib1/1');
                setCib1(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib1s();
        getCib1();
    }, []);

    return (
        <div>CIB1s</div>
    );
};

export default Cib1;
