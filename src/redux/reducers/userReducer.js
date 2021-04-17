const initialState = {
  users: {
    "abc@abc.com": {
      userName: "aakash",
      email: "abc@abc.com",
      password: "abc",
    },
  },
  currentUser: {
    userName: "aakash",
    email: "abc@abc.com",
    password: "abc",
    image: "",
  },
  emails: ["abc@abc.com"],
  is_logged_in: false,
  view_profile: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_USER":
      return {
        ...state,
        users: action.payload.users,
        emails: action.payload.emails,
      };
    case "LOGIN_USER":
      return {
        ...state,
        is_logged_in: true,
        currentUser: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        is_logged_in: false,
        view_profile: false,
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
