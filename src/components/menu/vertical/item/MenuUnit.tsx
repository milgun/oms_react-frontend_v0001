import * as React from 'react';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

import { IMenuData, IVerticalMenuProps } from '../Widgets';

export enum ItemTypes {
  PARENTS = 'parents',
  CHILD = 'child',
}
interface IMenuUnit extends IVerticalMenuProps {
  menuId: number;
  itemType: ItemTypes;
  menuDatum: IMenuData;
}

const Item = styled(Button).attrs({
  itemType: (props: any) => props.itemType,
})`
  && {
    text-transform: none;
    justify-content: flex-start;
    padding-left: ${props => (props.itemType === 'parents' ? '24px' : '32px')};
    font-weight: ${props => (props.itemType === 'parents' ? 600 : 400)};
  }
`;

class MenuUnit extends React.PureComponent<IMenuUnit, {}> {
  constructor(props: IMenuUnit) {
    super(props);
  }

  onLeftClick = (e: React.MouseEvent<HTMLElement>) => {
    this.props.onLeftClickMenuItem(e, this.props.menuDatum.bindingComponent);
  }

  onRightClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.onRightClickMenuItem(e, this.props.menuDatum.bindingComponent);
  }

  render() {
    return (
      <List component="li" disablePadding={true}>
        <Item
          itemType={this.props.itemType}
          fullWidth={true}
          onClick={this.onLeftClick}
          onContextMenu={this.onRightClick}
        >
          {this.props.menuDatum.label}
        </Item>
        {this.props.children}
      </List>
    );
  }
}

export default MenuUnit;
