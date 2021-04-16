const initialState = {
  users: [],
  emails: [],
  is_logged_in: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_USER":
      return {
        ...state,
        users: action.value.users,
        emails: action.value.emails,
      };
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
