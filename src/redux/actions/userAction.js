export const createNewUser = (value) => (dispatch) => {
  console.log("value:", value);
  dispatch({
    type: "NEW_USER",
    value: value,
  });
};
