import * as React from 'react';

import RotateGear from '../../components/icons/RotateGear';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  text-align: center;
  color: #274c5e;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title {
    display: block;
    font-size: 2rem;
    font-weight: lighter;
    text-align: center;
  }
  .desc {
    max-width: 100%;
    font-size: 1.2rem;
    font-weight: lighter;
  }
  .icon {
    position: relative;
  }
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

interface IProps {
  title: string;
  linkTitle: string;
}

const WaitingWindow: React.SFC<IProps> = ({ title, linkTitle }) => (
  <Wrapper>
    <RotateGear />
    <h1 className="title">{title}</h1>
    <a href="/" className="desc">
      {linkTitle}
    </a>
  </Wrapper>
);

export default WaitingWindow;
