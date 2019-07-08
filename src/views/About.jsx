import React from 'react';
// import styled from 'styled-components';

import ResumeHeader from '../components/ResumeHeader';
import InfoSidebar from '../components/InfoSidebar';
import ResumeContent from '../components/ResumeContent';

const myResume = () => (
  <div className="resume-container">
    <ResumeHeader />
    <InfoSidebar displayFull />
    {/* Page 2 will have only the Reach me at */}
    <ResumeContent />
  </div>
);

export default myResume;
