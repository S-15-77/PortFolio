import education from '../data/education.json';
import experience from '../data/experience.json';
import '../components/Timeline.css';

function Timeline() {
  const combinedTimeline = [
    ...education.map(item => ({ ...item, type: 'education' })),
    ...experience.map(item => ({ ...item, type: 'work' }))
  ].sort((a, b) => a.year_start - b.year_start);

  return (
    <section className="timeline-container">
      <h2 className="timeline-title">Journey</h2>
      <div className="timeline">
        {combinedTimeline.map((item, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <span className="tag">{item.year_start} - {item.year_end}</span>
              <h3>{item.type === 'education' ? item.degree : item.role}</h3>
              <p className="inst">{item.institution || item.company}</p>
              <p className="loc">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
