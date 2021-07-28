const initialState = {
    signUp: {},
    signIn: {},
    isLoggedIn: false
}

const rootReducers = (state = initialState, action) => {
    switch (action.type) {
      case "ON_SIGNUP":
        return {
          ...state,
          signUp: action.payload,
          isLoggedIn: true,
        };
      case "ON_SIGNIN":
        return {
          ...state,
          signIn: action.payload,
          isLoggedIn: true,
        };
      case "ON_LOGOUT":
        return {
          ...state,
          signIn: {},
          isLoggedIn: false
        };
      default:
        return state;
    }
}

export default rootReducers;