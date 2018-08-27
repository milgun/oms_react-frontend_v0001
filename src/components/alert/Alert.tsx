import * as React from 'react';
import styled from 'styled-components';
// styled-components의 기본적인 사용법
const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  width: 50%;
  max-width: 760px;
  word-break: break-word;
  transform: translate(-50%, -50%);
  cursor: pointer;
  color: white;
  & > div {
    padding: 20px;
  }
  & > .success {
    background-color: green;
  }
  & > .warning {
    background-color: darkorange;
  }
  & > .alarm {
    background-color: blue;
  }
  & > .error {
    background-color: #f44336;
  }
`;
/**
 * [모듈화를 지키기 위한 typescript]
 *
 * View 영역의 typesciprt code는 nested한 view끼리, 혹은 해당 view class에만 한정 시켜야 합니다.
 * 절대로 Container 영역이나 로직 영역에 view의 interface를 가져다 쓰는 일이 없도록 하길 바랍니다.
 */
interface IAlertProps {
  /** Alert message */
  message: string;
  /** Alert type like 'error', 'warning' */
  alertType: string;
  /** Close alert function */
  closeAlert: (e: React.MouseEvent<HTMLElement>) => void;
}
/**
 * [Presentational component] + [SFC(Stateless Functional component)]
 *
 * (중요)
 * Presentational component에는 state 사용을 최소화 합니다.
 * 실제 View와 관련된 Source만 정의하며,
 * 동작과 관련된 부분은은 Container component 영역에 위치시켜야 합니다.
 *
 * (특징)
 * 위와 같은 특성으로 인하여 아래와 같은
 * SFC coding style과 매우 잘 어울립니다.
 */
const Alert: React.SFC<IAlertProps> = props => (
  <Wrapper>
    <div className={props.alertType} onClick={props.closeAlert}>
      <strong>{props.alertType}!</strong> {props.message}
    </div>
  </Wrapper>
);

export default Alert;
