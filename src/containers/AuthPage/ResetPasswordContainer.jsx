import React, { useState, useEffect } from "react";
import { Form, Input } from "antd";

import Key from "../../assets/key.jpg";
import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth } from "firebase/auth";

import "./authPageStyles.scss";

const button = {
  width: 265,
};

const ResetPasswordContainer = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent")
  }

  return (
    <div className="auth__container container grid">
      <div className="auth__container_bg md-flex">
        <img src={Key} alt="key" />
      </div>
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
          label="New password"
          name="password"
          className="item__input"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password/>
        </Form.Item>
        <button
          className="btn btn-primary hover-diagonal_light mb12"
          type="submit"
          onClick={triggerResetEmail}
        >
          Change password
        </button>
      </Form>
    </div>
  );
};

export default ResetPasswordContainer;
