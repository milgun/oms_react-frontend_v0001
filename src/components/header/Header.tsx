import * as React from 'react';
import styled from 'styled-components';

import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MuiTypography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

export interface IProps {
  toggleMenu: (e: React.MouseEvent<HTMLElement>) => void;
  signOut: (e: React.MouseEvent<HTMLElement>) => void;
  classes?: any;
}

const MainWrapper = styled.div`
  flex-grow: 1;
`;
const Typography = styled(MuiTypography)`
  && {
    margin-left: 16px;
    flex-grow: 1;
  }
`;
const styles = ({ breakpoints, transitions }: Theme) =>
  createStyles({
    appBar: {
      position: 'fixed',
      marginLeft: '250px',
      transition: transitions.create('width', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
      [breakpoints.up('lg')]: {
        width: `calc(100% - 250px)`,
      },
    },
    navIconHide: {
      [breakpoints.up('lg')]: {
        display: 'none',
      },
    },
  });

const Header: React.SFC<IProps> = props => (
  <MainWrapper>
    <AppBar className={props.classes.appBar}>
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={props.toggleMenu}
          className={props.classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap={true}>
          Horizontal Menu Layer
        </Typography>
        <Button color="inherit" onClick={props.signOut}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  </MainWrapper>
);

export default withStyles(styles, { withTheme: true })(Header);
