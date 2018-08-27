import * as React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 200px;
  padding: 10%;
  & > svg {
    color: white;
    width: 100%;
    height: 100%;
  }
  & > .pending {
    animation: blink 1s linear infinite;
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
export interface ISignInIconProps {
  pending: boolean;
}

const SignInIcon: React.SFC<ISignInIconProps> = props => (
  <Wrapper>
    <AccountCircle className={props.pending ? 'pending' : ''} />
  </Wrapper>
);

export default SignInIcon;
