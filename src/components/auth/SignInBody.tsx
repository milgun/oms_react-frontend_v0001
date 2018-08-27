import * as React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export interface ISignInBodyProps {
  onSignIn: (e: React.MouseEvent<HTMLElement>) => void;
  onChangeId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInBody: React.SFC<ISignInBodyProps> = props => (
  <React.Fragment>
    <div className="sign-form-input">
      <TextField
        autoComplete="off"
        fullWidth={true}
        autoFocus={true}
        name="id"
        label="ID"
        onChange={props.onChangeId}
      />
      <TextField
        fullWidth={true}
        type="password"
        name="password"
        label="Password"
        onChange={props.onChangePassword}
      />
    </div>
    <div className="sign-form-button">
      <Button variant="raised" color="primary" onClick={props.onSignIn}>
        SIGN IN
      </Button>
      <Button variant="raised" color="secondary">
        SIGN UP
      </Button>
    </div>
  </React.Fragment>
);

export default SignInBody;
