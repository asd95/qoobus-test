const ON_SIGNUP = "ON_SIGNUP";
const ON_SIGNIN = "ON_SIGNIN";
const ON_LOGOUT = "ON_LOGOUT";

export const onSignUp = (signUpData) => (dispatch) => {
    dispatch(signUpCreators(signUpData));
};

export const onSignIn = (signInData) => (dispatch) => {
  dispatch(signInCreators(signInData));
};

export const onLogout = () => (dispatch) => {
  dispatch(logoutCreators());
};

const signUpCreators = (data) => ({
  type: ON_SIGNUP,
  payload: data
});

const signInCreators = (data) => ({
  type: ON_SIGNIN,
  payload: data,
});
const logoutCreators = () => ({
  type: ON_LOGOUT,
});

