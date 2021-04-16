import store from "../store";

export const createNewUser = (value) => (dispatch) => {
  let emails = store.getState().user.emails ? store.getState().user.emails : [];
  let users = store.getState().user.users;
  let email = value.email;

  console.log({ emails });
  if (emails.indexOf(email) !== -1) {
    dispatch({
      type: "SHOW_SNACKBAR",
      message: "USER ALREADY EXISTS",
      variant: "warning",
    });
  } else {
    users[email] = value;
    emails.push(email);
    let data = {
      emails: emails,
      users: users,
    };
    dispatch({
      type: "SHOW_SNACKBAR",
      message: "NEW USER CREATION SUCCESSFUL",
      variant: "success",
    });
    dispatch({
      type: "NEW_USER",
      value: data,
    });
    dispatch({
      type: "LOGIN_USER",
    });
  }
};

export const signInUser = (value) => (dispatch) => {
  let users = store.getState().user.users ? store.getState().user.users : {};
  let emails = store.getState().user.emails ? store.getState().user.emails : [];
  let email = value.email;
  let password = value.password;

  console.log({ emails });

  if (emails.indexOf(email) !== -1) {
    let user = users[email];
    console.log("user :", user);
    if (user.password === password) {
      dispatch({
        type: "SHOW_SNACKBAR",
        message: "LOGIN SUCCESSFULL",
        variant: "success",
      });
      dispatch({ type: "LOGIN_USER" });
    } else {
      dispatch({
        type: "SHOW_SNACKBAR",
        message: "PASSWORD INCORRECT",
        variant: "error",
      });
    }
  } else {
    dispatch({
      type: "SHOW_SNACKBAR",
      message: "USER NOT FOUND",
      variant: "error",
    });
  }
};

export const signOutUser = (value) => (dispatch) => {
  dispatch({
    type: "SHOW_SNACKBAR",
    message: "USER LOGGED OUT",
    variant: "info",
  });
  dispatch({ type: "LOGOUT_USER" });
};

export const viewProfile = (value) => (dispatch) => {
  dispatch({
    type: "SHOW_SNACKBAR",
    message: "SHOWING USER PROFILE",
    variant: "info",
  });
  dispatch({ type: "VIEW_PROFILE" });
};

export const closeProfile = (value) => (dispatch) => {
  dispatch({ type: "CLOSE_PROFILE" });
};
