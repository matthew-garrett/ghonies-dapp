import React, { useState, useEffect } from "react";
import isEmail from "validator/lib/isEmail";
import "./CustomForm.css";
import arrow from "../../images/arrow-right.svg";
import { InputWrapper } from "./CustomForm.styled";
const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email && isEmail(email);
    onValidated({
      EMAIL: email,
    });
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (status === "success") setEmail("");
  }, [status]);

  const formatError = (message) => {
    if (message.includes("<a")) {
      const index = message.indexOf("<");
      return message.slice(0, index);
    } else {
      return message;
    }
  };

  return (
    <InputWrapper>
      {status === "sending" && <h3>sending...</h3>}
      {status === "error" && <h3>{formatError(message)}</h3>}
      {status === "success" && <h3>{message}</h3>}
      {status !== "success" ? (
        <>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => handleChange(e)}
            value={email}
            required
            className="email-input"
          ></input>
          <div className="email-submit" onClick={handleSubmit}>
            <img src={arrow} alt="arrow"></img>
          </div>
        </>
      ) : null}
    </InputWrapper>
  );
};

export default CustomForm;
