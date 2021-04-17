import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signOutUser } from "../redux/actions/userAction";
import { showSnackbar } from "../redux/actions/snackbarAction";
import Flower from "../images/flower.jpg";

const Profile = (props) => {
  const [focusInput, setFocusInput] = React.useState(false);

  const [email, setEmail] = React.useState(props.user.email);
  const [userName, setUserName] = React.useState(props.user.userName);
  const [password, setPassword] = React.useState(props.user.password);
  const [image, setImage] = React.useState(props.user.image);
  const [dob, setDob] = React.useState(props.user.dob);
  const [phone, setPhone] = React.useState(props.user.phone);
  const [address, setAddress] = React.useState(props.user.address);

  // Reload page
  const logoutClicked = () => {
    props.signOutUser();
  };

  useEffect(() => {
    updateLabelFocus();
  }, []);

  const updateLabelFocus = () => {
    if (email == "" && password == "" && userName == "") {
      setFocusInput(false);
    } else {
      setFocusInput(true);
    }
  };

  const changeImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const localImageUrl = window.URL.createObjectURL(file);
    setImage(localImageUrl);
    showSnackbar({
      message: "IMAGE UPDATED IN BRAND BACKGROUND",
      variant: "info",
    });
  };

  const submitForm = () => {
    // logoutClicked();

    let data = {
      userName,
      email,
      password,
      image,
      dob,
      phone,
      address,
    };
    console.log("data :", data);
  };

  return (
    <div className="container">
      <section id="formHolder">
        <div className="row">
          <div
            className="col-sm-6 d-md-none brand text-right brand-image"
            style={{ backgroundImage: "url(" + (image ? image : Flower) + ")" }}
          >
            <a
              style={{ cursor: "pointer" }}
              className="logo"
              onClick={() => logoutClicked()}
            >
              Logout
            </a>

            <div className="heading">
              <h2>Profile</h2>
              <p style={{ textTransform: "lowercase" }}> {email}</p>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-10 col-md-6 form form-1">
            <div className="signup form-peice">
              <form className="signup-form">
                <div className="form-group">
                  <label className={focusInput ? "active" : ""} htmlFor="name">
                    Full Name
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => updateLabelFocus()}
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
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
                    value={email}
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
                    onBlur={() => updateLabelFocus()}
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
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
                    onBlur={() => updateLabelFocus()}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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
                    Image
                  </label>
                  <input
                    onFocus={() => setFocusInput(true)}
                    onBlur={() => updateLabelFocus()}
                    onChange={(e) => changeImage(e)}
                    accept=".jpg, .jpeg, .png"
                    type="file"
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
          <div
            className="col-sm-6 d-none d-md-block brand text-right brand-image"
            style={{ backgroundImage: "url(" + (image ? image : Flower) + ")" }}
          >
            <a
              style={{ cursor: "pointer" }}
              className="logo"
              onClick={() => logoutClicked()}
            >
              Logout
            </a>

            <div className="heading">
              <h2>Profile</h2>
              <p style={{ textTransform: "lowercase" }}> {email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  is_logged_in: state.user.is_logged_in,
  user: state.user.currentUser,
});
const mapDispatchToProps = {
  signOutUser,
  showSnackbar,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
