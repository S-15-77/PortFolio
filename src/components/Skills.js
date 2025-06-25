import './Skills.css';
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiCsharp, SiR, SiMysql,
  SiBash, SiDart, SiErlang, SiReact, SiNodedotjs, SiFastapi, SiFlutter, SiFirebase,
  SiSelenium, SiLinux, SiGithubactions, SiAmazonaws, SiGooglecloud, SiMicrosoftazure,
  SiDocker, SiKubernetes, SiTensorflow, SiPytorch, SiScikitlearn,
  SiPandas, SiNumpy, SiOpencv, SiHuggingface
} from 'react-icons/si';

import { FaJava,FaBash } from 'react-icons/fa';
import { SiApacheairflow } from 'react-icons/si';

function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>

      {/* 🔤 LANGUAGES */}
      <div className="skill-category">
        <h3>Languages</h3>
        <div className="skill-icons">
          <SiPython />
          <SiJavascript />
          <SiTypescript />
          <FaJava />
          <SiCplusplus />
          {/* <SiCsharp /> */}
          <SiR />
          <SiMysql />
          {/* <SiBash /> */}
          <SiDart />
          <SiErlang />
        </div>
      </div>

      {/* 🧰 FRAMEWORKS & TOOLS */}
      <div className="skill-category">
        <h3>Frameworks & Tools</h3>
        <div className="skill-icons">
          <SiReact />
          <SiNodedotjs />
          <SiFastapi />
          <SiFlutter />
          <SiFirebase />
          <SiSelenium />
          <SiLinux />
          <SiGithubactions />
        </div>
      </div>

      {/* ☁️ CLOUD & BIG DATA */}
      <div className="skill-category">
        <h3>Cloud & Big Data</h3>
        <div className="skill-icons">
          {/* <SiAmazonaws /> */}
          <SiMicrosoftazure />
          <SiGooglecloud />
          <SiDocker />
          <SiKubernetes />
          <SiApacheairflow />
        </div>
      </div>

      {/* 🧠 ML & LIBRARIES */}
      <div className="skill-category">
        <h3>ML & Libraries</h3>
        <div className="skill-icons">
          <SiTensorflow />
          <SiPytorch />
          <SiScikitlearn />
          <SiPandas />
          <SiNumpy />
          <SiOpencv />
          <SiHuggingface />
        </div>
      </div>
    </section>
  );
}

export default Skills;
