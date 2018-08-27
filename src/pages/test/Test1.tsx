import * as React from 'react';
import Profile from '../../components/profile/Profile';

class Test1 extends React.PureComponent<any, any> {
  render() {
    return (
      <React.Fragment>
        <div>Welcome to Smart OMS!</div>
        <Profile name="test name!" job="test job!" />
        <Profile name="test name!" job="test job!" />
        <Profile name="test name!" job="test job!" />
        <Profile name="test name!" job="test job!" />
        <Profile name="test name!" job="test job!" />
        <Profile name="test name!" job="test job!" />
        <Profile name="test name!" job="test job!" />
        <Profile name="test name!" job="test job!" />
        <Profile name="test name!" job="test job!" />
      </React.Fragment>
    );
  }
}

export default Test1;
