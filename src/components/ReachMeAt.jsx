import React from 'react';

import SectionTitle from '../styles/shared';

const myPhone = () => '9057821272';
const myAddress = () => '26 Trowell Lane, Ajax ON, L1Z1K4';

const ReachMeAt = () => (
  <div>
    <SectionTitle>Reach Me At:</SectionTitle>
    Home:
    {' '}
    {myPhone()}
    {' '}
    <br />
    Mobile:
    {' '}
    {myPhone()}
    {' '}
    <br />
    {myAddress()}
  </div>
);

export default ReachMeAt;
