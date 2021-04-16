import React from "react";
import Brand from "./Brand";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LandingPage = () => {
  // true if signIn , false if signup
  const [loginView, setLoginView] = React.useState(true);
  // label focus
  const [focusInput, setFocusInput] = React.useState(false);

  // error states
  const [usernameError, setUserNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [passConfirm, setPassConfirm] = React.useState(false);

  // Label effect
  const labelEffect = () => {
    document.querySelector("input").focus(function () {
      document.querySelector(this).siblings("label").classList.add("active");
    });
  };

  // Form submit
  const submitForm = () => {
    if (
      usernameError === true ||
      emailError === true ||
      passwordError === true ||
      passConfirm === true
    ) {
      document.querySelector(".name, .email, .pass, .passConfirm").blur();
    } else {
      window.document
        .querySelector(".signup, .login")
        .classList.add("switched");

      setTimeout(function () {
        window.document.querySelector(".signup, .login , .form").style.display =
          "none";
      }, 700);
      setTimeout(function () {
        window.document.querySelector(".brand").classList.add("active");
      }, 300);
      setTimeout(function () {
        window.document.querySelector(".heading").classList.add("active");
      }, 600);
      setTimeout(function () {
        window.document.querySelector(".success-msg p").classList.add("active");
      }, 900);
      setTimeout(function () {
        window.document.querySelector(".success-msg a").classList.add("active");
      }, 1050);
    }
  };

  // Reload page
  const reloadPage = () => {
    window.location.reload();
  };

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

  return (
    <div className="container">
      <section id="formHolder">
        <div className="row">
          <Brand reloadPage={reloadPage} />
          <div className="col-sm-10 col-md-6 form">
            <SignIn
              loginView={loginView}
              submitForm={submitForm}
              setLoginView={setLoginView}
            />
            <SignUp
              loginView={loginView}
              submitForm={submitForm}
              setLoginView={setLoginView}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
