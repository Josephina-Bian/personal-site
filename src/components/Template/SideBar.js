import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/photo.jpg`} alt="" />
      </Link>
      <header>
        <h2>Josephina Zhenni Bian</h2>
        <p><a href="mailto:zhennibi@usc.edu">zhennibi@usc.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Josephina Zhenni Bian. I am a goal-oriented and self-motivated problem solver
        with expertise in data querying and modeling, statistical analysis and data visualization.
        I am a M.S. student studying Communication Data Science at <a href="https://usc-csm.symplicity.com/students/psx/profile">USC</a>.
        I possess strong proficiency in SQL, Python, R and Tableau. I am looking forward to
        leveraging data-driven insights to help business stay competitive and
        effective in marketing.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Josephina Zhenni Bian <Link to="/">josephina-bian.github.io/personal-site/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
