export const actionType = {
  SET_USER: "SET_USER",
  SET_AD: "SET_AD",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

      case actionType.SET_AD:
      return {
        ...state,
        ad: action.ad,
      };

    default:
      return state;
  }
};

export default reducer;
