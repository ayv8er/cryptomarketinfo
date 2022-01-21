import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Stack, Form, Button } from "react-bootstrap";
import schema from "../validation/formSchema";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";

const Login = () => {
  //   const postNewUser = newUser => {
  //       axios post call to db
  //   }

  return (
    <StyledLogin>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={schema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                resetForm();
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address :</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Enter email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={touched.email && errors.email ? "error" : null}
                    />
                    {touched.email && errors.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password :</Form.Label>
                    <Form.Control
                      type="text"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        touched.password && errors.password ? "error" : null
                      }
                    />
                    {touched.password && errors.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : null}
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      variant="secondary"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Continue
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col sm={3}>
            <div className="big-light">Don't have an account yet?</div>
          </Col>
          <Col sm={3}>
            <Button variant="secondary" size="lg" as={NavLink} to="/register">
              Register
            </Button>
          </Col>
        </Row>
      </Container>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  .error {
    border: 2px solid red;
  }
  .error-message {
      color: red;
      padding: 0.5rem, 0.25rem;
      height: 1em;
      position: absolute;
      font-size: 1em;
  }
  .justify-content-md-center {
    margin-top: 5%;
  }
  .col-sm-6 {
    padding: 3%;
    font-size: 1.6rem;
    text-align: left;
  }
  .form-label {
      margin-top: 5%;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    margin:2% 0 2% 0;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    appearance: none;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .btn {
      margin-top:5%;
      font-size: 1.4rem;
      font-weight: 400;
      padding: 2% 0 2% 0;
  }
}
`;

export default Login;
