import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #164e98;
  color: white;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  padding: 15px 0;

  .name {
    font-size: 31px;
    font-weight: 800;
    letter-spacing: 10px;
  }

  .position {
    letter-spacing: 5px;
    display: block;
    margin-top: 15px;
  }
`;

const myName = () => 'Magali Bautista-Lee';
const myPosition = () => 'Web Developer';

const ResumeHeader = () => (
  <Header className="resume-header">
    <span className="name">{myName()}</span>
    <br />
    <span className="position">{myPosition()}</span>
  </Header>
);

export default ResumeHeader;
