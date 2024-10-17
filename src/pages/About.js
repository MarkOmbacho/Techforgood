import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About TechforGood</h1>
        <p1>Empowering communities through technology-driven solutions.</p1>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At <strong>TechforGood</strong>, we believe in the transformative power of technology to bring about social change. Our mission is to connect 
          individuals, communities, and organizations with innovative tech solutions that address pressing social, environmental, and economic issues.
        </p>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Inclusivity</h3>
            <p>
              We work to ensure that our platforms and projects are accessible to everyone, regardless of their background, ability, or location. 
              Tech should empower, not exclude.
            </p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>
              Using cutting-edge technologies, including AI, data analytics, and machine learning, we create solutions that address real-world problems 
              and bring long-lasting impact to communities.
            </p>
          </div>
          <div className="value-item">
            <h3>Collaboration</h3>
            <p>
              We collaborate with local communities, non-profits, and private sector organizations to create scalable, sustainable projects that have a 
              measurable positive impact.
            </p>
          </div>
          <div className="value-item">
            <h3>Sustainability</h3>
            <p>
              Our solutions prioritize environmental sustainability, ensuring that we use technology responsibly and in a way that benefits future 
              generations.
            </p>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <h2>Our Approach</h2>
        <p>
          We work at the intersection of technology and social good by harnessing the skills of technologists, data scientists, and community leaders. 
          Our initiatives range from data-driven environmental projects to digital platforms that support education and social justice. By integrating 
          tools like the <strong>Tabiya API</strong> and <strong>Compass AI</strong>, we ensure our solutions are data-informed, scalable, and tailored 
          to the communities we serve.
        </p>
      </section>

      <section className="community-projects">
        <h2>Community Projects</h2>
        <p>
          We are proud to support community-driven projects that address local needs. From helping underrepresented communities access 
          critical resources to developing education tools for remote learners, we believe in tech’s ability to create a fairer world for everyone.
        </p>
        <div className="projects-list">
          <div className="project-item">
            <h3>Green Tech for Sustainable Farming</h3>
            <p>
              Partnering with rural farmers to develop smart farming solutions that use AI and IoT to improve crop yields and sustainability.
            </p>
          </div>
          <div className="project-item">
            <h3>Empowering Women in Tech</h3>
            <p>
              A global initiative aimed at providing women in underserved communities with the skills and tools they need to succeed in technology 
              sectors.
            </p>
          </div>
          <div className="project-item">
            <h3>Education for All</h3>
            <p>
              Utilizing online learning platforms and AI tutors to bring quality education to children in remote and disadvantaged areas.
            </p>
          </div>
        </div>
      </section>

      <section className="join-us-section">
        <h2>Join Us</h2>
        <p>
          Want to get involved? Whether you're a tech expert, an NGO, or a community leader, we’d love to collaborate with you. 
          Join us in creating technology solutions that make a real difference.
        </p>
        <a href="/contact" className="join-us-button">Get in Touch</a>
      </section>

    </div>
  );
};

export default About;
