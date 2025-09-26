import './About.css';

import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Achievements from '../components/Achievements';

function About() {
  return (
    <div className="about-page">
      <Timeline />
      <Skills/>
      {/* <Certificates /> */}
      {/* <Achievements /> */}
    </div>
  );
}

export default About;
