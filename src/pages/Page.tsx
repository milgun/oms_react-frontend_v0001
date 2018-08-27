import * as React from 'react';

import MainLayout from './layout/Container';
import GridLayoutTab from '../components/grid-layout-tab/Container';

const Page: React.SFC<{}> = () => (
  <MainLayout>
    <GridLayoutTab />
  </MainLayout>
);

export default Page;
