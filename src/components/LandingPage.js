import React from "react";
import Brand from "./Brand";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LandingPage = () => {
  // true if signIn , false if signup
  const [loginView, setLoginView] = React.useState(true);

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
  const activateProfile = () => {
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

  return (
    <div className="container">
      <section id="formHolder">
        <div className="row">
          <Brand reloadPage={reloadPage} />
          <div className="col-sm-10 col-md-6 form">
            <SignIn
              loginView={loginView}
              activateProfile={activateProfile}
              setLoginView={setLoginView}
            />
            <SignUp
              loginView={loginView}
              activateProfile={activateProfile}
              setLoginView={setLoginView}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
