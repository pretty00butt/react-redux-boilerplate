import * as types from "../constants/actionTypes";
import APIS from "../apis";

export function getUsers(options = {}) {
  return async function(dispatch) {
    dispatch({
      type: types.GET_USERS,
      users: []
    });
    // return new Promise((resolve, reject) => (
    //   request(APIS.USERS.GET_USERS.METHOD, APIS.USERS.GET_USERS.PATH())
    //     .end((err, res) => {
    //       if (err) reject(err)
    //       else {
    //         dispatch({
    //           type: types.GET_USERS,
    //           users: res.body
    //         })
    //         .then(() => {
    //           resolve(res)
    //         })
    //       }
    //     })
    // ))
  };
}
