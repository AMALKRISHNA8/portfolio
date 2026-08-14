import Link from 'next/link';
import projects from './projectsData';

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">
            <i className="fas fa-rocket"></i> Zero-G Artifacts
          </span>
          <h2 className="section-title">
            Featured <span className="glow-text">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            Hover over cards to stabilize their orbit in space
          </p>
        </div>

        <div className="projects-zero-g-grid">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects#${project.id}`}
              className={`glass-card project-zero-g-card float-${
                index === 0 ? 'slow' : index === 1 ? 'medium' : 'fast'
              }${index > 0 ? ` delay-${index}` : ''} project-clickable`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="project-top">
                <div className={`project-icon-box ${project.iconClass}`}>
                  <i className={project.icon}></i>
                </div>
                <span className={`proj-badge ${project.badgeClass}`}>
                  {project.badge}
                </span>
              </div>
              <h3 className="proj-title">{project.title}</h3>
              <p className="proj-desc">{project.description}</p>
              <div className="proj-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="proj-footer">
                <span className="proj-link">
                  <i className="fas fa-arrow-right"></i> View Details
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="projects-cta-wrapper">
          <Link href="/projects" className="btn-view-all-projects">
            <span className="btn-view-all-text">
              <i className="fas fa-th-large"></i> View All Projects
            </span>
            <span className="btn-view-all-count">{projects.length} Projects</span>
            <i className="fas fa-arrow-right btn-view-all-arrow"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
