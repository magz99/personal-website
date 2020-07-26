import React from 'react';
import styled from 'styled-components';

import SectionTitle from '../styles/shared';

const myEmail = () => 'mbautistalee@gmail.com';
const website = () => 'magzb.ca';
const webUrl = () => 'https://www.magzb.ca';
const myPhone = () => '(905) 782-1272';
const myAddress = () => '30 Morewood Crescent, North York ON, M2K1L8';

const InfoList = styled.ul`
  margin-bottom: 5px;
  li {
    font-size: 14px;
    line-height: 1.48;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const ReachMeAt = () => (
  <div>
    <SectionTitle>Reach Me At</SectionTitle>
    <InfoList>
      <li>
        <BoldText>Email: </BoldText>
        {myEmail()}
      </li>
      <li>
        <BoldText>Website: </BoldText>
        {' '}
        <a href={webUrl()} target="_blank" rel="noreferrer noopener">
          {website()}
        </a>
      </li>
      <li>
        <BoldText>Home: </BoldText>
        {myPhone()}
      </li>
      <li>
        <BoldText>Mobile: </BoldText>
        {myPhone()}
      </li>
      <li>
        <BoldText>Address: </BoldText>
        {' '}
        {myAddress()}
      </li>
    </InfoList>
  </div>
);

export default ReachMeAt;
