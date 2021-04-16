import React, { useState } from "react";
import { connect } from "react-redux";
import { createNewUser } from "../redux/actions/userAction";

const SignUp = (props) => {
  // user State
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // label focus
  const [focusInput, setFocusInput] = React.useState(false);

  // error states
  const [usernameError, setUserNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const updateLabelFocus = () => {
    if (email == "" && password == "") {
      setFocusInput(false);
    } else {
      setFocusInput(true);
    }
  };

  const submitForm = () => {
    let data = {
      userName,
      email,
      password,
    };
    console.log("data :", data);
    props.createNewUser(data);
    // props.activateProfile();
  };
  const setLoginView = (value) => {
    props.setLoginView(value);
  };

  return (
    <div
      className={"signup form-peice" + (!props.loginView ? " " : " switched")}
    >
      <form className="signup-form">
        <div className="form-group">
          <label className={focusInput ? "active" : ""} htmlFor="name">
            Full Name
          </label>
          <input
            onFocus={() => setFocusInput(true)}
            onBlur={() => updateLabelFocus()}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="username"
            id="name"
            className="name"
          />
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label className={focusInput ? "active" : ""} htmlFor="email">
            Email Adderss
          </label>
          <input
            onFocus={() => setFocusInput(true)}
            onBlur={() => updateLabelFocus()}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="emailAdress"
            id="email"
            className="email"
          />
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label className={focusInput ? "active" : ""} htmlFor="password">
            Password
          </label>
          <input
            onFocus={() => setFocusInput(true)}
            onBlur={() => updateLabelFocus()}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            className="pass"
          />
          <span className="error"></span>
        </div>

        <div className="form-group">
          <label className={focusInput ? "active" : ""} htmlFor="passwordCon">
            Confirm Password
          </label>
          <input
            onFocus={() => setFocusInput(true)}
            onBlur={() => updateLabelFocus()}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="passwordCon"
            id="passwordCon"
            className="passConfirm"
          />
          <span className="error">
            {password !== confirmPassword ? "Passwords don't match" : null}
          </span>
        </div>

        <div className="CTA">
          <input
            onFocus={() => setFocusInput(true)}
            onClick={() => submitForm()}
            type="button"
            value="Signup Now"
            id="submit"
          />
          <a onClick={() => setLoginView(true)} className="switch">
            I have an account
          </a>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userName: state.user.userName,
});
const mapDispatchToProps = {
  createNewUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
