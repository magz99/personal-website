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
    {displayFull && (
      <>
        <div>
          <SectionTitle>In Brief</SectionTitle>
          <p>{inBrief()}</p>
        </div>
        <ReachMeAt />
      </>
    )}
  </section>
);

export default InfoSidebar;

InfoSidebar.propTypes = {
  displayFull: PropTypes.bool.isRequired,
};
