import React from "react";

const Brand = (props) => {
  return (
    <div className="col-sm-6 brand">
      <a href="#" className="logo">
        Made By
        {/* <span>.</span> */}
      </a>

      <div className="heading">
        <h2>Aakash</h2>
        <p> ( SignUp / SignIn ) via Redux</p>
      </div>

      <div className="success-msg">
        <p>Great! You are one of our members now</p>
        <a href="#" className="profile" onClick={() => props.reloadPage()}>
          Your Profile
        </a>
      </div>
    </div>
  );
};

export default Brand;
