import * as React from 'react';
import styled from 'styled-components';

import List from '@material-ui/core/List';

import { IMenuData, IVerticalMenuProps } from './Widgets';
import ParentMenu from './item/ParentMenu';
import Tag from './item/Tag';

interface IDropdown extends IVerticalMenuProps {
  data: IMenuData[];
}
const Line = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0.12);
`;

const Dropdown: React.SFC<IDropdown> = ({
  data,
  onLeftClickMenuItem,
  onRightClickMenuItem,
}) => (
  <div>
    <Tag />
    <Line />
    <List component="ul">
      {data.map(datum => (
        <ParentMenu
          key={datum.id}
          menuId={datum.id}
          data={datum}
          onLeftClickMenuItem={onLeftClickMenuItem}
          onRightClickMenuItem={onRightClickMenuItem}
        />
      ))}
    </List>
  </div>
);

export default Dropdown;
