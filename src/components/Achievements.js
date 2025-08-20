import './Achievements.css';
import achievements from '../data/achievements.json';

function Achievements() {
  return (
    <section className="achievements-section">
      <h1>Achievements</h1>
      <div className="achievements-list">
        {achievements.map((ach, idx) => (
          <div className="achievement-card" key={idx}>
            <div className="achievement-title">{ach.title}</div>
            <div className="achievement-event">{ach.event} ({ach.year})</div>
            <div className="achievement-desc">{ach.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
