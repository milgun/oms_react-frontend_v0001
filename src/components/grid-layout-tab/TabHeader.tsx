import * as React from 'react';

import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { ITab } from './Widgets';

export interface ITabHeader {
  index: number;
  data: ITab[];
  onClickTabHeader: (event: React.ChangeEvent<{}>, value: number) => void;
  classes?: any;
}

const styles = ({ breakpoints, transitions }: Theme) =>
  createStyles({
    appBar: {
      position: 'fixed',
      marginLeft: '250px',
      top: '48px',
      transition: transitions.create('width', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
      [breakpoints.up('lg')]: {
        width: `calc(100% - 250px)`,
      },
    },
  });

const TabHeader: React.SFC<ITabHeader> = props => (
  <AppBar className={props.classes.appBar} color={'default'}>
    <Tabs
      value={props.index}
      onChange={props.onClickTabHeader}
      scrollable={true}
      scrollButtons="on"
      indicatorColor="primary"
      textColor="primary"
    >
      {props.data.map((datum: ITab) => (
        <Tab key={datum.tabId} label={datum.tabLabel} />
      ))}
    </Tabs>
  </AppBar>
);

export default withStyles(styles, { withTheme: true })(TabHeader);
