import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ResponsiveDropdown from './ResponsiveDropdown';
import {
  actionCreators as menuActions,
  IStateFromProps,
  IDispatchFromProps,
  IVerticalMenuProps,
  IContProps,
} from './Widgets';
import { IReduxState } from '../../../lib/redux/redux-reducer';
import { testData } from '../test.data';

const mapStateToProps = (state: IReduxState) => ({
  isMenuEnabled: state.menu.isMenuEnabled,
});

const mapDispatchToProps = (dispatch: Dispatch): IDispatchFromProps => ({
  handleClose: e => {
    e.preventDefault();
    dispatch(menuActions.toggle());
  },
});

class Container extends React.Component<IContProps> {
  constructor(props: IContProps) {
    super(props);
  }

  render() {
    const { isMenuEnabled, handleClose, onLeftClickMenuItem, onRightClickMenuItem } = this.props;
    return (
      <ResponsiveDropdown
        data={testData}
        isMenuEnabled={isMenuEnabled}
        handleClose={handleClose}
        onLeftClickMenuItem={onLeftClickMenuItem}
        onRightClickMenuItem={onRightClickMenuItem}
      />
    );
  }
}

export default connect<IStateFromProps, IDispatchFromProps, IVerticalMenuProps>(
  mapStateToProps,
  mapDispatchToProps
)(Container);
