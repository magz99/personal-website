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
            <li>Typescript, Javascript</li>
            <li>HTML and CSS (LESS/SCSS)</li>
            <li>git, SVN</li>
            <li>Agile/Scrum methods</li>
            <li>WCAG/AODA guidelines</li>
          </InfoList>
          <Subtitle>Working Knowledge:</Subtitle>
          <InfoList>
            <li>jQuery</li>
            <li>Angular 4+</li>
            <li>Node.js and Express.js</li>
            <li>RxJS, ngrx</li>
            <li>AWS</li>
            <li>Storybook, Puppeteer</li>
          </InfoList>
          <Subtitle>Occasional (some familiarity):</Subtitle>
          <InfoList>
            <li>Java (Spring), Python</li>
            <li>PHP (Laravel)</li>
            <li>React, Redux, AngularJS</li>
            <li>Firebase, Mysql</li>
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
