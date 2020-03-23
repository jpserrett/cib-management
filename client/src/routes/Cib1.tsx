import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput, Select } from '../components/commonFormComponents';
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
            <Formik
              initialValues={cib1}
              enableReinitialize
              validationSchema={Yup.object({
                  producer: Yup.string()
                      .max(15, 'Must be 15 characters or less')
                      .required('Required'),
                  edition: Yup.number()
                      .max(1, 'May only be a single digit')
                      .required('Required'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                      console.warn(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                  }, 400);
              }}
            >
                <Form>
                    <TextInput
                      id="edition"
                      label="Edition"
                      name="edition"
                      type="text"
                    />
                    <TextInput
                      id="nsn"
                      label="NSN"
                      name="nsn"
                      type="text"
                    />
                    <TextInput
                      id="prodStatus"
                      label="Production Status"
                      name="prodStatus"
                      type="text"
                    />
                    <Select
                      id="producer"
                      label="Producer"
                      name="producer"
                      type="text"
                    >
                        <option>Harris</option>
                        <option>BAE</option>
                        <option>ACME</option>
                    </Select>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default Cib1;
