import * as React from 'react';
import styled from 'styled-components';

import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import { IViewProps } from './Widgets';
import Dropdown from './Dropdown';

const styles = ({ breakpoints }: Theme) =>
  createStyles({
    drawerPaper: {
      width: 250,
      [breakpoints.up('lg')]: {
        position: 'fixed',
      },
    },
  });
const FixedMenuLayer = styled.div`
  @media (min-width: 1280px) {
    min-width: 250px;
  }
`;

const HiddenMenu: React.SFC<IViewProps> = props => (
  <Hidden>
    <Drawer
      variant="temporary"
      anchor={'left'}
      open={props.isMenuEnabled}
      onClose={props.handleClose}
      classes={{
        paper: props.classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Dropdown
        data={props.data}
        onLeftClickMenuItem={props.onLeftClickMenuItem}
        onRightClickMenuItem={props.onRightClickMenuItem}
      />
    </Drawer>
  </Hidden>
);
const FixedMenu: React.SFC<IViewProps> = props => (
  <FixedMenuLayer>
    <Hidden mdDown={true} implementation="css">
      <Drawer
        variant="permanent"
        open={true}
        classes={{
          paper: props.classes.drawerPaper,
        }}
      >
        <Dropdown
          data={props.data}
          onLeftClickMenuItem={props.onLeftClickMenuItem}
          onRightClickMenuItem={props.onRightClickMenuItem}
        />
      </Drawer>
    </Hidden>
  </FixedMenuLayer>
);

const ResponsiveDropdown: React.SFC<IViewProps> = props => (
  <React.Fragment>
    <HiddenMenu {...props} />
    <FixedMenu {...props} />
  </React.Fragment>
);

export default withStyles(styles, { withTheme: true })(ResponsiveDropdown);
