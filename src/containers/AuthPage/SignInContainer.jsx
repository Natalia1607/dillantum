import React, { useState } from "react";
import { Form, Input } from "antd";

import Key from "../../assets/key.jpg";
import { motion } from "framer-motion";

import { auth, app } from "../../redux/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";

import "./authPageStyles.scss";

const button = {
  width: 265,
};

const SignInContainer = () => {
  const appearance = () => {
    const el = document.querySelector("#form__opacity");
    el.classList.toggle("opacity");
  };

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
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
        } else {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        }
      });
    setIsLoading(false);
  };

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  /* const [{user}, dispatch] = useStateValue(); */
  const dispatch = useStateValue();
  const signInGoogle = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    dispatch({
      type: actionType.SET_USER,
      user: providerData[0],
    });
  };

  const content = isLoading ? "Logging in..." : "Sign in";

  return (
    <div className="auth__container container grid">
      <div className="auth__container_bg md-flex">
        <img src={Key} alt="key" />
      </div>
      <div className="auth__container_right sign__right">
        <h2 className="mb36">Sign in to Dillantum</h2>
        <button
          className="btn flex ai-c gap_6 mb24"
          style={button}
          onClick={signInGoogle}
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>
        <button
          className="btn flex ai-c gap_6 mb24"
          style={button}
          onClick={appearance}
        >
          <MdEmail color="#1976d2" size={22} />
          Continue with Email
        </button>
        <Form
          action="#"
          name="nest-messages"
          layout="vertical"
          className="auth__container_form form__opacity"
          id="form__opacity"
        >
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
          <Form.Item
            name={["user", "email"]}
            label="Email Address"
            className="auth__container_input item__input"
            required={true}
          >
            <Input
              autoFocus={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            className="auth__container_input item__input"
            required={true}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <button
            className="btn btn-primary hover-diagonal_light mb12"
            type="submit"
            onClick={signIn}
          >
            {content}
          </button>
          <div>
            <Link to="/reset" className="auth__container_link">
              Forgot Password
            </Link>
          </div>
          <div>
            Don't have an account?{" "}
            <Link to={"/register"} className="auth__container_link">
              Register
            </Link>{" "}
            now.
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInContainer;
