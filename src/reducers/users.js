import { GET_USERS_SUCCESS } from "../constants/actionTypes";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: [{ id: 1, name: "hoony" }]
      };

    default:
      return state;
  }
}
