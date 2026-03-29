export type Lang = 'en' | 'ar'

export const translations = {
  en: {
    // Preloader
    preloader: {
      brand: 'REDLAYER',
      initializing: 'INITIALIZING SYSTEM',
      ready: 'READY',
    },
    // Navbar
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      email: 'E-mail',
      socialMedia: 'Social Media',
    },
    // Hero
    hero: {
      subtitle: 'Where security meets innovation, defense begins.',
      brand: 'RedLayer - AlHussein AlSahati',
      brandFull: 'RedLayer - AlHussein AlSahati',
      text: 'Transforming cybersecurity with advanced AI-driven solutions. Building the future of digital defense.',
      nameAr: 'الحسين السحاتي',
      nameEn: 'AlHussein Alsahati',
      scroll: 'Scroll',
    },
    // Parallax
    parallax: {
      cybersecurity: 'Cybersecurity',
      ai: 'Artificial Intelligence',
      neuralNetworks: 'Neural Networks',
      threatDetection: 'Threat Detection',
      penTesting: 'Penetration Testing',
      cryptoSecurity: 'Cryptographic Security',
      machineLearning: 'Machine Learning',
    },
    // About
    about: {
      subtitle: 'Digital defender, AI pioneer',
      title: 'About',
      tagline1: 'Passionate about digital security',
      tagline2: 'Building AI-driven defense systems',
      tagline3: 'From research to real-world protection',
      bio: `I am AlHussein Alsahati, an academic researcher and cybersecurity engineer with a deep passion for artificial intelligence and its applications in security. As the founder of RedLayer.ly, I lead a team dedicated to providing cutting-edge security solutions and AI-driven innovations.

My work bridges the gap between theoretical research and practical applications, helping organizations protect their digital assets while leveraging the power of AI to stay ahead of evolving threats. With expertise spanning from penetration testing to machine learning, I bring a comprehensive approach to modern cybersecurity challenges.

Currently focused on developing advanced cryptographic algorithms and AI-powered threat detection systems that push the boundaries of what's possible in digital defense.`,
    },
    // Services
    services: {
      subtitle: 'Security Solutions & AI Innovation',
      title: 'Services',
      text1: 'Comprehensive Security Solutions',
      text2: 'Powered by Artificial Intelligence',
      text3: 'and Cutting-Edge Technology',
      items: [
        {
          title: 'Security Consulting',
          description: 'Comprehensive security assessments and strategies to protect digital assets from evolving cyber threats. We analyze your infrastructure, identify vulnerabilities, and implement robust defense mechanisms tailored to your specific needs.',
          subItems: ['Vulnerability Assessment', 'Security Architecture Design', 'Incident Response Planning'],
        },
        {
          title: 'AI Solutions',
          description: 'Custom AI and machine learning solutions tailored to solve complex business problems and drive innovation. From predictive analytics to automated threat detection, we build intelligent systems that learn and adapt.',
          subItems: ['Machine Learning Models', 'Neural Network Design', 'AI System Integration'],
        },
        {
          title: 'Penetration Testing',
          description: 'Ethical hacking services to identify vulnerabilities and strengthen your security posture. Our team simulates real-world attacks to uncover weaknesses before malicious actors can exploit them.',
          subItems: ['Web Application Testing', 'Network Penetration', 'Social Engineering'],
        },
        {
          title: 'Security Training',
          description: 'Professional training programs to empower teams with cybersecurity knowledge and best practices. Build a security-first culture within your organization with hands-on, practical training sessions.',
          subItems: ['Security Awareness Programs', 'Advanced Technical Training', 'Certification Preparation'],
        },
      ],
    },
    // Projects
    projects: {
      subtitle: 'Logic meets Security, Seamlessly',
      title: 'Projects',
      text: `Featured projects and academic research that have been meticulously crafted with passion to drive results and scientific impact.`,
      viewProject: 'View Project',
      allProjects: [
        { id: 'r1', name: 'V2X 6G RIS Mobility', category: 'Research', frameworks: ['6G Networks', 'MARL', 'RIS', 'PyTorch'] },
        { id: 'r2', name: 'Unified OSS Framework', category: 'Research', frameworks: ['Telecom OSS', 'Zero Trust', 'FCAPS', 'Python'] },
        { id: 'r3', name: 'URLLC V2X', category: 'Research', frameworks: ['Transformer', 'Edge Computing', 'V2X', 'MINLP'] },
        { id: 'r4', name: 'NetOps Guardian AI', category: 'Research', frameworks: ['NOC/SOC', 'Next.js', 'AI Agent', 'Zero Trust'] },
        { id: 'r5', name: 'CortexOps', category: 'Research', frameworks: ['AI Workflow', 'ReAct Pattern', 'Self-Healing', 'TypeScript'] },
        { id: '1', name: 'Faras Cipher Engine', category: 'Security', frameworks: ['Rust', 'Nim', 'Cryptography', 'Performance'] },
        { id: '2', name: 'AI-Powered Threat Detection', category: 'AI', frameworks: ['Python', 'TensorFlow', 'Cybersecurity', 'AI'] },
        { id: '3', name: 'SecureCloud Platform', category: 'Cloud', frameworks: ['Cloud Security', 'AWS', 'Zero Trust', 'DevSecOps'] },
        { id: '4', name: 'Neural Network Analyzer', category: 'AI', frameworks: ['Deep Learning', 'Network Analysis', 'Python'] },
        { id: '5', name: 'RedLayer Security Suite', category: 'Security', frameworks: ['Security Tools', 'Risk Assessment', 'Enterprise'] },
      ],
    },
    // Contact Summary
    contactSummary: {
      quote: `"Let's build a`,
      secure: 'secure',
      and: '&',
      intelligent: 'intelligent',
      digitalFuture: 'digital future',
      together: 'together',
      values: ['Innovation', 'Precision', 'Trust', 'Security', 'Excellence'],
      contactUs: 'contact us',
    },
    // Contact
    contact: {
      subtitle: 'You Dream It, We Secure It',
      title: 'Contact',
      text: `Got a question, project or security concern? We'd love to hear from you and discuss further!`,
      email: 'E-mail',
      phone: 'Phone',
      website: 'Website',
      socialMedia: 'Social Media',
      telegram: 'Telegram',
      marqueeItems: ['Drive.', 'Innovate.', 'Protect.'],
    },
    // Project Pages Common
    projectCommon: {
      viewOnGithub: 'View on GitHub',
      backToPortfolio: '← Back to Portfolio',
      abstract: 'Abstract',
      frameworkArchitecture: 'Framework Architecture',
      novelContributions: 'Novel Contributions',
      keyResults: 'Key Results',
      technologies: 'Technologies',
      overview: 'Overview',
      researchHighlights: 'Research Highlights',
      architectureHighlights: 'Architecture Highlights',
      coreCapabilities: 'Core Capabilities',
      theCortexBrain: 'The Cortex Brain',
      selfHealingResilience: 'Self-Healing Resilience',
      secureRuntimeEnvironment: 'Secure Runtime Environment',
      technicalInnovation: 'Technical Innovation',
      targetSectors: 'Target Sectors',
      whoIsFarasFor: 'Who is Faras for?',
      readyToSecure: 'Ready to Secure Your Future?',
      contactEnterprise: 'Contact for Enterprise',
      authors: 'Authors',
      author: 'Author',
      supervisor: 'Supervisor',
      researchLab: 'Research Lab',
      status: 'Status',
      version: 'Version',
      target: 'Target',
      license: 'License',
      allRightsReserved: 'All rights reserved.',
    },
    // V2X 6G RIS
    v2x6g: {
      badge: '6G Research • V2X Networks',
      title: 'AI Agent-Based Mobility Management with RIS for 6G V2X',
      desc: 'Reconfigurable Intelligent Surfaces meet Multi-Agent Reinforcement Learning',
      abstractText: `The convergence of sixth-generation (6G) wireless networks, vehicle-to-everything (V2X) communications, and Reconfigurable Intelligent Surfaces (RIS) presents unprecedented opportunities for revolutionizing mobility management in high-speed vehicular scenarios. This paper proposes a novel decentralized AI Agent framework that synergistically integrates Multi-Agent Reinforcement Learning (MARL) with predictive Transformer-based agents for dynamic optimization of RIS phase shifts and handover protocols in ultra-reliable low-latency communication (URLLC) scenarios.`,
      frameworkDesc: `Our framework comprises three specialized agents: a RIS Optimization Agent that dynamically adjusts phase shifts for coverage enhancement, a Handover Management Agent that makes proactive handover decisions based on trajectory prediction, and a Resource Allocation Agent that optimizes spectrum and power allocation. We formulate the joint optimization problem as a cooperative Markov Decision Process and employ QMIX and Multi-Agent Proximal Policy Optimization (MAPPO) algorithms for distributed decision-making.`,
      agents: [
        { title: 'RIS Optimization Agent', desc: 'Dynamically adjusts phase shifts for coverage enhancement using reinforcement learning.', icon: '📡' },
        { title: 'Handover Management Agent', desc: 'Makes proactive handover decisions based on Transformer-based trajectory prediction.', icon: '🔄' },
        { title: 'Resource Allocation Agent', desc: 'Optimizes spectrum and power allocation through MAPPO distributed decision-making.', icon: '⚡' },
      ],
      stats: [
        { value: '98.5%', label: 'Handover Success Rate', sub: 'at 500 km/h' },
        { value: '<1 ms', label: 'URLLC Latency', sub: '99.999% reliability' },
        { value: '+8.2 dB', label: 'SINR Improvement', sub: 'vs non-RIS baselines' },
        { value: '+41.3%', label: 'Throughput Gain', sub: 'vs traditional methods' },
      ],
      techTags: ['Python', 'PyTorch', 'MARL', 'MAPPO', 'QMIX', 'Gymnasium', 'PettingZoo', 'Transformer', '6G mmWave', 'RIS'],
    },
    // Unified OSS
    unifiedOss: {
      badge: 'Telecom • Network Management',
      title: 'Unified OSS Framework',
      desc: 'Multi-Vendor Network Element Management with Zero Trust Architecture',
      abstractText: `This repository contains the scientific architecture and implementation of the Unified OSS Framework, an advanced solution designed to address the critical challenges of vendor heterogeneity in modern telecommunications networks. The framework provides unified abstraction and management capabilities for diverse network management systems, prominently covering Ericsson ENM and Huawei U2000/U2020 environments. Through the implementation of a robust Vendor Abstraction Layer (VAL), the system ensures seamless integration across all five FCAPS functional areas (Fault, Configuration, Accounting, Performance, and Security).`,
      contributions: [
        { title: 'Vendor Abstraction Layer', desc: 'Seamless integration across Ericsson ENM and Huawei U2000/U2020 environments through a unified abstraction interface.', color: '#00f0ff' },
        { title: 'AI-Assisted Semantic Mapping', desc: 'Configuration translation engine using AI for automatic mapping between vendor-specific data models.', color: '#ff0055' },
        { title: 'Multi-Method Alarm Correlation', desc: 'Temporal, topological, and causal correlation techniques for accurate fault detection across multi-vendor infrastructure.', color: '#8b5cf6' },
        { title: 'Zero Trust Compliance', desc: 'First comprehensive OSS framework achieving continuous Zero Trust Architecture compliance per NIST SP 800-207 standards.', color: '#22c55e' },
      ],
      techTags: ['Python', 'PostgreSQL', 'TimescaleDB', 'Redis', 'Docker', 'YANG', 'REST APIs', 'Zero Trust', 'FCAPS', 'AI/ML'],
    },
    // URLLC V2X
    urlrcV2x: {
      badge: 'URLLC • Edge Computing',
      title: 'URLLC-V2X',
      desc: 'Joint Resource Allocation and Computation Offloading using Transformer-Based Learned Surrogate',
      abstractText: `Ultra-reliable low-latency communications (URLLC) in vehicular edge computing environments demands stringent end-to-end delay guarantees with reliability bounds exceeding conventional Shannon-theoretic limits. This research addresses the joint optimization of resource block allocation, transmit power control, and computation offloading decisions for vehicular URLLC users under finite blocklength information theory constraints. We consider a comprehensive vehicle-to-everything (V2X) architecture comprising both cellular user equipment (CUE) vehicles communicating with road-side units and vehicle-to-vehicle (V2V) pairs utilizing direct device-to-device links.`,
      highlights: [
        { title: 'Transformer-Based Learned Surrogate', desc: 'Approximation of optimal policies with sub-millisecond inference time, enabling real-time vehicular deployments.', color: '#ff0055' },
        { title: 'Finite Blocklength Analysis', desc: 'Optimization under short-packet information theory constraints for URLLC scenarios.', color: '#8b5cf6' },
        { title: 'NP-Hardness Proof', desc: 'Formal proof through polynomial-time reduction from 0-1 Knapsack problem characterizing computational complexity.', color: '#00f0ff' },
        { title: 'Queueing-Aware Allocation', desc: 'Integrated M/D/1 models with dimensionally consistent service rate definitions for deterministic packet sizes.', color: '#22c55e' },
      ],
      stats: [
        { value: '94.7%', label: 'Optimality Gap', sub: 'vs branch-and-bound optimal' },
        { value: '3 orders', label: 'Speed Improvement', sub: 'computation time reduction' },
        { value: '<1 ms', label: 'Inference Time', sub: 'sub-millisecond deployment' },
      ],
      techTags: ['Python', 'PyTorch', 'Transformer', 'MINLP', 'Monte Carlo', 'V2X', 'Edge Computing', 'Information Theory'],
    },
    // NetOps Guardian
    netops: {
      badge: 'AI • Network Operations',
      title: 'NetOps Guardian AI',
      desc: 'Autonomous Network Operations with Monetization and Intent-Based Automation',
      abstractText: `NetOps Guardian AI is an intelligent Network Operations Center (NOC) agent designed for multi-vendor ISP environments. The system implements a novel NOC/SOC convergence model through a Unified Decision Matrix, incorporating Zero Trust continuous authorization with a 6-step verification pipeline achieving sub-100ms response times. The architecture introduces a Dual-Path Correlation Engine with Fast Path and Slow Path processing capabilities, enabling real-time event correlation and anomaly detection across heterogeneous network infrastructure.`,
      capabilities: [
        { title: 'Autonomous Configuration', desc: 'Intent-based network configuration with AI-driven policy enforcement across multi-vendor environments.', color: '#8b5cf6', icon: '⚙️' },
        { title: 'Autonomous Provisioning', desc: 'Automated service provisioning with real-time validation and rollback capabilities for ISP operations.', color: '#00f0ff', icon: '🚀' },
        { title: 'KPI Generation', desc: 'PowerBI-equivalent performance dashboards with real-time network metrics and automated reporting.', color: '#ff0055', icon: '📊' },
      ],
      metrics: [
        { metric: '<100ms', desc: 'Zero Trust verification pipeline response time' },
        { metric: '<10ms', desc: 'Fast Path event correlation processing' },
        { metric: '<500ms', desc: 'Slow Path complex anomaly detection' },
        { metric: 'Dual-Path', desc: 'Engine with circuit breaker fault tolerance' },
      ],
      techTags: ['Next.js', 'TypeScript', 'Python', 'Prisma', 'PostgreSQL', 'Redis', 'Zero Trust', 'Token Bucket', 'Circuit Breaker', 'REST APIs'],
    },
    // CortexOps
    cortexops: {
      badge: 'AI Automation • Self-Healing',
      title: 'CortexOps',
      desc: 'Secure Agentic Workflow Automation with Intelligent Self-Healing Connectors',
      abstractText: `CortexOps is an autonomous Agentic Workflow Engine designed for complex enterprise automation environments. The system implements a novel Reasoning-as-a-Service (RaaS) model through the "Cortex Brain" orchestrator, incorporating a Zero Trust Security Pipeline with 6-step verification achieving sub-200ms non-AI response times. The architecture introduces a Self-Healing Correlation Engine capable of dynamic API adaptation and complex logic reasoning, enabling real-time fault recovery and anomaly detection across heterogeneous cloud infrastructures.`,
      brainAgents: [
        { title: 'Planner Agent', desc: 'Decomposes complex natural language intent into executable JSON DAGs.', color: '#22c55e' },
        { title: 'Reasoner Agent', desc: 'Implements the ReAct loop to maintain execution state and strategic pivots.', color: '#00f0ff' },
        { title: 'Executor Agent', desc: 'Hardened execution environment for secure Python and Node.js tasks.', color: '#8b5cf6' },
        { title: 'Validator Agent', desc: 'Post-execution verification ensuring outputs adhere to defined schemas.', color: '#ff0055' },
      ],
      resilience: [
        { title: 'Dynamic API Adaptation', desc: 'Automatically detects schema shifts (422) and regenerates request logic in real-time.', color: '#00f0ff', metric: '<50ms' },
        { title: 'Auth Recovery', desc: 'Native Vault integration for automated token injection on expiration (401).', color: '#8b5cf6', metric: 'Auto' },
        { title: 'Intelligent Backoff', desc: 'Adaptive exponential backoffs for rate-limited (429) service provider endpoints.', color: '#ff0055', metric: 'Adaptive' },
      ],
      runtime: [
        { title: 'Security Guardrails', desc: 'Hard limits on execution cost, token usage, and time' },
        { title: 'DLP Engine', desc: 'Automatic scanning and masking of PII, SSN, and nested API secrets' },
        { title: 'SAST Guard', desc: 'AST-level analysis blocking dangerous imports in real-time' },
      ],
      techTags: ['Next.js', 'TypeScript', 'Python', 'Bun', 'Prisma', 'ReAct Pattern', 'Zero Trust', 'DLP', 'SAST', 'Docker'],
    },
  },
  ar: {
    // Preloader
    preloader: {
      brand: 'الطبقة الحمراء',
      initializing: 'جارٍ تهيئة النظام',
      ready: 'جاهز',
    },
    // Navbar
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'نبذة عني',
      projects: 'المشاريع',
      contact: 'تواصل معنا',
      email: 'البريد الإلكتروني',
      socialMedia: 'وسائل التواصل الاجتماعي',
    },
    // Hero
    hero: {
      subtitle: 'حيث يلتقي الأمان بالابتكار، يبدأ الدفاع.',
      brand: 'الطبقة الحمراء - الحسين السحاتي',
      brandFull: 'الطبقة الحمراء - الحسين السحاتي',
      text: 'تحويل الأمن السيبراني بحلول الذكاء الاصطناعي المتقدمة. بناء مستقبل الدفاع الرقمي.',
      nameAr: 'الحسين السحاتي',
      nameEn: 'AlHussein Alsahati',
      scroll: 'مرّر',
    },
    // Parallax
    parallax: {
      cybersecurity: 'الأمن السيبراني',
      ai: 'الذكاء الاصطناعي',
      neuralNetworks: 'الشبكات العصبية',
      threatDetection: 'اكتشاف التهديدات',
      penTesting: 'اختبار الاختراق',
      cryptoSecurity: 'الأمن التشفيري',
      machineLearning: 'التعلم الآلي',
    },
    // About
    about: {
      subtitle: 'مدافع رقمي، رائد في الذكاء الاصطناعي',
      title: 'نبذة عني',
      tagline1: 'شغوف بالأمن الرقمي',
      tagline2: 'بناء أنظمة دفاعية مدعومة بالذكاء الاصطناعي',
      tagline3: 'من البحث إلى الحماية الواقعية',
      bio: `أنا الحسين السحاتي، باحث أكاديمي ومهندس أمن سيبراني شغوف بالذكاء الاصطناعي وتطبيقاته في مجال الأمن. كمؤسس شركة الطبقة الحمراء (RedLayer.ly)، أقود فريقاً مكرساً لتقديم حلول أمنية متطورة وابتكارات مدعومة بالذكاء الاصطناعي.

يربط عملي الفجوة بين البحث النظري والتطبيقات العملية، مما يساعد المنظمات على حماية أصولها الرقمية مع الاستفادة من قوة الذكاء الاصطناعي للبقاء في طليعة التهديدات المتطورة. بفضل خبرتي التي تمتد من اختبار الاختراق إلى التعلم الآلي، أقدم نهجاً شاملاً لتحديات الأمن السيبراني المعاصرة.

أركز حالياً على تطوير خوارزميات تشفير متقدمة وأنظمة اكتشاف التهديدات المدعومة بالذكاء الاصطناعي التي تدفع حدود الممكن في الدفاع الرقمي.`,
    },
    // Services
    services: {
      subtitle: 'حلول الأمان وابتكارات الذكاء الاصطناعي',
      title: 'الخدمات',
      text1: 'حلول أمنية شاملة',
      text2: 'مدعومة بالذكاء الاصطناعي',
      text3: 'والتقنية المتطورة',
      items: [
        {
          title: 'استشارات الأمن السيبراني',
          description: 'تقييمات واستراتيجيات أمنية شاملة لحماية الأصول الرقمية من التهديدات السيبرانية المتطورة. نقوم بتحليل البنية التحتية، وتحديد الثغرات، وتنفيذ آليات دفاعية متينة مصممة خصيصاً لاحتياجاتك.',
          subItems: ['تقييم الثغرات الأمنية', 'تصميم البنية الأمنية', 'تخطيط الاستجابة للحوادث الأمنية'],
        },
        {
          title: 'حلول الذكاء الاصطناعي',
          description: 'حلول ذكاء اصطناعي وتعلم آلي مخصصة مصممة لحل المشاكل التجارية المعقدة ودفع عجلة الابتكار. من التحليلات التنبؤية إلى اكتشاف التهديدات الآلي، نبني أنظمة ذكية تتعلم وتتكيف.',
          subItems: ['نماذج التعلم الآلي', 'تصميم الشبكات العصبية', 'تكامل أنظمة الذكاء الاصطناعي'],
        },
        {
          title: 'اختبار الاختراق',
          description: 'خدمات القرصنة الأخلاقية لتحديد الثغرات وتعزيز وضعك الأمني. يحاكي فريقنا هجمات واقعية لكشف نقاط الضعف قبل أن يستغلها المهاجمون الخبيثون.',
          subItems: ['اختبار تطبيقات الويب', 'اختبار اختراق الشبكات', 'الهندسة الاجتماعية'],
        },
        {
          title: 'التدريب الأمني',
          description: 'برامج تدريب احترافية لتمكين الفرق بالمعرفة الأمنية وأفضل الممارسات. بناء ثقافة الأمن أولاً داخل مؤسستك من خلال جلسات تدريب عملية وتطبيقية.',
          subItems: ['برامج الوعي الأمني', 'التدريب التقني المتقدم', 'التحضير للشهادات المهنية'],
        },
      ],
    },
    // Projects
    projects: {
      subtitle: 'حيث يلتقي المنطق بالأمان، بسلاسة',
      title: 'المشاريع',
      text: `مشاريع مميزة وأبحاث أكاديمية صُنعت بعناية وشغف لتحقيق نتائج وأثر علمي ملموس.`,
      viewProject: 'عرض المشروع',
      allProjects: [
        { id: 'r1', name: 'إدارة التنقل الذكي بشبكات V2X الجيل السادس', category: 'بحث', frameworks: ['شبكات 6G', 'تعلم التعزيز متعدد الوكلاء', 'الأسطح الذكية', 'بايتورتش'] },
        { id: 'r2', name: 'إطار OSS موحد لإدارة الشبكات', category: 'بحث', frameworks: ['OSS الاتصالات', 'الثقة الصفرية', 'FCAPS', 'بايثون'] },
        { id: 'r3', name: 'اتصالات V2X الموثوقة والعالية السرعة', category: 'بحث', frameworks: ['المحولات', 'الحوسبة الطرفية', 'V2X', 'MINLP'] },
        { id: 'r4', name: 'حارس الشبكات الذكي', category: 'بحث', frameworks: ['مركز العمليات', 'Next.js', 'وكيل ذكاء اصطناعي', 'الثقة الصفرية'] },
        { id: 'r5', name: 'كورتكس أوبس - محرك الأتمتة الذكي', category: 'بحث', frameworks: ['سير العمل الذكي', 'نمط ReAct', 'الشفاء الذاتي', 'تايب سكربت'] },
        { id: '1', name: 'محرك فراس للتشفير', category: 'أمن', frameworks: ['رست', 'نيم', 'التشفير', 'الأداء العالي'] },
        { id: '2', name: 'اكتشاف التهديدات بالذكاء الاصطناعي', category: 'ذكاء اصطناعي', frameworks: ['بايثون', 'تنسور فلو', 'الأمن السيبراني', 'ذكاء اصطناعي'] },
        { id: '3', name: 'منصة السحابة الآمنة', category: 'حوسبة سحابية', frameworks: ['أمن السحابة', 'AWS', 'الثقة الصفرية', 'DevSecOps'] },
        { id: '4', name: 'محلل الشبكات العصبية', category: 'ذكاء اصطناعي', frameworks: ['التعلم العميق', 'تحليل الشبكات', 'بايثون'] },
        { id: '5', name: 'مجموعة أمان الطبقة الحمراء', category: 'أمن', frameworks: ['أدوات أمنية', 'تقييم المخاطر', 'حلول مؤسسية'] },
      ],
    },
    // Contact Summary
    contactSummary: {
      quote: '"لنبني معاً',
      secure: 'آمناً',
      and: 'و',
      intelligent: 'ذكياً',
      digitalFuture: 'مستقبلاً رقمياً',
      together: 'معاً"',
      values: ['الابتكار', 'الدقة', 'الثقة', 'الأمان', 'التميز'],
      contactUs: 'تواصل معنا',
    },
    // Contact
    contact: {
      subtitle: 'أنت تحلمه، نحن نؤمّنه',
      title: 'تواصل معنا',
      text: `هل لديك سؤال أو مشروع أو قلق أمني؟ يسعدنا أن نسمع منك ونناقش المزيد!`,
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      website: 'الموقع الإلكتروني',
      socialMedia: 'وسائل التواصل الاجتماعي',
      telegram: 'تيليجرام',
      marqueeItems: ['ادفع.', 'ابتكر.', 'احمِ.'],
    },
    // Project Pages Common
    projectCommon: {
      viewOnGithub: 'عرض على غيت هب',
      backToPortfolio: '← العودة إلى المحفظة',
      abstract: 'الملخص',
      frameworkArchitecture: 'بنية الإطار',
      novelContributions: 'الإسهامات الجديدة',
      keyResults: 'النتائج الرئيسية',
      technologies: 'التقنيات المستخدمة',
      overview: 'نظرة عامة',
      researchHighlights: 'أبرز ملامح البحث',
      architectureHighlights: 'ملامح البنية المعمارية',
      coreCapabilities: 'القدرات الأساسية',
      theCortexBrain: 'عقل كورتكس',
      selfHealingResilience: 'مرونة الشفاء الذاتي',
      secureRuntimeEnvironment: 'بيئة التشغيل الآمنة',
      technicalInnovation: 'الابتكار التقني',
      targetSectors: 'القطاعات المستهدفة',
      whoIsFarasFor: 'لمن صُمم فراس؟',
      readyToSecure: 'هل أنت مستعد لتأمين مستقبلك؟',
      contactEnterprise: 'تواصل للحلول المؤسسية',
      authors: 'المؤلفون',
      author: 'المؤلف',
      supervisor: 'المشرف',
      researchLab: 'مختبر البحث',
      status: 'الحالة',
      version: 'الإصدار',
      target: 'الجهة المستهدفة',
      license: 'الترخيص',
      allRightsReserved: 'جميع الحقوق محفوظة.',
    },
    // V2X 6G RIS
    v2x6g: {
      badge: 'أبحاث الجيل السادس • شبكات V2X',
      title: 'إدارة التنقل الذكية باستخدام وكلاء الذكاء الاصطناعي والأسطح الذكية لشبكات V2X الجيل السادس',
      desc: 'الأسطح الذكية القابلة لإعادة التكوين تلتقي بتعلم التعزيز متعدد الوكلاء',
      abstractText: `يمثل التقارب بين شبكات الجيل السادس اللاسلكية واتصالات المركبات مع كل شيء والأسطح الذكية القابلة لإعادة التكوين فرصاً غير مسبوقة لإحداث ثورة في إدارة التنقل في سيناريوهات المركبات عالية السرعة. تقترح هذه الورقة إطاراً جديداً لا مركزياً لوكلاء الذكاء الاصطناعي يدمج بشكل تآزري تعلم التعزيز متعدد الوكلاء مع وكلاء تنبؤيين يعتمدون على المحولات للتحسين الديناميكي لإزاحة الطور للأسطح الذكية وبروتوكولات التسليم في سيناريوهات الاتصالات فائقة الموثوقية والانخفاض الشديد في زمن الاستجابة.`,
      frameworkDesc: `يتكون إطارنا من ثلاثة وكلاء متخصصين: وكيل تحسين الأسطح الذكية الذي يعدل إزاحة الطور ديناميكياً لتعزيز التغطية، ووكيل إدارة التسليم الذي يتخذ قرارات تسليم استباقية بناءً على التنبؤ بالمسار، ووكيل تخصيص الموارد الذي يحسن تخصيص الطيف والطاقة. نصيغ مشكلة التحسين المشترك كعملية قرار ماركوف تعاونية ونستخدم خوارزميات QMIX وتحسين السياسة القريبة متعدد الوكلاء للاتخاذ القرار الموزع.`,
      agents: [
        { title: 'وكيل تحسين الأسطح الذكية', desc: 'يعدل إزاحة الطور ديناميكياً لتعزيز التغطية باستخدام التعلم المعزز.', icon: '📡' },
        { title: 'وكيل إدارة التسليم', desc: 'يتخذ قرارات تسليم استباقية بناءً على التنبؤ بمسار المحولات.', icon: '🔄' },
        { title: 'وكيل تخصيص الموارد', desc: 'يحسن تخصيص الطيف والطاقة من خلال اتخاذ القرار الموزع بـ MAPPO.', icon: '⚡' },
      ],
      stats: [
        { value: '98.5%', label: 'نسبة نجاح التسليم', sub: 'بسرعة 500 كم/ساعة' },
        { value: '<1 مللي ث', label: 'زمن استجابة URLLC', sub: 'موثوقية 99.999%' },
        { value: '+8.2 ديسيبل', label: 'تحسين SINR', sub: 'مقارنة بالخطوط الأساسية' },
        { value: '+41.3%', label: 'زيادة الإنتاجية', sub: 'مقارنة بالطرق التقليدية' },
      ],
      techTags: ['بايثون', 'بايتورتش', 'MARL', 'MAPPO', 'QMIX', 'جيمناسيوم', 'بيتنغ زو', 'المحولات', 'موجات مليمترية 6G', 'RIS'],
    },
    // Unified OSS
    unifiedOss: {
      badge: 'الاتصالات • إدارة الشبكات',
      title: 'إطار OSS موحد لإدارة عناصر الشبكة',
      desc: 'إدارة عناصر شبكة متعددة الموردين بهندسة الثقة الصفرية',
      abstractText: `يحتوي هذا المستودع على البنية المعمارية العلمية وتنفيذ إطار OSS الموحد، وهو حل متقدم مصمم لمعالجة التحديات الحرجة لتعدد الموردين في شبكات الاتصالات الحديثة. يوفر الإطار قدرات تجريد وإدارة موحدة لأنظمة إدارة الشبكات المتنوعة، يغطي بشكل رئيسي بيئات إريكسون ENM وهواوي U2000/U2020. من خلال تطبيق طبقة تجريد الموردين القوية، يضمن النظام التكامل السلس عبر جميع المجالات الوظيفية الخمسة لـ FCAPS (الأعطال، التكوين، المحاسبة، الأداء، والأمان).`,
      contributions: [
        { title: 'طبقة تجريد الموردين', desc: 'تكامل سلس عبر بيئات إريكسون ENM وهواوي U2000/U2020 من خلال واجهة تجريد موحدة.', color: '#00f0ff' },
        { title: 'الربط الدلالي المساعد بالذكاء الاصطناعي', desc: 'محرك ترجمة التكوينات باستخدام الذكاء الاصطناعي للربط التلقائي بين نماذج البيانات الخاصة بكل مورد.', color: '#ff0055' },
        { title: 'ربط التنبيهات متعدد الطرق', desc: 'تقنيات ربط زمنية وطوبولوجية وسببية للكشف الدقيق عن الأعطال عبر بنية تحتية متعددة الموردين.', color: '#8b5cf6' },
        { title: 'الامتثال لهندسة الثقة الصفرية', desc: 'أول إطار OSS شامل يحقق الامتثال المستمر لهندسة الثقة الصفرية وفقاً لمعايير NIST SP 800-207.', color: '#22c55e' },
      ],
      techTags: ['بايثون', 'بوستجري إس كيو إل', 'تايم سكيل دي بي', 'ريديس', 'دوكر', 'YANG', 'REST APIs', 'الثقة الصفرية', 'FCAPS', 'الذكاء الاصطناعي'],
    },
    // URLLC V2X
    urlrcV2x: {
      badge: 'URLLC • الحوسبة الطرفية',
      title: 'URLLC-V2X',
      desc: 'تخصيص الموارد المشترك وتفريغ الحوسبة باستخدام بديل تعلمي يعتمد على المحولات',
      abstractText: `تتطلب اتصالات الموثوقية الفائقة والزمن المنخفض في بيئات الحوسبة الطرفية للمركبات ضمانات صارمة لزمن التأخير من طرف إلى طرف مع حدود موثوقية تتجاوز الحدود النظرية التقليدية لشانون. يعالج هذا البحث تحسين تخصيص كتل الموارد والتحكم في طاقة الإرسال وقرارات تفريغ الحوسبة لمستخدمي URLLC المركبي ضمن قيود نظرية المعلومات بطول الكتلة المحدود. نعتبر بنية V2X شاملة تشمل كل من معدات المستخدم الخلوي المركبية التي تتواصل مع وحدات الطريق وأزواج V2V التي تستخدم روابط جهاز لجهاز مباشرة.`,
      highlights: [
        { title: 'البديل التعلمي القائم على المحولات', desc: 'تقريب السياسات المثلى بزمن استدلال أقل من مللي ثانية، مما يتيح النشر الفوري في المركبات.', color: '#ff0055' },
        { title: 'تحليل طول الكتلة المحدود', desc: 'التحسين ضمن قيود نظرية المعلومات بالحزم القصيرة لسيناريوهات URLLC.', color: '#8b5cf6' },
        { title: 'إثبات التعقيد الحسابي NP', desc: 'إثبات رسمي من خلال اختزال كثير الحدود من مسألة حقيبة الظهر 0-1 لتوصيف التعقيد الحسابي.', color: '#00f0ff' },
        { title: 'التخصيص الواعي بالطوابير', desc: 'نماذج M/D/1 مدمجة مع تعريفات معدل خدمة متسقة الأبعاد لأحجام الحزم الحتمية.', color: '#22c55e' },
      ],
      stats: [
        { value: '94.7%', label: 'فجوة الأمثلية', sub: 'مقارنة بالحد الأدنى الأمثل' },
        { value: '3 رتب', label: 'تحسين السرعة', sub: 'تقليل وقت الحساب' },
        { value: '<1 مللي ث', label: 'زمن الاستدلال', sub: 'نشر فائق السرعة' },
      ],
      techTags: ['بايثون', 'بايتورتش', 'المحولات', 'MINLP', 'مونت كارلو', 'V2X', 'الحوسبة الطرفية', 'نظرية المعلومات'],
    },
    // NetOps Guardian
    netops: {
      badge: 'الذكاء الاصطناعي • عمليات الشبكة',
      title: 'حارس الشبكات الذكي',
      desc: 'عمليات شبكة مستقلة مع تحقيق الإيرادات والأتمتة القائمة على النوايا',
      abstractText: `حارس الشبكات الذكي هو وكيل مركز عمليات شبكي ذكي مصمم لبيئات مزودي خدمة الإنترنت متعددي الموردين. ينفذ النظام نموذج تقارب مركز عمليات/مركز أمني جديد من خلال مصفوفة قرار موحدة، يدمج توثيق الثقة الصفرية المستمر مع مسار تحقق من 6 خطوات يحقق أزمنة استجابة أقل من 100 مللي ثانية. تقدم البنية المعمارية محرك ربط ثنائي المسار بقدرات معالجة سريعة وبطيئة، مما يتيح ربط الأحداث في الوقت الفعلي واكتشاف الشذوذ عبر بنية تحتية شبكية غير متجانسة.`,
      capabilities: [
        { title: 'التكوين المستقل', desc: 'تكوين شبكة قائم على النوايا مع إنفاذ السياسات المدعوم بالذكاء الاصطناعي عبر بيئات متعددة الموردين.', color: '#8b5cf6', icon: '⚙️' },
        { title: 'التوفير المستقل', desc: 'توفير الخدمات تلقائياً مع التحقق الفوري والتراجع لعمليات مزودي خدمة الإنترنت.', color: '#00f0ff', icon: '🚀' },
        { title: 'توليد مؤشرات الأداء', desc: 'لوحات معلومات أداء تعادل PowerBI مع مقاييس شبكية فورية وتقارير مؤتمتة.', color: '#ff0055', icon: '📊' },
      ],
      metrics: [
        { metric: '<100 مللي ث', desc: 'زمن استجابة مسار التحقق بالثقة الصفرية' },
        { metric: '<10 مللي ث', desc: 'معالجة ربط الأحداث بالمسار السريع' },
        { metric: '<500 مللي ث', desc: 'اكتشاف الشذوذ المعقد بالمسار البطيء' },
        { metric: 'ثنائي المسار', desc: 'محرك مع قاطع دوائر لتحمل الأعطال' },
      ],
      techTags: ['Next.js', 'تايب سكربت', 'بايثون', 'بريزما', 'بوستجري إس كيو إل', 'ريديس', 'الثقة الصفرية', 'دلو الرموز', 'قاطع الدوائر', 'REST APIs'],
    },
    // CortexOps
    cortexops: {
      badge: 'أتمتة ذكاء اصطناعي • شفاء ذاتي',
      title: 'كورتكس أوبس',
      desc: 'أتمتة سير العمل الوكيلي الآمن مع موصلات ذكية ذات شفاء ذاتي',
      abstractText: `كورتكس أوبس هو محرك سير عمل وكيلي مستقل مصمم لبيئات أتمتة المؤسسات المعقدة. ينفذ النظام نموذجاً جديداً للتفكير كخدمة من خلال المنسق "عقل كورتكس"، يدمج مسار أمان الثقة الصفرية مع تحقق من 6 خطوات يحقق أزمنة استجابة أقل من 200 مللي ثانية للعمليات غير الذكية. تقدم البنية المعمارية محرك ربط ذي شفاء ذاتي قادر على التكيف الديناميكي مع واجهات البرمجة والتفكير المنطقي المعقد، مما يتيح التعافي من الأعطال واكتشاف الشذوذ في الوقت الفعلي عبر بنى تحتية سحابية غير متجانسة.`,
      brainAgents: [
        { title: 'وكيل التخطيط', desc: 'يحلل النوايا اللغوية الطبيعية المعقدة إلى رسوم بيانية قابلة للتنفيذ.', color: '#22c55e' },
        { title: 'وكيل التفكير', desc: 'ينفذ حلقة ReAct للحفاظ على حالة التنفيذ والمناورات الاستراتيجية.', color: '#00f0ff' },
        { title: 'وكيل التنفيذ', desc: 'بيئة تنفيذ معززة لمهام بايثون وNode.js الآمنة.', color: '#8b5cf6' },
        { title: 'وكيل التحقق', desc: 'التحقق بعد التنفيذ لضمان توافق المخرجات مع المخططات المحددة.', color: '#ff0055' },
      ],
      resilience: [
        { title: 'التكيف الديناميكي مع واجهات البرمجة', desc: 'يكتشف تلقائياً تغييرات المخطط (422) ويعيد توليد منطق الطلبات في الوقت الفعلي.', color: '#00f0ff', metric: '<50 مللي ث' },
        { title: 'استعادة المصادقة', desc: 'تكامل أصلي مع Vault للحقن التلقائي للرموز عند انتهاء الصلاحية (401).', color: '#8b5cf6', metric: 'تلقائي' },
        { title: 'التراجع الذكي', desc: 'تراجعات أسية تكيفية لنقاط نهاية مزودي الخدمة المحدودة المعدل (429).', color: '#ff0055', metric: 'تكيفي' },
      ],
      runtime: [
        { title: 'حواجز الأمان', desc: 'حدود صارمة على تكلفة التنفيذ واستخدام الرموز والزمن' },
        { title: 'محرك حماية البيانات', desc: 'فحص تلقائي وقناع للبيانات الشخصية وأرقام الضمان الاجتماعي وأسرار واجهات البرمجة المتداخلة' },
        { title: 'حارس التحليل الثابت', desc: 'تحليل على مستوى شجرة التجريد يمنع الاستيرادات الخطيرة في الوقت الفعلي' },
      ],
      techTags: ['Next.js', 'تايب سكربت', 'بايثون', 'Bun', 'بريزما', 'نمط ReAct', 'الثقة الصفرية', 'DLP', 'SAST', 'دوكر'],
    },
  },
} as const

export type Translations = typeof translations.en
