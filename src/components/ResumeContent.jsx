import React from 'react';
import styled from 'styled-components';

import SectionTitle from '../styles/shared';

const Subtitle = styled.h3`
  color: #164e98;
  margin-bottom: 5px;
`;
const Description = styled.h4`
  font-style: italic;
  font-size: 14px;
  margin-bottom: 5px;
`;

const JobList = styled.ul`
  list-style: disc;
  padding-left: 15px;
  li {
    font-size: 14px;
    line-height: 1.48;
  }
`;

const JobSection = styled.section`
  margin-bottom: 15px;
`;

const ContentSection = styled.section`
  margin-bottom: 15px;
`;

const ResumeContent = () => (
  <section id="resume-content">
    <div>
      <SectionTitle>Experience</SectionTitle>
      <JobSection>
        <Subtitle>Senior Web Developer</Subtitle>
        <Description>
          Saatchi &amp; Saatchi Canada (TPM Division), Toronto, Ontario | May 2011 - Present
        </Description>
        <JobList>
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
        </JobList>
      </JobSection>
      <JobSection>
        <Subtitle>Software Developer</Subtitle>
        <Description>University of Toronto | June 2010 - August 2010</Description>
        <JobList>
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
        </JobList>
      </JobSection>
      <JobSection>
        <Subtitle>Batch Test Analyst (Co-op)</Subtitle>
        <Description>Canadian Imperial Bank of Commerce | May 2008 - August 2009</Description>
        <JobList>
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
        </JobList>
      </JobSection>
    </div>
    <ContentSection>
      <SectionTitle>Education</SectionTitle>
      <Subtitle>
        University of Toronto, Hons. Bachelor of Science in Computer Science (2011)
      </Subtitle>
    </ContentSection>
    <ContentSection>
      <SectionTitle>Languages</SectionTitle>
      <JobList>
        <li>
          <b>French</b>
          {' '}
- Native
        </li>
        <li>
          <b>Spanish</b>
          {' '}
- Fluent
        </li>
      </JobList>
    </ContentSection>
    <ContentSection>
      <SectionTitle>Education</SectionTitle>
      <Subtitle>University of Toronto, Hons. Bachelor of Science in Computer Science</Subtitle>
    </ContentSection>
    <ContentSection>
      <SectionTitle>Interests</SectionTitle>
      <JobList>
        <li>Hands-on DIY projects</li>
        <li>Watching crime documentaries</li>
        <li>Antiquing</li>
      </JobList>
    </ContentSection>
  </section>
);

export default ResumeContent;
