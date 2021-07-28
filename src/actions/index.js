const ON_SIGNUP = "ON_SIGNUP";
export const onSignUp = (signUpData) => (dispatch) => {
    dispatch(signUpCreators(signUpData));
};

const signUpCreators = (data) => ({
  type: ON_SIGNUP,
  payload: data
});

const ON_SIGNIN = "ON_SIGNIN";
export const onSignIn = (signInData) => (dispatch) => {
  dispatch(signInCreators(signInData));
};

const signInCreators = (data) => ({
  type: ON_SIGNIN,
  payload: data,
});