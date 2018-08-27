import { createAction, handleActions } from 'redux-actions';
/*
  Typescript types
*/
interface ITabItem {
  bindingId: string;
  bindingComponents: string;
}
export interface ITab {
  tabId: string;
  tabLabel: string;
  tabItems: ITabItem[];
}
export interface ITabReduxState {
  enabledTabIdx: number;
  tabs: ITab[];
}
/*
  Initial State
*/
const initialState: ITabReduxState = {
  enabledTabIdx: 0,
  tabs: [],
};
/*
  Action
 */
export interface IAddItemPayload {
  tabIdx: number;
  tabItem: ITabItem;
}
enum ActionTypes {
  SWITCH_TAB = 'grid-layout-tab/[core]SWTICH_TAB',
  ADD_TAB = 'grid-layout-tab/[core]ADD_TAB',
  REMOVE_TAB = 'grid-layout-tab/[core]REMOVE_TAB',
  ADD_ITEM = 'grid-layout-tab/[core]ADD_ITEM',
  REMOVE_ITEM = 'grid-layout-tab/[core]REMOVE_ITEM',
}
export const actionCreators = {
  switchTab: createAction<number>(ActionTypes.SWITCH_TAB),
  addTab: createAction<ITab>(ActionTypes.ADD_TAB),
  removeTab: createAction<number>(ActionTypes.REMOVE_TAB),
  addItem: createAction<IAddItemPayload>(ActionTypes.ADD_ITEM),
  removeItem: createAction<number>(ActionTypes.REMOVE_ITEM),
};
/*
  Reducer
 */
export default handleActions<ITabReduxState, any>(
  {
    [ActionTypes.SWITCH_TAB]: (state, action) => ({
      ...state,
      enabledTabIdx: action.payload,
    }),
    [ActionTypes.ADD_TAB]: (state, action) => ({
      ...state,
      tabs: state.tabs.concat(action.payload),
    }),
    [ActionTypes.REMOVE_TAB]: (state, action) => ({
      ...state,
      tabs: [...state.tabs.slice(0, action.payload), ...state.tabs.slice(action.payload + 1)],
    }),
    [ActionTypes.ADD_ITEM]: (state, action) => ({
      ...state,
      tabs: [
        ...state.tabs.slice(0, action.payload.tabIdx),
        {
          ...state.tabs[action.payload.tabIdx],
          tabItems: state.tabs[action.payload.tabIdx].tabItems.concat(action.payload.tabItem),
        },
        ...state.tabs.slice(action.payload.tabIdx + 1),
      ],
    }),
  },
  initialState
);
