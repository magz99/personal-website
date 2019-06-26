import React from 'react';
import PropTypes from 'prop-types';

import ReachMeAt from './ReachMeAt';
import SectionTitle from '../styles/shared';

const inBrief = () => `I am a self-starter, always looking to
learn new technologies. I have a keen
interest in website accessibility and
strive for continuous improvement.`;

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
          <span className="skill-subtitle">Proficient With:</span>
          <ul>
            <li>Javascript, jQuery</li>
            <li>HTML and CSS</li>
            <li>SVN</li>
          </ul>
          <span className="skill-subtitle">Working Knowledge:</span>
          <ul>
            <li>AngularJS, Angular</li>
            <li>React, Redux</li>
            <li>PHP (Laravel)</li>
            <li>Java (Spring)</li>
          </ul>
          <span className="skill-subtitle">Occasional (some familiarity):</span>
          <ul>
            <li>Git</li>
            <li>Firebase</li>
            <li>Mysql</li>
            <li>Node.js and Express.js</li>
          </ul>
        </div>
        <div>
          <SectionTitle>Soft Skills</SectionTitle>
          <ul>
            <li>Good communicator and can work collaboratively</li>
            <li>Can work under tight deadlines</li>
            <li>Resourceful and reliable team member</li>
          </ul>
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
