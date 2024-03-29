import { SET_USER_DATA } from './actions';

const initialState = {
    userData: {
      email:null,
      phone:null
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
