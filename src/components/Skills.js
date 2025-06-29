import './Skills.css';
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiR, SiMysql,
  SiDart, SiErlang, SiReact, SiNodedotjs, SiFastapi, SiFlutter, SiFirebase,
  SiSelenium, SiLinux, SiGithubactions, SiGooglecloud,
  SiDocker, SiKubernetes, SiTensorflow, SiPytorch, SiScikitlearn,
  SiPandas, SiNumpy, SiOpencv, SiHuggingface
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from 'react-icons/fa';
import { FaAws } from "react-icons/fa6";
import { SiApacheairflow } from 'react-icons/si';
import { VscAzure,VscTerminalBash } from "react-icons/vsc";

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
          <TbBrandCSharp />
          <SiR />
          <SiMysql />
          <VscTerminalBash />
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

      <div className="skill-category">
        <h3>Cloud & Big Data</h3>
        <div className="skill-icons">
          <FaAws />
          <VscAzure />
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
