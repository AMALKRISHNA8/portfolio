'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import projects, { Project } from '@/components/projectsData';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animate in on mount
    const timer = setTimeout(() => setIsLoaded(true), 100);

    // Check if URL has a hash and scroll/open that project
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const project = projects.find((p) => p.id === hash);
      if (project) {
        setTimeout(() => setSelectedProject(project), 600);
      }
    }

    return () => clearTimeout(timer);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Get unique badge types for filtering
  const categories = [
    { key: 'all', label: 'All Projects', icon: 'fas fa-layer-group' },
    { key: 'featured', label: 'Featured', icon: 'fas fa-star' },
    { key: 'security', label: 'Security', icon: 'fas fa-shield-alt' },
    { key: 'tools', label: 'Tools', icon: 'fas fa-wrench' },
    { key: 'events', label: 'Events & Other', icon: 'fas fa-calendar' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.featured;
    if (filter === 'security')
      return (
        p.badgeClass.includes('pqc') ||
        p.badgeClass.includes('web') ||
        p.badgeClass.includes('network') ||
        p.badgeClass.includes('ethical') ||
        p.badgeClass.includes('malware')
      );
    if (filter === 'tools')
      return (
        p.badgeClass.includes('repo') ||
        p.badgeClass.includes('crypto') ||
        p.badgeClass.includes('site')
      );
    if (filter === 'events') return p.badgeClass.includes('event');
    return true;
  });

  const floatClasses = ['float-slow', 'float-medium', 'float-fast'];
  const delayClasses = ['', 'delay-1', 'delay-2', 'delay-3', 'delay-4'];

  return (
    <>
      {/* Starfield-like background for the projects page */}
      <div className="projects-page-bg" aria-hidden="true">
        <div className="projects-page-stars"></div>
      </div>

      <div className="projects-page">
        {/* Navigation Header */}
        <header className="projects-page-header">
          <div className="container">
            <div className="projects-header-inner">
              <Link href="/" className="back-home-link">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Home</span>
              </Link>
              <div className="projects-header-title-area">
                <span className="section-tag">
                  <i className="fas fa-rocket"></i> Mission Archives
                </span>
                <h1 className="projects-page-title">
                  All <span className="glow-text">Projects & Systems</span>
                </h1>
                <p className="projects-page-subtitle">
                  Explore all {projects.length} artifacts from my cybersecurity
                  & development journey
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          <div className="container">
            <div className="filter-chips">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`filter-chip ${filter === cat.key ? 'active' : ''}`}
                  onClick={() => setFilter(cat.key)}
                >
                  <i className={cat.icon}></i>
                  {cat.label}
                  {cat.key === 'all' && (
                    <span className="chip-count">{projects.length}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <main className="projects-page-content">
          <div className="container">
            <div className="projects-full-grid">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  id={project.id}
                  className={`glass-card project-zero-g-card project-clickable ${
                    floatClasses[index % 3]
                  } ${delayClasses[index % 5]} ${isLoaded ? 'proj-visible' : 'proj-hidden'}`}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedProject(project);
                    }
                  }}
                >
                  {project.featured && (
                    <div className="featured-star-badge">
                      <i className="fas fa-star"></i>
                    </div>
                  )}
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
                      <i className="fas fa-expand-alt"></i> View Details
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="no-projects-found">
                <i className="fas fa-satellite-dish"></i>
                <p>No projects found in this category.</p>
                <button
                  className="btn-cream"
                  onClick={() => setFilter('all')}
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </main>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="project-modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="modal-header">
                <div className={`modal-icon-box ${selectedProject.iconClass}`}>
                  <i className={selectedProject.icon}></i>
                </div>
                <div className="modal-header-text">
                  <span
                    className={`proj-badge ${selectedProject.badgeClass}`}
                  >
                    {selectedProject.badge}
                  </span>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="modal-body">
                <div className="modal-description">
                  <h3>
                    <i className="fas fa-info-circle"></i> Overview
                  </h3>
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div className="modal-highlights">
                  <h3>
                    <i className="fas fa-bolt"></i> Key Highlights
                  </h3>
                  <ul>
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i}>
                        <i className="fas fa-check-circle"></i>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech-stack">
                  <h3>
                    <i className="fas fa-code"></i> Tech Stack
                  </h3>
                  <div className="proj-tags">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cream"
                >
                  <i className="fab fa-github"></i> View Repository
                </a>
                <button
                  className="btn-outline-cream"
                  onClick={() => setSelectedProject(null)}
                >
                  <i className="fas fa-arrow-left"></i> Back to Projects
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="projects-page-footer">
          <div className="container">
            <div className="footer-inner">
              <Link href="/" className="back-home-link">
                <i className="fas fa-arrow-left"></i>
                <span>Back to Portfolio</span>
              </Link>
              <span className="footer-credit">
                Amal Krishna A.K © {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
