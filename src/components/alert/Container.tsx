import * as React from 'react';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import Alert from './Alert';
import { actionCreators as alertActions, AlertTypes } from './Widgets';
import { IReduxState } from '../../lib/redux/redux-reducer';
/**
 * [모듈화를 지키기 위한 typescript]
 *
 * (중요)
 * Container 영역의 typesciprt code는,
 * State from props, Dispatch from props, Own props, Container props로
 * 나누어서 작성하시기 바랍니다.
 * react-redux의 connect에 명확하게 형을 지정해주기 위함입니다.
 *
 * (예시)
 * export default connect<IStateProps, IDispatchProps, IOwnProps>
 */
interface IStateProps {
  message: string;
  alertType: AlertTypes;
  isVisible: boolean;
}
interface IDispatchProps {
  closeAlert: (e: React.MouseEvent<HTMLElement>) => void;
}
interface IContProps extends IStateProps, IDispatchProps {}
/**
 * [Redux]
 *
 * Redux store에서 가져와 Component에 주입할 state형 props
 */
const mapStateToProps = (state: IReduxState) => ({
  isVisible: state.alert.isVisible,
  message: state.alert.message,
  alertType: state.alert.alertType,
});
/**
 * [Redux]
 *
 * react-redux의 connect는 dispatch parameter부에 기정의 된
 * Dispatch function을 통해 Redux action들을 call할수 있습니다.
 * 이를 통해 Component에 주입할 function형 props들을 정의하게 됩니다.
 */
const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  closeAlert: e => {
    e.preventDefault();
    dispatch(alertActions.close());
  },
});
/**
 * [Container component] + [Stateful component]
 *
 * (중요)
 * Container components에는 실제 동작과 관련된 부분들과, redux에 의해
 * 주입될 props을 정의하게 됩니다.
 *
 * (특징)
 * 아래의 경우 state는 존재하지 않으나, isVisible을 통해 conditional rendering을
 * 수행하기에 stateful componets로 coding 되었습니다.
 * SFC의 경우 Conditional rendering을 지원하게 type이 정의되어 있지 않습니다.
 */
class Container extends React.Component<IContProps> {
  constructor(props: IContProps) {
    super(props);
  }

  render() {
    const { isVisible, message, alertType, closeAlert } = this.props;
    return (
      isVisible && (
        <Alert message={message} alertType={alertType.toLowerCase()} closeAlert={closeAlert} />
      )
    );
  }
}
/** 인자가 되는 component에 기 정의한 prop들을 주입하게 connect를 통해 주입합니다. */
export default connect<IStateProps, IDispatchProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(Container);
