import './Certificates.css';

import certificates from '../data/certificates.json';


function Certificates() {
  return (
    <section className="certificates-section">
  <h1>Certificates</h1>
      <div className="certificates-list">
        {certificates.map((cert, idx) => (
          <a className="certificate-card" href={cert.link} target="_blank" rel="noopener noreferrer" key={idx}>
            {cert.img && (
              <img
                className="certificate-logo"
                src={require(`../assets/${cert.img}`)}
                alt={cert.issuer + ' logo'}
              />
            )}
            <div className="certificate-title">{cert.title}</div>
            <div className="certificate-issuer">{cert.issuer}</div>
            <div className="certificate-date">{cert.date}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
