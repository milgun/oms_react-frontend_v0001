import * as React from 'react';
import styled from 'styled-components';

import TabHeader, { ITabHeader } from './TabHeader';
import TabContents, { ITabContents } from './TabContents';

interface IGridLayoutTab extends ITabContents, ITabHeader {}

const MainWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  background: white;
`;
const GridLayoutTab: React.SFC<IGridLayoutTab> = props => (
  <MainWrapper>
    <TabHeader index={props.index} data={props.data} onClickTabHeader={props.onClickTabHeader} />
    <TabContents index={props.index} data={props.data} />
  </MainWrapper>
);

export default GridLayoutTab;
