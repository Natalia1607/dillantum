import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Checkbox } from "antd";

import "./AuthPage.scss";

import Table from "../../assets/reg.jpg";

import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { onAuthStateChanged } from "firebase/auth";
import { Result } from "antd";

const RegisterContainer = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="form__container container grid">
      <div className="form__bg md-flex">
        <img src={Table} alt="" />
      </div>
      {!authUser ? (
        <div className="form__right register__right">
          <p>
            Already a member?{" "}
            <Link to={"/sign-in"} className="register__link">
              Sign In
            </Link>
          </p>
          <h2 className="mb36">Create an account</h2> {/* Register */}
          <div className="form__data register__data flex jc-sb gap">
            <Form
              action="#"
              name="nest-messages"
              layout="vertical"
              className="form"
            >
              <Form.Item
                name={["user", "name"]}
                label="Name"
                className="item__input"
                autoFocus={true}
                rules={[
                  {
                    required: true,
                    message: "Name is required!",
                  },
                ]}
              >
                <Input autoFocus={true} />
              </Form.Item>
              <Form.Item
                /* name={['user', 'email']} */
                label="E-mail"
                className="item__input"
                type="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                className="item__input"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <Form.Item name="policy" valuePropName="checked">
                <Checkbox>
                  Creating an account means you agree to our{" "}
                  <a href="#" className="register__link">
                    {" "}
                    Terms of Service
                  </a>
                  ,{" "}
                  <a href="#" className="register__link">
                    {" "}
                    Privacy Policy
                  </a>
                  , and our default{" "}
                  <a href="#" className="register__link">
                    {" "}
                    Notification Settings
                  </a>
                  .
                </Checkbox>
              </Form.Item>
              <button
                className="btn btn-primary hover-diagonal_light"
                type="submit"
                onClick={signUp}
              >
                Create Account
              </button>
            </Form>
          </div>
        </div>
      ) : (
        <Result
          className="result flex jc-c"
          status="success"
          title="Successful Registration"
          subTitle=""
          extra={[
            <div className="flex gap jc-c">
              <Link to={"/personal_account"} className="btn">
                Account
              </Link>
              <Link to={"/createItem"} className="btn">
                Sell
              </Link>
            </div>
          ]}
        />
      )}
    </div>
  );
};

export default RegisterContainer;
