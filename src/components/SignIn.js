import React from "react";

const SignIn = (props) => {
  // label focus
  const [focusInput, setFocusInput] = React.useState(false);

  // error states
  const [usernameError, setUserNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [passConfirm, setPassConfirm] = React.useState(false);

  const validateInput = () => {
    document.querySelector("input").blur(function () {
      // User Name
      if (document.querySelector(this).classList.contains("name")) {
        if (document.querySelector(this).value.length === 0) {
          document
            .querySelector(this)
            .siblings("span.error")
            .text("Please type your full name")
            .fadeIn()
            .parent(".form-group")
            .classList.add("hasError");
          usernameError = true;
        } else if (
          document.querySelector(this).value.length > 1 &&
          document.querySelector(this).value.length <= 6
        ) {
          document
            .querySelector(this)
            .siblings("span.error")
            .text("Please type at least 6 characters")
            .fadeIn()
            .parent(".form-group")
            .classList.add("hasError");
          usernameError = true;
        } else {
          document
            .querySelector(this)
            .siblings(".error")
            .text("")
            .fadeOut()
            .parent(".form-group")
            .removeClass("hasError");
          usernameError = false;
        }
      }
      // Email
      if (document.querySelector(this).classList.contains("email")) {
        if (document.querySelector(this).value.length == "") {
          document
            .querySelector(this)
            .siblings("span.error")
            .text("Please type your email address")
            .fadeIn()
            .parent(".form-group")
            .classList.add("hasError");
          emailError = true;
        } else {
          document
            .querySelector(this)
            .siblings(".error")
            .text("")
            .fadeOut()
            .parent(".form-group")
            .removeClass("hasError");
          emailError = false;
        }
      }

      // PassWord
      if (document.querySelector(this).classList.contains("pass")) {
        if (document.querySelector(this).value.length < 8) {
          document
            .querySelector(this)
            .siblings("span.error")
            .text("Please type at least 8 charcters")
            .fadeIn()
            .parent(".form-group")
            .classList.add("hasError");
          passwordError = true;
        } else {
          document
            .querySelector(this)
            .siblings(".error")
            .text("")
            .fadeOut()
            .parent(".form-group")
            .removeClass("hasError");
          passwordError = false;
        }
      }

      // PassWord confirmation
      if (
        document.querySelector(".pass").value !==
        document.querySelector(".passConfirm").value
      ) {
        document
          .querySelector(".passConfirm")
          .siblings(".error")
          .text("Passwords don't match")
          .fadeIn()
          .parent(".form-group")
          .classList.add("hasError");
        passConfirm = false;
      } else {
        document
          .querySelector(".passConfirm")
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        passConfirm = false;
      }

      // label effect
      if (document.querySelector(this).value.length > 0) {
        document.querySelector(this).siblings("label").classList.add("active");
      } else {
        document.querySelector(this).siblings("label").removeClass("active");
      }
    });
    if (true) {
      setFocusInput(false);
    } else {
      setFocusInput(false);
    }
  };

  const submitForm = () => {
    props.activateProfile();
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

export default SignIn;
