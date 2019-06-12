import React from 'react';

const myName = () => 'Magali Bautista-Lee';
const myPhone = () => '9057821272';
const myAddress = () => '26 Trowell Lane, Ajax ON, L1Z1K4';
const myPosition = () => 'Web Developer';

const myResume = () => (
  <div className="resume-container">
    <header className="resume-header">
      {myName()}
      <br />
      {myPosition()}
    </header>
    <section className="info-sidebar">
      <div>
        Home:
        {' '}
        {myPhone()}
        {' '}
        <br />
        Mobile:
        {' '}
        {myPhone()}
        {' '}
        <br />
        {myAddress()}
      </div>
    </section>
  </div>
);

export default myResume;
