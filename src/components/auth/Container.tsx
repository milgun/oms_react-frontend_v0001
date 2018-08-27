import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { replace } from 'connected-react-router';
import { Redirect } from 'react-router-dom';

import SignForm from './SignForm';
import { IUser, actionCreators as authActions } from './Widgets';
import { IReduxState } from '../../lib/redux/redux-reducer';
import { getUserInfo } from './Utils';

interface IStateProps {
  pending: boolean;
  isSignIn: boolean;
  user?: IUser;
}
interface IDispatchProps {
  onSignIn: (id: string, password: string) => void;
}
interface IContProps extends IStateProps, IDispatchProps {}
interface IContState {
  id: string;
  password: string;
}

const mapStateToProps = (state: IReduxState) => ({
  pending: state.auth.pending,
  isSignIn: state.auth.isSignIn,
});
/**
 * (수정 필요)
 * axios로 실제 ajax request를 날리는 부분을 구현했으나,
 * redux-saga도록 사용하게 바꾸어야 합니다.
 */
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onSignIn: (id, password) => {
    if (id.trim() === '') {
      return;
    }
    dispatch(authActions.signIn());
    getUserInfo(id)
      .then(response => {
        dispatch(authActions.signInSuccess(response.data));
        dispatch(replace('/'));
      })
      .catch(error => {
        dispatch(authActions.signInFail());
      });
  },
});

class Container extends React.Component<IContProps, IContState> {
  constructor(props: IContProps) {
    super(props);
    this.state = {
      id: '',
      password: '',
    };
  }

  shouldComponentUpdate(nextProps: IContProps) {
    return nextProps.pending !== this.props.pending;
  }

  onSignIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { id, password } = this.state;
    this.props.onSignIn(id, password);
  }
  onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ id: e.target.value });
  }
  onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.props.isSignIn) {
      return <Redirect to={{ pathname: '/' }} />;
    }
    return (
      <SignForm
        pending={this.props.pending}
        onSignIn={this.onSignIn}
        onChangeId={this.onChangeId}
        onChangePassword={this.onChangePassword}
      />
    );
  }
}

export default connect<IStateProps, IDispatchProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(Container);
