import './Skills.css';
import { useState } from 'react';
import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiR, SiMysql,
  SiDart, SiErlang, SiReact, SiNodedotjs, SiFastapi, SiFlutter, SiFirebase,
  SiSelenium, SiLinux, SiGithubactions, SiGooglecloud,
  SiDocker, SiKubernetes, SiTensorflow, SiPytorch, SiScikitlearn,
  SiPandas, SiNumpy, SiOpencv, SiHuggingface, SiApacheairflow
} from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { FaJava } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa6';
import { VscAzure, VscTerminalBash } from "react-icons/vsc";

const skillData = [
  { title: "Python", icon: <SiPython />, category: "Languages" },
  { title: "JavaScript", icon: <SiJavascript />, category: "Languages" },
  { title: "TypeScript", icon: <SiTypescript />, category: "Languages" },
  { title: "Java", icon: <FaJava />, category: "Languages" },
  { title: "C++", icon: <SiCplusplus />, category: "Languages" },
  { title: "C#", icon: <TbBrandCSharp />, category: "Languages" },
  { title: "R", icon: <SiR />, category: "Languages" },
  { title: "MySQL", icon: <SiMysql />, category: "Languages" },
  { title: "Bash", icon: <VscTerminalBash />, category: "Languages" },
  { title: "Dart", icon: <SiDart />, category: "Languages" },
  { title: "Erlang", icon: <SiErlang />, category: "Languages" },

  { title: "React", icon: <SiReact />, category: "Frameworks" },
  { title: "Node.js", icon: <SiNodedotjs />, category: "Frameworks" },
  { title: "FastAPI", icon: <SiFastapi />, category: "Frameworks" },
  { title: "Flutter", icon: <SiFlutter />, category: "Frameworks" },
  { title: "Firebase", icon: <SiFirebase />, category: "Frameworks" },
  { title: "Selenium", icon: <SiSelenium />, category: "Frameworks" },
  { title: "Linux", icon: <SiLinux />, category: "Frameworks" },
  { title: "GitHub Actions", icon: <SiGithubactions />, category: "Frameworks" },


  { title: "AWS", icon: <FaAws />, category: "Cloud" },
  { title: "Azure", icon: <VscAzure />, category: "Cloud" },
  { title: "Google Cloud", icon: <SiGooglecloud />, category: "Cloud" },
  { title: "IBM watsonx", icon: <span role="img" aria-label="watsonx">☁️</span>, category: "Cloud" },
  { title: "IBM Watson", icon: <span role="img" aria-label="watson">☁️</span>, category: "Cloud" },
  { title: "Docker", icon: <SiDocker />, category: "Cloud" },
  { title: "Kubernetes", icon: <SiKubernetes />, category: "Cloud" },
  { title: "Apache Airflow", icon: <SiApacheairflow />, category: "Cloud" },

  { title: "TensorFlow", icon: <SiTensorflow />, category: "ML" },
  { title: "PyTorch", icon: <SiPytorch />, category: "ML" },
  { title: "Scikit-Learn", icon: <SiScikitlearn />, category: "ML" },
  { title: "Pandas", icon: <SiPandas />, category: "ML" },
  { title: "NumPy", icon: <SiNumpy />, category: "ML" },
  { title: "OpenCV", icon: <SiOpencv />, category: "ML" },
  { title: "Hugging Face", icon: <SiHuggingface />, category: "ML" }
];

const tabs = ['All', 'Languages', 'Frameworks', 'Cloud', 'ML'];

function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All'
    ? skillData
    : skillData.filter(skill => skill.category === activeTab);

  return (
    <section className="skills-section">
      <h2>Skills</h2>

      <div className="skill-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-title">{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
