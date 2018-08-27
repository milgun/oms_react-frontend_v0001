import * as React from 'react';
import styled from 'styled-components';

import Header from '../../components/header/Header';
import VerticalDropdownMenu from '../../components/menu/vertical/Container';

interface IMainLayoutProps {
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void;
  signOut: (e: React.MouseEvent<HTMLElement>) => void;
  onLeftClickMenu: (e: React.MouseEvent<HTMLElement>, menuPath: string) => void;
  onRightClickMenu: (e: React.MouseEvent<HTMLElement>, menuPath: string) => void;
}

const PageWrapper = styled.div`
  height: 430;
  flex-grow: 1;
  z-index: 1;
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
`;

const ContentsWrapper = styled.div`
  flex: 1 1 100%;
  margin-bottom: 100px;
  max-width: 100%;
  /* 실제 Contents 부분 */
  margin-top: 96px;
`;

const MainLayout: React.SFC<IMainLayoutProps> = props => (
  <PageWrapper>
    <Header signOut={props.signOut} toggleMenu={props.toggleMenu} />
    <VerticalDropdownMenu
      onLeftClickMenuItem={props.onLeftClickMenu}
      onRightClickMenuItem={props.onRightClickMenu}
    />
    <ContentsWrapper>{props.children}</ContentsWrapper>
  </PageWrapper>
);

export default MainLayout;
