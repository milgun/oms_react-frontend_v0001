import * as React from 'react';

import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';

import MenuUnit, { ItemTypes } from './MenuUnit';
import ChildMenu from './ChildMenu';
import { IVerticalMenuProps, IMenuData } from '../Widgets';

interface IParentMenuProps extends IVerticalMenuProps {
  menuId: number;
  data: IMenuData;
}
interface IParentMenuState {
  isOpen: boolean;
}

class ParentMenu extends React.PureComponent<IParentMenuProps, IParentMenuState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  onLeftClickParentMenu = (e: React.MouseEvent<HTMLElement>, menuPath: string) => {
    this.setState((prevState: any) => ({ isOpen: !prevState.isOpen }));
    this.props.onLeftClickMenuItem(e, menuPath);
  }
  onRightClickParentMenu = (e: React.MouseEvent<HTMLElement>, menuPath: string) => {
    this.setState((prevState: any) => ({ isOpen: !prevState.isOpen }));
    this.props.onRightClickMenuItem(e, menuPath);
  }

  render() {
    const hasChild = this.props.data.hasOwnProperty('subMenuItem');
    return (
      <MenuUnit
        menuId={this.props.menuId}
        itemType={ItemTypes.PARENTS}
        menuDatum={this.props.data}
        onLeftClickMenuItem={this.onLeftClickParentMenu}
        onRightClickMenuItem={this.onRightClickParentMenu}
      >
        {hasChild && (
          <Collapse in={this.state.isOpen} timeout="auto" unmountOnExit={true}>
            <List component="ul">
              <ChildMenu
                menuData={this.props.data.subMenuItem}
                onLeftClickMenuItem={this.props.onLeftClickMenuItem}
                onRightClickMenuItem={this.props.onRightClickMenuItem}
              />
            </List>
          </Collapse>
        )}
      </MenuUnit>
    );
  }
}

export default ParentMenu;
