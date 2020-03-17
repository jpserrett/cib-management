import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from './commonFormComponents';

// TODO: do not use this form as is, this is purely for example purposes
const TestForm = () => (
    <>
        <h3>CIB Search Menu</h3>
        <br></br>
        <Formik
          initialValues={{
              producer: '',
              currencyYear: '',
              name: '',
          }}
          validationSchema={Yup.object({
              producer: Yup.string()
                  .max(25, 'Must be 25 characters or less')
                  .required('Required'),
              currencyYear: Yup.date()
                  .required('Required'),
              name: Yup.string()
                  .max(25, 'Must be 25 characters or less')
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
                  id="producer"
                  label="Producer"
                  name="producer"
                  type="text"
                />

                <TextInput
                  id="currencyYear"
                  label="Currency Year"
                  name="currencyYear"
                  type="date"
                />

                <TextInput
                  id="name"
                  label="Name"
                  name="name"
                  type="text"
                />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </>
);
export default TestForm;
