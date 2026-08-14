export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  iconClass: string;
  badge: string;
  badgeClass: string;
  tags: string[];
  github: string;
  featured: boolean;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 'pqc-system',
    title: 'Post-Quantum Secure Communication System',
    description:
      'A secure communication system combining CRYSTALS-Kyber (post-quantum key encapsulation mechanism) with AES-256-GCM symmetric encryption for quantum-resistant data protection.',
    longDescription:
      'This research project implements a hybrid cryptographic system designed to withstand attacks from both classical and quantum computers. The system uses CRYSTALS-Kyber for key encapsulation — a lattice-based algorithm selected by NIST for post-quantum standardization — combined with AES-256-GCM for authenticated symmetric encryption. Messages are encrypted using a session key derived from the Kyber KEM, ensuring forward secrecy and quantum resistance.',
    icon: 'fas fa-key',
    iconClass: '',
    badge: 'Post-Quantum Research',
    badgeClass: 'badge-pqc',
    tags: ['#Python', '#CRYSTALS-Kyber', '#AES-256-GCM', '#PQC'],
    github: 'https://github.com/amalkrishna8',
    featured: true,
    highlights: [
      'NIST-approved CRYSTALS-Kyber KEM implementation',
      'AES-256-GCM authenticated encryption',
      'Hybrid classical + quantum-resistant architecture',
      'Forward secrecy via ephemeral session keys',
    ],
  },
  {
    id: 'cybersec-basics',
    title: 'Cybersecurity Basics Repository',
    description:
      'Curated collection of Python-based cybersecurity fundamentals, network analysis scripts, hashing utilities, and security automation snippets.',
    longDescription:
      'A comprehensive educational repository containing over 30 Python scripts covering fundamental cybersecurity concepts. Includes network packet analysis tools using Scapy, password hashing demonstrations with bcrypt and Argon2, port scanning utilities, basic firewall rule generators, and SSL/TLS certificate analyzers. Designed as a learning resource for cybersecurity students.',
    icon: 'fas fa-terminal',
    iconClass: 'emerald-icon',
    badge: 'GitHub Collection',
    badgeClass: 'badge-repo',
    tags: ['#Python', '#Networking', '#Security Fundamentals', '#OpenSource'],
    github: 'https://github.com/amalkrishna8',
    featured: true,
    highlights: [
      '30+ Python security scripts',
      'Network packet analysis with Scapy',
      'Password hashing (bcrypt, Argon2)',
      'Port scanning & SSL/TLS analysis',
    ],
  },
  {
    id: 'cybersec-mini',
    title: 'Cybersecurity Mini-Project',
    description:
      'Local web application with secure login & registration system built to demonstrate authentication best practices, password hashing, and input sanitization.',
    longDescription:
      'A full-stack web application demonstrating secure authentication patterns. Features include bcrypt password hashing, parameterized SQL queries to prevent injection attacks, CSRF token validation, rate limiting on login attempts, secure session management with HTTP-only cookies, and comprehensive input sanitization. Built as a reference implementation for web security best practices.',
    icon: 'fas fa-user-lock',
    iconClass: 'purple-icon',
    badge: 'Web App Security',
    badgeClass: 'badge-web',
    tags: ['#Node.js', '#SQL', '#Authentication', '#Web Security'],
    github: 'https://github.com/amalkrishna8',
    featured: true,
    highlights: [
      'Bcrypt password hashing',
      'SQL injection prevention',
      'CSRF protection & rate limiting',
      'Secure session management',
    ],
  },
  {
    id: 'red-vs-blue',
    title: 'RED vs BLUE – Cyber Battle 2025',
    description:
      'Coordinated and helped run a flagship tech-fest cybersecurity attack/defense competition; managed CTF challenge flags, scoring environment, and battle logistics.',
    longDescription:
      'Led the organization of a large-scale cybersecurity competition at SJCET Tech Fest featuring Red Team vs Blue Team attack/defense scenarios. Responsibilities included designing CTF challenges across web exploitation, reverse engineering, cryptography, and forensics categories. Built the scoring infrastructure, managed flag validation systems, and coordinated logistics for 50+ participants across multiple rounds.',
    icon: 'fas fa-trophy',
    iconClass: 'amber-icon',
    badge: 'Event Lead',
    badgeClass: 'badge-event',
    tags: ['#CTF', '#AttackAndDefense', '#EventCoordination', '#SJCET'],
    github: 'https://github.com/amalkrishna8',
    featured: false,
    highlights: [
      'CTF challenge design across 4 categories',
      'Scoring infrastructure & flag validation',
      '50+ participants managed',
      'Red Team / Blue Team scenarios',
    ],
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio Website',
    description:
      'Personal portfolio website built with zero-gravity space aesthetics, canvas starfield background, mouse-parallax drift, and floating project cards.',
    longDescription:
      'A meticulously crafted portfolio website featuring a space-themed editorial design. Built with Next.js, React, and TypeScript, it includes a dynamic HTML5 Canvas starfield background, smooth scroll animations, glassmorphism card effects, floating zero-gravity project cards, and a custom dragon cursor animation. Fully responsive with dark/light theme switching.',
    icon: 'fas fa-globe',
    iconClass: 'cyan-icon',
    badge: 'Personal Portfolio',
    badgeClass: 'badge-site',
    tags: ['#Next.js', '#React', '#TypeScript', '#Canvas'],
    github: 'https://github.com/amalkrishna8',
    featured: false,
    highlights: [
      'HTML5 Canvas starfield animation',
      'Glassmorphism & zero-gravity effects',
      'Dark/Light theme switching',
      'Custom dragon cursor animation',
    ],
  },
  {
    id: 'network-scanner',
    title: 'Advanced Network Scanner',
    description:
      'A multi-threaded network reconnaissance tool with service detection, OS fingerprinting, and vulnerability assessment capabilities.',
    longDescription:
      'An advanced network scanning tool built in Python that performs comprehensive network reconnaissance. Features include multi-threaded port scanning for speed, service version detection using banner grabbing, basic OS fingerprinting via TCP/IP stack analysis, and integration with CVE databases for known vulnerability identification. Outputs detailed reports in JSON and HTML formats.',
    icon: 'fas fa-network-wired',
    iconClass: 'teal-icon',
    badge: 'Network Security',
    badgeClass: 'badge-network',
    tags: ['#Python', '#Scapy', '#Threading', '#CVE'],
    github: 'https://github.com/amalkrishna8',
    featured: false,
    highlights: [
      'Multi-threaded port scanning',
      'Service version detection',
      'OS fingerprinting via TCP/IP analysis',
      'CVE database integration',
    ],
  },
  {
    id: 'password-manager',
    title: 'Encrypted Password Vault',
    description:
      'A locally-hosted password manager with AES-256 encryption, master key derivation using Argon2, and a CLI-based interface for secure credential management.',
    longDescription:
      'A command-line password management tool that stores credentials in an AES-256 encrypted local vault. Uses Argon2id for master password key derivation with configurable memory and iteration parameters. Features include password generation with customizable complexity rules, clipboard integration with auto-clear, encrypted backup/restore, and import/export in standard formats.',
    icon: 'fas fa-lock',
    iconClass: 'rose-icon',
    badge: 'Cryptography Tool',
    badgeClass: 'badge-crypto',
    tags: ['#Python', '#AES-256', '#Argon2', '#CLI'],
    github: 'https://github.com/amalkrishna8',
    featured: false,
    highlights: [
      'AES-256 encrypted vault storage',
      'Argon2id key derivation',
      'Auto-clear clipboard security',
      'Encrypted backup & restore',
    ],
  },
  {
    id: 'malware-analyzer',
    title: 'Static Malware Analysis Toolkit',
    description:
      'A Python-based toolkit for static analysis of PE files, extracting metadata, suspicious strings, imported APIs, and entropy analysis for malware detection.',
    longDescription:
      'A comprehensive static malware analysis toolkit that examines Portable Executable (PE) files without execution. Extracts PE headers, sections, and imported DLLs/APIs to identify suspicious behavior patterns. Performs entropy analysis to detect packed or encrypted sections, extracts embedded strings for IOC identification, and generates YARA rules for signature-based detection.',
    icon: 'fas fa-bug',
    iconClass: 'red-icon',
    badge: 'Malware Analysis',
    badgeClass: 'badge-malware',
    tags: ['#Python', '#PE Analysis', '#YARA', '#Forensics'],
    github: 'https://github.com/amalkrishna8',
    featured: false,
    highlights: [
      'PE header & section analysis',
      'Entropy-based packing detection',
      'IOC string extraction',
      'YARA rule generation',
    ],
  },
  {
    id: 'wifi-deauth',
    title: 'WiFi Security Auditor',
    description:
      'An ethical WiFi security testing tool for deauthentication attacks, handshake capture, and WPA/WPA2 vulnerability assessment in controlled environments.',
    longDescription:
      'An ethical hacking tool designed for authorized WiFi security assessments. Implements deauthentication frame injection for testing network resilience, WPA/WPA2 handshake capture and analysis, and dictionary/brute-force attack simulations. Includes a monitoring mode interface, channel hopping, and detailed logging. Built for educational purposes and authorized penetration testing only.',
    icon: 'fas fa-wifi',
    iconClass: 'blue-icon',
    badge: 'Ethical Hacking',
    badgeClass: 'badge-ethical',
    tags: ['#Python', '#Scapy', '#WiFi Security', '#Pentesting'],
    github: 'https://github.com/amalkrishna8',
    featured: false,
    highlights: [
      'Deauth frame injection testing',
      'WPA/WPA2 handshake capture',
      'Dictionary attack simulation',
      'Channel hopping & monitoring',
    ],
  },
];

export default projects;
