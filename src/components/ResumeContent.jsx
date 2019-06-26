import React from 'react';
import styled from 'styled-components';

import SectionTitle from '../styles/shared';

const Subtitle = styled.h3``;
const Description = styled.h4``;

const ResumeContent = () => (
  <>
    <div>
      <SectionTitle>Experience</SectionTitle>
      <div>
        <Subtitle>Senior Web Developer</Subtitle>
        <Description>
          Saatchi &amp; Saatchi Canada (TPM Division), Toronto, Ontario | May 2011 - Present
        </Description>
        <ul>
          <li>
            Work collaboratively with project teams to conceptualize, develop and execute engaging
            and usable interactive experiences.
          </li>
          <li>
            Develop standards-compliant and usable websites with modern web technologies and
            contribute to site documentation.
          </li>
          <li>Ensure that websites are WCAG 2.0 Level A, and Level AA compliant</li>
          <li>
            Troubleshoot and debug (front-end or back-end) any cross-browser compatibility issues.
          </li>
          <li>Ongoing site maintenance and updates.</li>
          <li>
            Advise on best practices and current trends, and come up with creative solutions to
            development problems or obstacles.
          </li>
        </ul>
      </div>
      <div>
        <Subtitle>Software Developer</Subtitle>
        <Description>University of Toronto | June 2010 - August 2010</Description>
        <ul>
          <li>
            Added functionality to a pre-existing web-based application to be used internally by U
            of T faculty.
          </li>
          <li>Updated and created additional documentation pertaining to the new functionality.</li>
          <li>Created a test suite using Selenium IDE to automate the application testing.</li>
          <li>
            Attended meetings with clients to discuss new requirements, or changes to the
            application.
          </li>
        </ul>
      </div>
      <div>
        <Subtitle>Batch Test Analyst</Subtitle>
        <Description>Canadian Imperial Bank of Commerce | May 2008 - August 2009</Description>
        <ul>
          <li>
            Executed test cases, scenarios and scripts to ensure batch functionality in multiple
            applications.
          </li>
          <li>
            Ensured that all batch jobs executed properly by performing log and output verification
            and working with Application Development teams and clients to identify resolution of
            variances.
          </li>
          <li>Assisted in the design and development of test tools.</li>
          <li>
            Provided technical support and expertise in batch process testing for banking
            applications.
          </li>
        </ul>
      </div>
    </div>
    <div>
      <SectionTitle>Education</SectionTitle>
      <Subtitle>University of Toronto, Hons. Bachelor of Science in Computer Science</Subtitle>
    </div>
    <div>
      <SectionTitle>Languages</SectionTitle>
      <span>
        <b>French</b>
        {' '}
- Native
      </span>
      <span>
        <b>Spanish</b>
        {' '}
- Fluent
      </span>
    </div>
    <div>
      <SectionTitle>Education</SectionTitle>
      <Subtitle>University of Toronto, Hons. Bachelor of Science in Computer Science</Subtitle>
    </div>
    <div>
      <SectionTitle>Interests</SectionTitle>
      <ul>
        <li>Hands-on DIY projects</li>
        <li>Watching crime documentaries</li>
        <li>Antiquing</li>
      </ul>
    </div>
  </>
);

export default ResumeContent;
