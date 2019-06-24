import React from 'react';
// import styled from 'styled-components';

import ResumeHeader from '../components/ResumeHeader';
import InfoSidebar from '../components/InfoSidebar';

const myResume = () => (
  <div className="resume-container">
    <ResumeHeader />
    <InfoSidebar displayFull="true" />
    {/* Page 2 will have only the Reach me at */}
  </div>
);

export default myResume;
