import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";

import Key from "../../assets/key.jpg";

import { auth, app } from "../../redux/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

import { onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import "./authPageStyles.scss";

const button = {
  width: 265,
};

const SignInContainer = () => {
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

  const appearance = () => {
    const el = document.querySelector("#form__opacity");
    el.classList.toggle("opacity");
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/personal_account");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  window.localStorage.setItem("name", `${email}`);
  const name = window.localStorage.getItem("name");

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

  return (
    <div className="auth__container container grid">
      <div className="auth__container_bg md-flex">
        <img src={Key} alt="key" />
      </div>
      <div className="auth__container_right sign__right">
        <h2 className="mb36">Sign in</h2>
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
          <Form.Item
            name={["user", "email"]}
            label="E-mail"
            className="item__input"
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
              autoFocus={true}
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
          <button
            className="btn btn-primary hover-diagonal_light mb12"
            type="submit"
            onClick={signIn}
          >
            Sign in
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
