import store from "../store";

export const createNewUser = (value) => (dispatch) => {
  console.log("value:", value);
  dispatch({
    type: "NEW_USER",
    value: value,
  });
};

export const signInUser = (value) => (dispatch) => {
  let users = store.getState().user.users;
  let emails = store.getState().user.emails;
  console.log("data ", emails);
  let email = value.email;
  let password = value.password;

  if (email in emails) {
    let user = users[email];
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
