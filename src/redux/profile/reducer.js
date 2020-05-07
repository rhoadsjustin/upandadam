import { saveEmail } from "./actions";

const profileReducer = (state = {}, action) => {
    switch (action.type) {
    case saveEmail: {
      return action.payload;
    }
    default:
      return state;
    }
  };
  
  export default profileReducer;