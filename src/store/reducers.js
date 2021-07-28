const initialState = {
    signUp: {},
    signIn: {},
}

const rootReducers = (state = initialState, action) => {
    switch (action.type) {
      case "ON_SIGNUP":
        return {
          ...state,
          signUp: action.payload,
        };
      case "ON_SIGNIN":
        return {
          ...state,
          signIn: action.payload,
        };
      default:
        return state;
    }
}

export default rootReducers;