import * as React from 'react';
import * as Loadable from 'react-loadable';

import Typography from '@material-ui/core/Typography';
import { ITab } from './Widgets';

export interface ITabContents {
  index: number;
  data: ITab[];
}
const TabContent = (index: number, data: ITab[]) => {
  const LoadableComponent = Loadable({
    loader: () => import('../../pages/' + `${data[index].tabItems[0].bindingComponents}`),
    loading() {
      return <div>Loading...</div>;
    },
  });
  return <LoadableComponent />;
};

const TabContents: React.SFC<ITabContents> = props => (
  <Typography component="div" style={{ padding: 16 }}>
    {TabContent(props.index, props.data)}
  </Typography>
);

export default TabContents;
