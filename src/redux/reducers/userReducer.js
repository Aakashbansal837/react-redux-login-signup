const initialState = {
  users: [],
  emails: [],
  is_logged_in: false,
  view_profile: false,
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
    case "VIEW_PROFILE":
      return {
        ...state,
        view_profile: true,
      };
    case "CLOSE_PROFILE":
      return {
        ...state,
        view_profile: false,
      };
    default:
      return state;
  }
};

export default userReducer;
