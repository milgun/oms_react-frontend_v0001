import { createAction, handleActions } from 'redux-actions';

/** Alert 창을 띄울때 사용할 type들 */
export enum AlertTypes {
  SUCCESS = 'Success',
  WARNING = 'Warning',
  ALARM = 'Alarm',
  ERROR = 'Error',
}
/**
 * [Redux] + [Ducks pattern]
 *
 * Alert라는 Component module이 사용할 고유한 Redux state를 Widge.ts에 정의합니다.
 */
export interface IAlertReduxState {
  message: string;
  alertType: AlertTypes;
  isVisible: boolean;
}
/**
 * [Redux]
 *
 * Redux state가 초기에 가질 값들을 정의합니다.
 * 밑의 Reducer 쪽에서 해당 state를 넣어주게 됩니다.
 */
const initialState: IAlertReduxState = {
  isVisible: false,
  message: '',
  alertType: AlertTypes.ALARM,
};
/**
 * [Redux]
 *
 * 해당 Component가 가질 수 있는 Action들을 선언합니다.
 * 이후 이 Action enumeration들은 Reducer에서의 구분자가 됩니다.
 * 해당 Enum에 대입된 string 값들은 아래의 Action creator에 의해
 * 실제로 Action이 발생할 경우, Redux 내부적으로 구분하는 Action id입니다.
 * 그러므로 Global scope에서 모든 Action Eumeration 값의 중복이 없도록 해야하며,
 * 지정된 Naming rule을 꼭 지켜주기 바랍니다.
 *
 * (Naming rule)
 * {액션명} = {컴포넌트 이름}/{중간 경로}/[core or sub]{액션명}
 */
enum ActionTypes {
  ALERT_SUCCESS = 'alert/[core]ALERT_SUCCESS',
  ALERT_WARNING = 'alert/[core]ALERT_WARNING',
  ALERT_ALARM = 'alert/[core]ALERT_ALARM',
  ALERT_ERROR = 'alert/[core]ALERT_ERROR',
  CLOSE = 'alert/[core]CLOSE',
}
/**
 * [Redux]
 *
 * 해당 Component의 Action 호출시 사용할 Action creator를 정의합니다.
 * 이후 이 Action들은 Container component등에서 Dispatch method를 통해
 * 호출되어, Action을 일으키고 Reducer에 의해 State change를 발생시킵니다.
 *
 * createAciton 뒤에 오는 Generic <>은, 우리가 해당 Action을 사용할 때
 * 해당 Action에 전달할 값의 type을 강력하게 정의합니다.
 * 이후 전달된 인자를 payload라 하여, reducer에서 action.payload로 쓰이게 됩니다.
 */
export const actionCreators = {
  alertSuccess: createAction<string>(ActionTypes.ALERT_SUCCESS),
  alertWarning: createAction<string>(ActionTypes.ALERT_WARNING),
  alertAlarm: createAction<string>(ActionTypes.ALERT_ALARM),
  alertError: createAction<string>(ActionTypes.ALERT_ERROR),
  close: createAction(ActionTypes.CLOSE),
};
/**
 * [Redux] + [Ducks pattern]
 *
 * Reducer 입니다. Ducks pattern에서는 Widget.ts가 default로 export하게 됩니다.
 * Action이 발생하면, Action에 전달된 payload를 전달 받아 redux store에 존재하는
 * 각 state를 변경하게 됩니다.
 *
 * React의 immutability를 지키기 위하여, spread operator를 많이 사용하게 됩니다.
 * 각 개념들의 뜻을 정확하게 이해 한뒤 reducer를 보시기 바랍니다.
 */
const reducer = handleActions<IAlertReduxState, any>(
  {
    [ActionTypes.ALERT_SUCCESS]: (state, action) => ({
      ...state,
      alertType: AlertTypes.SUCCESS,
      isVisible: true,
      message: action.payload,
    }),
    [ActionTypes.ALERT_WARNING]: (state, action) => ({
      ...state,
      alertType: AlertTypes.WARNING,
      isVisible: true,
      message: action.payload,
    }),
    [ActionTypes.ALERT_ALARM]: (state, action) => ({
      ...state,
      alertType: AlertTypes.ALARM,
      isVisible: true,
      message: action.payload,
    }),
    [ActionTypes.ALERT_ERROR]: (state, action) => ({
      ...state,
      alertType: AlertTypes.ERROR,
      isVisible: true,
      message: action.payload,
    }),
    [ActionTypes.CLOSE]: state => ({
      ...state,
      isVisible: false,
    }),
  },
  initialState
);

export default reducer;
