import { missionPoints } from "../../data.js";
import { journeyItems } from "../../data.js";
import { team } from "../../data.js";

const About = () => {
  return (
    <div>
      <section className="hero">
        <div className="container hero-inner">
          <h1>Empowering the Modern Enterprise</h1>
          <p>
            We build tools that dissolve friction, accelerate workflows, and
            unlock human potential in professional environments.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Our Mission</button>
            <button className="btn-secondary">Join the Team</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mission-box">
            <div className="mission-left">
              <h2 className="mission-title">The Mission</h2>
              <p className="mission-copy">
                At BrandStream, our mission is to eliminate the operational
                friction that slows down brilliant teams, simplify complex
                workflows, and create better outcomes for people and businesses
                alike.
              </p>

              <img
                className="mission-image"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Business team in meeting"
              />
            </div>
            <div className="mission-points">
              {missionPoints.map((item) => (
                <div className="point" key={item.title}>
                  <div className="point-top">
                    <span className="point-icon">{item.icon}</span>
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="journey-wrap">
            <div className="container">
              <div className="journey-box">
                <div>
                  <h2 className="journey-header">Our Journey</h2>

                  <ul className="timeline">
                    {journeyItems.map((item) => (
                      <li key={item.year}>
                        <span className="tag">{item.year}</span>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  className="journey-image"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="Office team collaborating"
                />
              </div>
            </div>
          </section>

             <section className="team-section">
            <div className="container">
              <div className="team-header">
                <h2>Leadership Team</h2>
                <p>The minds behind the platform.</p>
              </div>

              <div className="team-grid">
                {team.map((member) => (
                  <div className="member-card" key={member.name}>
                    <img src={member.image} alt={member.name} />
                    <div className="member-meta">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
    </div>
  );
};

export default About;
