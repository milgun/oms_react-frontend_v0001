import * as React from 'react';
import * as shortId from 'shortid';

import MenuUnit, { ItemTypes } from './MenuUnit';
import { IMenuData, IVerticalMenuProps } from '../Widgets';

interface IChildMenu extends IVerticalMenuProps {
  menuData?: IMenuData[];
}

const ChildMenu: React.SFC<IChildMenu> = ({
  menuData,
  onLeftClickMenuItem,
  onRightClickMenuItem,
}): any => {
  if (!menuData) return null;

  return menuData.map((datum: IMenuData) => {
    const hasChild = datum.hasOwnProperty('subMenuItem');

    return (
      <React.Fragment key={shortId.generate()}>
        <MenuUnit
          menuId={datum.id}
          itemType={ItemTypes.CHILD}
          menuDatum={datum}
          onLeftClickMenuItem={onLeftClickMenuItem}
          onRightClickMenuItem={onRightClickMenuItem}
        />
        {hasChild && (
          <ChildMenu
            menuData={datum.subMenuItem}
            onLeftClickMenuItem={onLeftClickMenuItem}
            onRightClickMenuItem={onRightClickMenuItem}
          />
        )}
      </React.Fragment>
    );
  });
};

export default ChildMenu;
