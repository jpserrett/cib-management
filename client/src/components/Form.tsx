import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Field } from './commonFormComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TestForm = () => (
    <>
        <h3>CIB Search Menu</h3>

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

        <Container fluid>
            <Form>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 6}}>

                        <Field
                            label="Who produced it?"
                            placeholder="Enter producer here"
                            id="producer"
                            name="producer"
                            type="text"
                        />
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md={{ span: 6 }}>

                        <Field
                            label="When was it produced?"
                            placeholder="Currency Year"
                            id="currencyYear"
                            name="currencyYear"
                            type="date"
                        />
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col md={{ span: 6 }}>

                        <Field
                            label="Who is requesting it?"
                            placeholder="Enter name here"
                            id="name"
                            name="name"
                            type="text"
                        />
                    </Col>
                </Row>

                <Row className="justify-content-md-center" >
                    <Col md={{ span: 3 }}>

                        <button type="submit">Submit</button>

                    </Col>
                </Row>
            </Form>
        </Container>
        </Formik>
    </>
);
export default TestForm;
