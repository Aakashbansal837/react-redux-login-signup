const initialState = {
  users: [],
  emails: [],
  is_logged_in: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_USER":
      let tmp_user = state.users;
      tmp_user.push(action.value);
      return { ...state, users: tmp_user };
    case "LOGOUT_USER":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
