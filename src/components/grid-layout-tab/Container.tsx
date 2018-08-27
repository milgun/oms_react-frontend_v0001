import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import GridLayoutTab from './GridLayoutTab';
import { ITab, actionCreators as tabActions } from './Widgets';
import { IReduxState } from '../../lib/redux/redux-reducer';

interface IStateProps {
  enabledTabIdx: number;
  tabs: ITab[];
}
interface IDispatchProps {
  switchTab: (event: React.ChangeEvent<{}>, value: number) => void;
}
interface IContProps extends IStateProps, IDispatchProps {}

const mapStateToProps = (state: IReduxState) => ({
  enabledTabIdx: state.tab.enabledTabIdx,
  tabs: state.tab.tabs,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  switchTab: (event, value) => {
    event.preventDefault();
    dispatch(tabActions.switchTab(value));
  },
});

class Container extends React.Component<IContProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      bindingModules: [],
    };
  }

  render() {
    return (
      <GridLayoutTab
        index={this.props.enabledTabIdx}
        data={this.props.tabs}
        onClickTabHeader={this.props.switchTab}
      />
    );
  }
}

export default connect<IStateProps, IDispatchProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(Container);
