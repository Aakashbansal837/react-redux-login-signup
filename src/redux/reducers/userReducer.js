const initialState = {
  users: [],
  emails: [],
  is_logged_in: false,
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state };
    case "LOGOUT_USER":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default signIn;
