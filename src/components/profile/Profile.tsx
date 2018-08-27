import * as React from 'react';
import { Button } from '@material-ui/core';

interface IProps {
  name: string;
  job: string;
}

const Profile: React.SFC<IProps> = ({ name, job }) => (
  <div>
    <h1>프로필</h1>
    <div>
      <b>이름: </b>
      {name}
    </div>
    <div>
      <b>직업: </b>
      {job}
    </div>
    <Button variant="raised" color="primary">
      TEST용 버튼
    </Button>
  </div>
);

export default Profile;
