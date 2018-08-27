import { createAction, handleActions } from 'redux-actions';
/*
  Typescript types
*/
export interface IUser {
  id: string;
  name: string;
}
export interface IAuthReduxState {
  pending: boolean;
  isSignIn: boolean;
  user?: IUser;
  isFirst?: boolean;
}
/*
  Initial State
*/
const initialState: IAuthReduxState = {
  pending: false,
  isSignIn: false,
  isFirst: true,
};
/*
  Action
 */
export enum ActionTypes {
  SIGN_IN = 'auth/[core]SIGN_IN',
  SIGN_IN_SUCCESS = 'auth/[core]SIGN_IN_SUCCESS',
  SIGN_IN_FAIL = 'auth/[core]SIGN_IN_FAIL',
  SIGN_UP = 'auth/[core]SIGN_UP',
  SIGN_OUT = 'auth/[core]SIGN_OUT',
}
export const actionCreators = {
  signIn: createAction(ActionTypes.SIGN_IN),
  signInSuccess: createAction<IUser>(ActionTypes.SIGN_IN_SUCCESS),
  signInFail: createAction(ActionTypes.SIGN_IN_FAIL),
  signUp: createAction(ActionTypes.SIGN_UP),
  signOut: createAction(ActionTypes.SIGN_OUT),
};
/*
  Reducer
 */
export default handleActions<IAuthReduxState, any>(
  {
    [ActionTypes.SIGN_IN]: state => ({
      ...state,
      pending: true,
    }),
    [ActionTypes.SIGN_IN_SUCCESS]: (state, action) => {
      const { id, name } = action.payload;
      return {
        ...state,
        isSignIn: true,
        pending: false,
        isFirst: false,
        user: { id, name },
      };
    },
    [ActionTypes.SIGN_IN_FAIL]: state => ({
      ...state,
      pending: false,
    }),
    [ActionTypes.SIGN_OUT]: state => ({
      ...state,
      isSignIn: false,
      isFirst: true,
      user: undefined,
    }),
  },
  initialState
);
