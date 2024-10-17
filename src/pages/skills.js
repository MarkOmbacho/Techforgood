import React, { useEffect, useState } from 'react';

const Jobs = () => {
  const [projects, setProjects] = useState([]);
  const [linkedInProfile, setLinkedInProfile] = useState(null);

  useEffect(() => {
    // Fetch LinkedIn profile data and community projects (mock data for this example)
    const fetchLinkedInProfile = async () => {
      // Mock LinkedIn profile data
      const profile = {
        name: "John Doe",
        headline: "Software Engineer | Tech Enthusiast",
        picture: "../public/23443482.jpg",
        projectsInterestedIn: ["Environmental", "Education", "Health"]
      };
      setLinkedInProfile(profile);
    };

    const fetchProjects = async () => {
      // Mock data for community projects
      const projectData = [
        {
          id: 1,
          title: "Clean Water Initiative",
          description: "Help develop water filtration solutions for rural areas.",
          category: "Environmental",
          location: "Remote"
        },
        {
          id: 2,
          title: "Education for All",
          description: "Provide mentorship and create resources for underserved schools.",
          category: "Education",
          location: "Remote"
        },
        {
          id: 3,
          title: "Health for All",
          description: "Collaborate with healthcare professionals to develop solutions.",
          category: "Health",
          location: "In-Person"
        }
      ];
      setProjects(projectData);
    };

    fetchLinkedInProfile();
    fetchProjects();
  }, []);

  return (
    <div className="jobs-page">
      <header className="jobs-header">
        <h1>TechforGood Community Projects</h1>
        <p1>Find and join community projects that align with your skills and passions, based on your LinkedIn profile.</p1>
      </header>

      {linkedInProfile && (
        <div className="profile-section">
          <img src={linkedInProfile.picture} alt={linkedInProfile.name} className="profile-picture" />
          <div className="profile-details">
            <h2>{linkedInProfile.name}</h2>
            <p>{linkedInProfile.headline}</p>
            <p><strong>Interested in:</strong> {linkedInProfile.projectsInterestedIn.join(", ")}</p>
          </div>
        </div>
      )}

      <section className="project-list">
        <h2>Recommended Projects</h2>
        <ul>
          {projects.map(project => (
            <li key={project.id} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Category:</strong> {project.category}</p>
              <p><strong>Location:</strong> {project.location}</p>
              <button className="apply-button">Apply Now</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Jobs;
