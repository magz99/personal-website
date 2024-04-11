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
  line-height: 1.2;
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
        <Subtitle>Senior Software Engineer</Subtitle>
        <Description>
          Cisco Systems, Toronto, Ontario&nbsp;|&nbsp;August 2021 - Present
        </Description>
        <JobList>
          <li>
            Creates a rapidly evolving consumer-facing mobile application
          </li>
          <li>
            Assist in architecting front-end features and requirements
          </li>
          <li>Create intuitive, robust and reusable user interfaces using the Ionic framework</li>
          <li>
            Writes unit and end-to-end tests for new features that are developed
          </li>
          <li>Help manage individual project priorities, deadlines and deliverables</li>
        </JobList>
      </JobSection>
      <JobSection>
        <Subtitle>Software Developer</Subtitle>
        <Description>
          Rangle.io, Toronto, Ontario&nbsp;|&nbsp;September 2019 - July 2021
        </Description>
        <JobList>
          <li>
            Writes well designed, optimized, testable and efficient code by using industry best practices
          </li>
          <li>
            Works with various clients and participates in planning, grooming and development of user stories
          </li>
          <li>Ensure that websites meet the required accessibility compliance</li>
          <li>
            Writes unit tests for new features that are developed
          </li>
          <li>Manage individual project priorities, deadlines and deliverables</li>
        </JobList>
      </JobSection>
      <JobSection>
        <Subtitle>Senior Web Developer</Subtitle>
        <Description>
          Saatchi &amp; Saatchi Canada (TPM Division), Toronto, Ontario&nbsp;|&nbsp;May 2011 - August 2019
        </Description>
        <JobList>
          <li>
            Worked collaboratively with project teams to conceptualize, develop and execute engaging
            and usable interactive experiences.
          </li>
          <li>
            Developed standards-compliant and usable websites with modern web technologies and
            contribute to site documentation.
          </li>
          <li>Ensured that websites are WCAG 2.0 Level A, and Level AA compliant</li>
          <li>
            Troubleshoot and debug (front-end or back-end) any cross-browser compatibility issues.
          </li>
          <li>Ongoing site maintenance and updates.</li>
          <li>
            Advised on best practices and current trends, and came up with creative solutions to
            development problems or obstacles.
          </li>
        </JobList>
      </JobSection>
      <JobSection>
        <Subtitle>Software Developer</Subtitle>
        <Description>University of Toronto&nbsp;|&nbsp;June 2010 - August 2010</Description>
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
    </div>
    <ContentSection>
      <SectionTitle>Education</SectionTitle>
      <Subtitle>
        University of Toronto, Hons. Bachelor of Science in Computer Science (2011)
      </Subtitle>
      <JobList>
        <li>Worked as a Help Desk Advisor (2010-2011) for the Computing Services Department</li>
        <li>Teaching Assistant for 40 first-year Computer Science students</li>
      </JobList>
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
      <SectionTitle>Interests</SectionTitle>
      <JobList>
        <li>Hands-on DIY projects</li>
        <li>Watching documentaries</li>
        <li>Antiquing</li>
      </JobList>
    </ContentSection>
  </section>
);

export default ResumeContent;
