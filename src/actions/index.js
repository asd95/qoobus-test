const ON_SIGNUP = "ON_SIGNUP";
export const onSignUp = (signUpData) => (dispatch) => {
    dispatch(signUpCreators(signUpData));
};

const signUpCreators = (data) => ({
  type: ON_SIGNUP,
  payload: data
});
