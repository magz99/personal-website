import React from 'react';

import SectionTitle from '../styles/shared';

const myPhone = () => '9057821272';
const myAddress = () => '26 Trowell Lane, Ajax ON, L1Z1K4';

const ReachMeAt = () => (
  <div>
    <SectionTitle>Reach Me At:</SectionTitle>
    <ul>
      <li>
        Home:
        {myPhone()}
      </li>
      <li>
        Mobile:
        {myPhone()}
      </li>
      <li>{myAddress()}</li>
    </ul>
  </div>
);

export default ReachMeAt;
