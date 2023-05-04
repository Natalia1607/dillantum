import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";

import Key from "../../assets/key.jpg";

import { auth, app } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

import { onAuthStateChanged } from "firebase/auth";
import { Button, Result } from "antd";

import "./AuthPage.scss";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    /* e.preventDefault(); */
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
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

  return (
    <div className="container form__container grid">
      <div className="form__bg md-flex">
        <img src={Key} alt="key" />
      </div>
      {!authUser ? (
        <div className="form__right sign__right">
          <h2 className="mb36">Sign in</h2> {/* Login In to your Account */}
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
            className="form form__opacity"
            id="form__opacity"
            /* onFinish={signIn} */
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
              className="btn btn-primary hover-diagonal_light"
              type="submit"
              onClick={signIn}
            >
              Sign in
            </button>
          </Form>
        </div>
      ) : (
        <Result
          status="success"
          title="Successful Registration"
          subTitle=""
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
          ]}
        />
      )}
    </div>
  );
};

export default SignInContainer;
