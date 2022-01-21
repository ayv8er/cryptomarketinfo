import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import schema from "../validation/formSchema";
// import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";

const Register = (props) => {
  const { togglePassword, showPassword } = props;
  return (
    <StyledLogin>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <Formik
              initialValues={{ email: "", password: "", confirmPassword: "" }}
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
                    <Form.Label>Email address</Form.Label>
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

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        className={
                          touched.password && errors.password ? "error" : null
                        }
                      />
                      <InputGroup.Text onClick={togglePassword}>
                        Show Password
                      </InputGroup.Text>
                    </InputGroup>
                    {touched.password && errors.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        className={
                          touched.confirmPassword && errors.confirmPassword
                            ? "error"
                            : null
                        }
                      />
                      <InputGroup.Text onClick={togglePassword}>
                        Show Password
                      </InputGroup.Text>
                    </InputGroup>
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <div className="error-message">
                        {errors.confirmPassword}
                      </div>
                    ) : null}
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      className="continue-btn"
                      variant="secondary"
                      size="lg"
                      type="submit"
                      disabled={
                        isSubmitting ||
                        errors.email ||
                        errors.password ||
                        errors.confirmPassword
                      }
                    >
                      Create Account
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
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
      align-items:center;
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
      padding: 0.5rem 1rem;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.5;
      background-clip: padding-box;
      appearance: none;
      border-radius: 0.25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .btn {
        font-size: 1.4rem;
        font-weight: bold;
        padding: 2% 5% 2% 5%;
    }
    .continue-btn {
      margin-top: 5%;
    }
    .register {
      font-size: 1.6rem;
      text-align:right;
    }
  }
  `;

export default Register;
