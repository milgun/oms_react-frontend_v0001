// tslint:disable
import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    background: white;
    float: left;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  li {
    float: left;
    position: relative;
    width: 150px;
    list-style: none;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  a {
    display: block;
    text-decoration: none;
    padding: 5px 15px;
    color: #000;
  }
  ul ul {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1200;
  }
  ul ul ul {
    left: 100%;
    top: 0;
  }
  li:hover,
  li:hover li {
    background: #ddd;
  }
  li li:hover {
    background: #bbb;
  }
`;

interface IViewProps {
  data: any;
  selectedSubMenuIds: number[];
  handleSelectedItem: any;
  clearSubMenu: any;
}

const Dropdown: React.SFC<IViewProps> = ({
  data,
  selectedSubMenuIds,
  handleSelectedItem,
  clearSubMenu,
}) => {
  // 실제로 재귀를 통해 selectedSubMenuIds 에 해당하는 부분에 한한 Rendering 을 수행합니다.
  const renderMenu = (data: any, depthLevel = 0): any => {
    const menu = data.map((node: any) => {
      const display = <a>{node.label}</a>;
      const hasChild = node.hasOwnProperty('subMenuItem');
      let subMenu;

      if (selectedSubMenuIds[depthLevel] === node.id && hasChild) {
        subMenu = renderMenu(node.subMenuItem, depthLevel + 1);
      }

      return (
        <li
          key={node.id}
          onMouseEnter={handleSelectedItem(node.id, depthLevel)}
          onMouseLeave={clearSubMenu}
        >
          {display}
          {subMenu}
        </li>
      );
    });

    return <ul>{menu}</ul>;
  };

  return <Wrapper>{renderMenu(data)}</Wrapper>;
};

export default Dropdown;
