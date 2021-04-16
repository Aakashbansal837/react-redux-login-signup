import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signInUser } from "../redux/actions/userAction";

const SignIn = (props) => {
  // user data
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // label focus
  const [focusInput, setFocusInput] = React.useState(false);

  // error states
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const validateInput = () => {
    if (true) {
      setFocusInput(false);
    } else {
      setFocusInput(false);
    }
  };

  useEffect(() => {
    if (props.is_logged_in) {
      // props.activateProfile();
    }
  }, [props.is_logged_in]);
  const submitForm = () => {
    let data = {
      email,
      password,
    };
    props.signInUser(data);
  };
  const setLoginView = (value) => {
    props.setLoginView(value);
  };
  return (
    <div className={"login form-peice" + (props.loginView ? " " : " switched")}>
      <form className="login-form">
        <div className="form-group">
          <label className={focusInput ? "active" : ""} htmlFor="loginemail">
            Email Adderss
          </label>
          <input
            onFocus={() => setFocusInput(true)}
            onBlur={() => validateInput()}
            type="email"
            name="loginemail"
            id="loginemail"
            required
          />
        </div>

        <div className="form-group">
          <label className={focusInput ? "active" : ""} htmlFor="loginPassword">
            Password
          </label>
          <input
            onFocus={() => setFocusInput(true)}
            onBlur={() => validateInput()}
            type="password"
            name="loginPassword"
            id="loginPassword"
            required
          />
        </div>

        <div className="CTA">
          <input onClick={() => submitForm()} type="button" value="Login" />
          <a onClick={() => setLoginView(false)} className="switch">
            I'm New
          </a>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  is_logged_in: state.user.is_logged_in,
});
const mapDispatchToProps = {
  signInUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
