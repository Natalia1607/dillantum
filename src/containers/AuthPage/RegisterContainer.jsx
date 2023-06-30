import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Form, Input, Checkbox } from "antd";
import { auth } from "../../redux/services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Table from "../../assets/reg.jpg";
import { motion } from "framer-motion";
import "./authPageStyles.scss";

const RegisterContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("user", user.email);
        localStorage.setItem("uid", user.uid);
        localStorage.setItem("token", user.accessToken);
        console.log(user);
        navigate("/personal_account");
      })
      .catch((error) => {
        if (email == "" && password == "") {
          const errorMessage = "Please input your E-mail and Password!";
          setErrorMessage(errorMessage);
        } else if (email == "") {
          const errorMessage = "Please input your E-mail!";
          setErrorMessage(errorMessage);
        } else if (password == "") {
          const errorMessage = "Please input your Password!";
          setErrorMessage(errorMessage);
        } else if (password && password.length < 6) {
          const errorMessage = "Password should be at least 6 characters!";
          setErrorMessage(errorMessage);
        } else {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        }
        /* console.log(errorMessage); */
      });

    setIsLoading(false);
  };

  const content = isLoading ? "Sending Request..." : "Create Account";

  return (
    <div className="auth__container container grid">
      <div className="auth__container_bg md-flex">
        <img src={Table} alt="" />
      </div>
      <div className="auth__container_right register__right">
        <p>
          Already have an account?{" "}
          <Link to={"/sign-in"} className="auth__container_link">
            Sign In{" "}
          </Link>
          now.
        </p>
        <h2 className="mb36">Create an account</h2> {/* Register */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="error-wrap"
          >
            <p className="error-message">{errorMessage}</p>
          </motion.div>
        )}
        <div className="flex jc-sb gap">
          <Form
            action="#"
            name="nest-messages"
            layout="vertical"
            className="auth__container_form"
          >
            <Form.Item
              label="Email Address"
              className="auth__container_input"
              type="email"
              required={true}
            >
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              className="auth__container_input"
              required={true}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item name="policy" valuePropName="checked">
              <Checkbox>
                Creating an account means you agree to our{" "}
                <a href="#" className="auth__container_link">
                  {" "}
                  Terms of Service
                </a>
                ,{" "}
                <a href="#" className="auth__container_link">
                  {" "}
                  Privacy Policy
                </a>
                , and our default{" "}
                <a href="#" className="auth__container_link">
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
              {content}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
