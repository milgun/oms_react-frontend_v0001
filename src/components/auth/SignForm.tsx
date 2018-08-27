import * as React from 'react';
import styled from 'styled-components';

import SignInIcon, { ISignInIconProps } from './SignInIcon';
import SignInBody, { ISignInBodyProps } from './SignInBody';

export interface ISignForm extends ISignInBodyProps, ISignInIconProps {}

const Wrapper = styled.div`
  max-width: 280px;
  min-height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgba(170, 170, 170, 0.68);
  color: #274c5e;
  transform: translate(-50%, -50%);
  & > .sign-form-input {
    padding: 8px 20px 20px;
  }
  & > .sign-form-button {
    padding: 8px 20px 20px;
    margin-top: 10px;
    & > button {
      margin-top: 10px;
      width: 100%;
      border-radius: 20px;
    }
  }
`;

const SignForm: React.SFC<ISignForm> = props => (
  <React.Fragment>
    <Wrapper>
      <SignInIcon pending={props.pending} />
      <SignInBody
        onSignIn={props.onSignIn}
        onChangeId={props.onChangeId}
        onChangePassword={props.onChangePassword}
      />
    </Wrapper>
  </React.Fragment>
);

export default SignForm;
