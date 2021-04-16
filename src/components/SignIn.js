import React from "react";

const SignIn = () => {
  // true if signIn , false if signup
  const [loginView, setLoginView] = React.useState(true);
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

  // Form validation
  const ValidateForm = () => {
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
  };

  // Form submit
  const submitForm = () => {
    document.querySelector("form.signup-form").submit(function (event) {
      event.preventDefault();

      if (
        usernameError == true ||
        emailError == true ||
        passwordError == true ||
        passConfirm == true
      ) {
        document.querySelector(".name, .email, .pass, .passConfirm").blur();
      } else {
        document.querySelector(".signup, .login").classList.add("switched");

        setTimeout(function () {
          document.querySelector(".signup, .login").hide();
        }, 700);
        setTimeout(function () {
          document.querySelector(".brand").classList.add("active");
        }, 300);
        setTimeout(function () {
          document.querySelector(".heading").classList.add("active");
        }, 600);
        setTimeout(function () {
          document.querySelector(".success-msg p").classList.add("active");
        }, 900);
        setTimeout(function () {
          document.querySelector(".success-msg a").classList.add("active");
        }, 1050);
        setTimeout(function () {
          document.querySelector(".form").hide();
        }, 700);
      }
    });
  };

  // Reload page
  const reloadPage = () => {
    document.querySelector("a.profile").addEventListener("click", function () {
      window.location.reload(true);
    });
  };

  const onInputBlur = () => {
    if (true) {
    } else {
      setFocusInput(false);
    }
  };

  return (
    <div className="container">
      <section id="formHolder">
        <div className="row">
          {/* <!-- Brand Box --> */}
          <div className="col-sm-6 brand">
            <a href="#" className="logo">
              Brand Name
              {/* <span>.</span> */}
            </a>

            <div className="heading">
              <h2>Aakash</h2>
              <p>Your Right Choice</p>
            </div>

            <div className="success-msg">
              <p>Great! You are one of our members now</p>
              <a href="#" className="profile">
                Your Profile
              </a>
            </div>
          </div>

          {/* <!-- Form Box --> */}
          <div className="col-sm-6 form">
            {/* <!-- Login Form --> */}
            <div
              className={"login form-peice" + (loginView ? " " : " switched")}
            >
              <form className="login-form">
                <div className="form-group">
                  <label
                    className={focusInput ? "active" : ""}
                    for="loginemail"
                  >
                    Email Adderss
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => onInputBlur()}
                    type="email"
                    name="loginemail"
                    id="loginemail"
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    className={focusInput ? "active" : ""}
                    for="loginPassword"
                  >
                    Password
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => onInputBlur()}
                    type="password"
                    name="loginPassword"
                    id="loginPassword"
                    required
                  />
                </div>

                <div className="CTA">
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => onInputBlur()}
                    type="submit"
                    value="Login"
                  />
                  <a onClick={() => setLoginView(false)} className="switch">
                    I'm New
                  </a>
                </div>
              </form>
            </div>
            {/* <!-- End Login Form --> */}

            {/* <!-- Signup Form --> */}
            <div
              className={"signup form-peice" + (!loginView ? " " : " switched")}
            >
              <form className="signup-form">
                <div className="form-group">
                  <label className={focusInput ? "active" : ""} for="name">
                    Full Name
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => onInputBlur()}
                    type="text"
                    name="username"
                    id="name"
                    className="name"
                  />
                  <span className="error"></span>
                </div>

                <div className="form-group">
                  <label className={focusInput ? "active" : ""} for="email">
                    Email Adderss
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => onInputBlur()}
                    type="email"
                    name="emailAdress"
                    id="email"
                    className="email"
                  />
                  <span className="error"></span>
                </div>

                <div className="form-group">
                  <label className={focusInput ? "active" : ""} for="phone">
                    Phone Number - <small>Optional</small>
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => onInputBlur()}
                    type="text"
                    name="phone"
                    id="phone"
                  />
                </div>

                <div className="form-group">
                  <label className={focusInput ? "active" : ""} for="password">
                    Password
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => onInputBlur()}
                    type="password"
                    name="password"
                    id="password"
                    className="pass"
                  />
                  <span className="error"></span>
                </div>

                <div className="form-group">
                  <label
                    className={focusInput ? "active" : ""}
                    for="passwordCon"
                  >
                    Confirm Password
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => onInputBlur()}
                    type="password"
                    name="passwordCon"
                    id="passwordCon"
                    className="passConfirm"
                  />
                  <span className="error"></span>
                </div>

                <div className="CTA">
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => onInputBlur()}
                    type="submit"
                    value="Signup Now"
                    id="submit"
                  />
                  <a onClick={() => setLoginView(true)} className="switch">
                    I have an account
                  </a>
                </div>
              </form>
            </div>
            {/* <!-- End Signup Form --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
