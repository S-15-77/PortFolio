import './Home.css'
import { TypeAnimation } from 'react-type-animation';
function Home() {
  return (
    <div className="hero">
      
      <div className="hero-content">
        <div className="left">
          <h1>
            {/* <span>I AM</span> <br /> */}
            <span>SANTHOSH DAYAKAR</span>
          </h1>
          <p>I’m a Co-Op student at Concordia University pursuing a Master’s in Applied Computer Science.
Passionate about building scalable, data-driven solutions that solve real-world problems.
Experienced in machine learning, cloud-native systems, and full-stack development.
I’ve led impactful projects across AI, automation, and interactive web platforms.</p>
        </div>
        <div className="right">
          <h1>
            <span className='iam'>I AM </span><br />
            <TypeAnimation 
            sequence={[
              'AI Engineer',2000,
              'Full Stack Developer',2000,
              'ML Developer',2000,
              'Data Scientist',2000,
              'Web Developer',2000,
              'Software Developer',2000,
            ]} wrapper='span' speed={50} repeat={Infinity} className='role'/>
          </h1>
            <p className="city">BASED IN MONTREAL</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
