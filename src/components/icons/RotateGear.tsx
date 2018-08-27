import * as React from 'react';

import Gear from '@material-ui/icons/Settings';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .icon-gear {
    width: 10rem;
    height: 10rem;
    fill: #274c5e;
    transition: easeInOutQuint();
    animation: rotate 5s infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const RotateGear: React.SFC<{}> = () => (
  <Wrapper className="icon">
    <Gear className="icon-gear" />
  </Wrapper>
);

export default RotateGear;
