import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cib5 = () => {
    const [cib5, setCib5] = useState();

    useEffect(() => {
        const getCib5 = async () => {
            try {
                const response = await axios.get('/cib5/1');
                setCib5(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getCib5();
    }, []);

    return (
        <div>CIB5s</div>
    );
};

export default Cib5;
