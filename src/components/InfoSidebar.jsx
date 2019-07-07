import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReachMeAt from './ReachMeAt';
import SectionTitle from '../styles/shared';

const inBrief = () => `I am a self-starter, always looking to
learn new technologies. I have a keen
interest in website accessibility and
strive for continuous improvement.`;

const Subtitle = styled.h3`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

const InfoList = styled.ul`
  margin-bottom: 5px;
  list-style: disc;
  margin-left: 15px;

  li {
    font-size: 14px;
    line-height: 1.48;
  }
`;

const InfoSidebar = ({ displayFull }) => (
  <section className="info-sidebar">
    {displayFull ? (
      <>
        <div>
          <SectionTitle>In Brief</SectionTitle>
          <p>{inBrief()}</p>
        </div>
        <div>
          <SectionTitle>Tech Skills</SectionTitle>
          <Subtitle>Proficient With:</Subtitle>
          <InfoList>
            <li>Javascript, jQuery</li>
            <li>HTML and CSS</li>
            <li>SVN</li>
          </InfoList>
          <Subtitle>Working Knowledge:</Subtitle>
          <InfoList>
            <li>AngularJS, Angular</li>
            <li>React, Redux</li>
            <li>PHP (Laravel)</li>
            <li>Java (Spring)</li>
          </InfoList>
          <Subtitle>Occasional (some familiarity):</Subtitle>
          <InfoList>
            <li>Git</li>
            <li>Firebase</li>
            <li>Mysql</li>
            <li>Node.js and Express.js</li>
          </InfoList>
        </div>
        <div>
          <SectionTitle>Soft Skills</SectionTitle>
          <InfoList>
            <li>Good communicator and can work collaboratively</li>
            <li>Can work under tight deadlines</li>
            <li>Resourceful and reliable team member</li>
          </InfoList>
        </div>
        <ReachMeAt />
      </>
    ) : (
      <ReachMeAt />
    )}
  </section>
);

export default InfoSidebar;

InfoSidebar.propTypes = {
  displayFull: PropTypes.bool.isRequired,
};
