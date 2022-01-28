import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import { loginSchema } from "../validation/formSchema";
import { login } from "../actions/usersAction";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import styled from "styled-components";

const Login = (props) => {
  const { token, isLoggingIn, login, togglePassword, showPassword, darkMode } =
    props;
  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/favorites", { replace: true });
    }
  }, [token, navigate]);
  return (
    <StyledLogin>
      <Container fluid>
        <Row xxl xl lg md sm xs className="justify-content-center">
          <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={10}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                login({
                  user_email: values.email.toLowerCase(),
                  user_password: values.password,
                });
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
                        Show
                      </InputGroup.Text>
                    </InputGroup>
                    {touched.password && errors.password ? (
                      <div className="error-message">{errors.password}</div>
                    ) : null}
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      className="continue-btn"
                      variant={darkMode ? "secondary" : "outline-secondary"}
                      size="lg"
                      type="submit"
                      disabled={
                        isSubmitting ||
                        errors.email ||
                        errors.password ||
                        isLoggingIn
                      }
                    >
                      Continue
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        {isLoggingIn ? (
          <Row className="justify-content-center">
            <Col xxl={1} xl={1} lg={1} md={1} sm={1} xs={1}>
              <Spinner size="lg" animation="grow" variant="primary" />
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-center">
            <Col xxl xl lg md sm xs>
              <div className="register">Don't have an account yet?</div>
            </Col>
            <Col className="testing" xxl xl lg md sm xs>
              <Button
                variant={darkMode ? "secondary" : "outline-secondary"}
                as={NavLink}
                to="/register"
              >
                Register
              </Button>
            </Col>
          </Row>
        )}
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
  .testing {
    display:flex;
    justify-content: flex-start;
  }
}
`;

const mapStateToProps = (state) => {
  return {
    isLoggingIn: state.users.isLoggingIn,
    token: state.users.token,
  };
};

export default connect(mapStateToProps, { login })(Login);
