import { createAction, handleActions } from 'redux-actions';
/*
  Typescript types
*/
export interface IMenuData {
  id: number;
  label: string;
  bindingComponent?: string;
  subMenuItem?: IMenuData[];
}
export interface IStateFromProps {
  isMenuEnabled: boolean;
}
export interface IDispatchFromProps {
  handleClose: (e: React.MouseEvent) => void;
}
export interface IVerticalMenuProps {
  onLeftClickMenuItem: (e: React.MouseEvent<HTMLElement>, menuPath?: string) => void;
  onRightClickMenuItem: (e: React.MouseEvent<HTMLElement>, menuPath?: string) => void;
}
export interface IViewProps extends IStateFromProps, IDispatchFromProps, IVerticalMenuProps {
  data: IMenuData[];
  classes?: any;
}
export interface IContProps extends IStateFromProps, IDispatchFromProps, IVerticalMenuProps {}
/*
  Initial State
*/
const initialState: IStateFromProps = {
  isMenuEnabled: false,
};
/*
  Action
 */
export enum ActionTypes {
  TOGGLE = 'menu/vertical/[core]TOGGLE',
}
export const actionCreators = {
  toggle: createAction(ActionTypes.TOGGLE),
};
/*
  Reducer
 */
export default handleActions<IStateFromProps, any>(
  {
    [ActionTypes.TOGGLE]: state => ({
      ...state,
      isMenuEnabled: !state.isMenuEnabled,
    }),
  },
  initialState
);
