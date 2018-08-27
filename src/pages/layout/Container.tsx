import * as React from 'react';
import { connect } from 'react-redux';
import * as shortid from 'shortid';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';

import MainLayout from './MainLayout';
import { actionCreators as menuActions } from '../../components/menu/vertical/Widgets';
import {
  actionCreators as tabActions,
  ITab,
  IAddItemPayload,
} from '../../components/grid-layout-tab/Widgets';
import { actionCreators as authActions } from '../../components/auth/Widgets';
import { IReduxState } from '../../lib/redux/redux-reducer';

interface IStateFromProps {
  curTabIdx: number;
}

interface IDispatchFromProps {
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void;
  signOut: (e: React.MouseEvent<HTMLElement>) => void;
  onLeftClickMenu: (e: React.MouseEvent<HTMLElement>, menuPath: string) => void;
  onRightClickMenu: (
    curIdx: number
  ) => (e: React.MouseEvent<HTMLElement>, menuPath: string) => void;
}

interface IContProps extends IStateFromProps, IDispatchFromProps {}

const mapStateToProps = (state: IReduxState) => ({
  curTabIdx: state.tab.enabledTabIdx,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
  // 우측 Logout 버튼
  signOut: e => {
    dispatch(authActions.signOut());
    dispatch(push('./signin'));
  },
  // 좌측 Menu Toggle Icon
  toggleMenu: e => {
    dispatch(menuActions.toggle());
  },
  // Menu Click시 Tab에 클릭 컴포넌트 바인딩
  onLeftClickMenu: (e, menuPath) => {
    if (!menuPath) return;

    const tab: ITab = {
      tabId: shortid.generate(),
      tabLabel: menuPath,
      tabItems: [{ bindingId: shortid.generate(), bindingComponents: menuPath }],
    };
    dispatch(tabActions.addTab(tab));
  },
  onRightClickMenu: curTabIdx => (e, menuPath) => {
    if (!menuPath) return;

    const tabItem: IAddItemPayload = {
      tabIdx: curTabIdx,
      tabItem: { bindingId: shortid.generate(), bindingComponents: menuPath },
    };
    dispatch(tabActions.addItem(tabItem));
  },
});

class Container extends React.Component<IContProps> {
  constructor(props: IContProps) {
    super(props);
  }

  render() {
    const {
      children,
      curTabIdx,
      onLeftClickMenu,
      onRightClickMenu,
      signOut,
      toggleMenu,
    } = this.props;
    return (
      <MainLayout
        toggleMenu={toggleMenu}
        signOut={signOut}
        onLeftClickMenu={onLeftClickMenu}
        onRightClickMenu={onRightClickMenu(curTabIdx)}
        children={children}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
