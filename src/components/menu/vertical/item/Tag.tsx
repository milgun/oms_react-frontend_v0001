import * as React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
`;
const TextWrapper = styled.div`
  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }
  @media (min-width: 600px) {
    min-height: 64px;
  }
  display: flex;
  flex-grow: 1;
  min-height: 56px;
  align-items: flex-start;
  padding-left: 24px;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.h2`
  color: rgba(0, 0, 0, 0.54);
  margin: 0;
  margin-bottom: 4px;
  font-size: 1.3125rem;
  font-weight: 500;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.16667em;
`;
const SubTitle = styled.span`
  color: rgba(0, 0, 0, 0.54);
  margin: 0;
  display: block;
  font-size: 0.75rem;
  font-weight: 400;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 1.375em;
`;

const Tag: React.SFC<{}> = () => (
  <MainWrapper>
    <TextWrapper>
      <Title>OMS</Title>
      <SubTitle>외주 관리 시스템</SubTitle>
    </TextWrapper>
  </MainWrapper>
);

export default Tag;
