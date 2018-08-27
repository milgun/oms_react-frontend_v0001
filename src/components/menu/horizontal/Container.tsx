// tslint:disable
import * as React from 'react';

import { testData } from '../test.data';
import Dropdown from './Dropdown';

interface IViewState {
  selectedSubMenuIds: number[];
}

class Container extends React.Component<{}, IViewState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedSubMenuIds: [],
    };
  }
  // Mouse out 시에는 Rendering 항목 제거
  clearSubMenu = () =>
    this.setState({
      selectedSubMenuIds: [],
    });

  // 선택된 부분의 이전 + 선택된 부분만 Rendering 되도록 처리
  handleSelectedItem = (selected: any, depthLevel: any) => {
    const updatedArray = this.state.selectedSubMenuIds.slice(0);
    updatedArray[depthLevel] = selected;
    return () => {
      this.setState({
        selectedSubMenuIds: updatedArray,
      });
    };
  };

  render() {
    return (
      <Dropdown
        data={testData}
        handleSelectedItem={this.handleSelectedItem}
        clearSubMenu={this.clearSubMenu}
        selectedSubMenuIds={this.state.selectedSubMenuIds}
      />
    );
  }
}

export default Container;
