const initialState = {
  users: [],
  emails: [],
  is_logged_in: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_USER":
      let email = action.value.email;
      let tmp_user = state.users;
      let tmp_emails = state.emails;
      if (email in tmp_emails) {
        return { ...state };
      } else {
        tmp_user[email] = action.value;
        tmp_emails.push(email);
      }

      console.log("new data :", state);

      return { ...state, users: tmp_user, emails: tmp_emails };
    case "LOGIN_USER":
      return {
        ...state,
        is_logged_in: true,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        is_logged_in: false,
      };
    default:
      return state;
  }
};

export default userReducer;
