const initialState = {
    signUp: {}
}

const rootReducers = (state = initialState, action) => {
    switch (action.type) {
      case "ON_SIGNUP":
        return {
          ...state,
          signUp: action.payload
        }
    
      default:
        return state
    }
}

export default rootReducers;