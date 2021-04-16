import React from "react";

const Profile = () => {
  const [focusInput, setFocusInput] = React.useState(false);

  // Reload page
  const logoutClicked = () => {
    window.location.href = "/";
  };

  const validateInput = () => {
    if (true) {
      setFocusInput(false);
    } else {
      setFocusInput(false);
    }
  };

  const submitForm = () => {
    logoutClicked();
    // props.activateProfile();
  };
  const setLoginView = (value) => {
    // props.setLoginView(value);
  };

  return (
    <div className="container">
      <section id="formHolder">
        <div className="row">
          <div className="col-sm-10 col-md-6 form form-1">
            <div className="signup form-peice">
              <form className="signup-form">
                <div className="form-group">
                  <label className={focusInput ? "active" : ""} htmlFor="name">
                    Full Name
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => validateInput()}
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
                    onBlur={() => validateInput()}
                    type="email"
                    name="emailAdress"
                    id="email"
                    className="email"
                  />
                  <span className="error"></span>
                </div>

                <div className="form-group">
                  <label className={focusInput ? "active" : ""} htmlFor="phone">
                    Phone Number - <small>Optional</small>
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => validateInput()}
                    type="text"
                    name="phone"
                    id="phone"
                  />
                </div>

                <div className="form-group">
                  <label
                    className={focusInput ? "active" : ""}
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => validateInput()}
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
                    htmlFor="passwordCon"
                  >
                    Confirm Password
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => validateInput()}
                    type="password"
                    name="passwordCon"
                    id="passwordCon"
                    className="passConfirm"
                  />
                  <span className="error"></span>
                </div>

                <div className="CTA">
                  <input
                    onClick={() => submitForm()}
                    type="button"
                    value="Update"
                    id="submit"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-6 brand text-right">
            <a
              style={{ cursor: "pointer" }}
              className="logo"
              onClick={() => logoutClicked()}
            >
              Logout
            </a>

            <div className="heading">
              <h2>Profile</h2>
              <p> update your details here.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
