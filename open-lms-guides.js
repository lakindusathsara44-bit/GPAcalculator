/* Expanded, independent learning guides for the current pilot courses: HNDIT and HNDA.
   Topic lists are study guidance inferred from module titles, not official SLIATE syllabi. */
(() => {
  const enc = encodeURIComponent;
  const yt = (q, lang) => "https://www.youtube.com/results?search_query=" + enc(q + " " + lang);
  const google = q => "https://www.google.com/search?q=" + enc(q);
  const tiktok = q => "https://www.tiktok.com/search?q=" + enc(q);
  const common = {
    web: {
      label:"Web development",
      topics:["How the web works: browsers, servers, HTTP/HTTPS and URLs","HTML: document structure, semantic elements, links, images, tables and forms","CSS: selectors, cascade, box model, typography, colours and positioning","Responsive layouts: Flexbox, Grid, media queries and mobile-first design","JavaScript fundamentals: variables, data types, conditions, loops, functions and arrays","DOM manipulation, events, form validation and browser storage","Accessibility, SEO basics, performance and secure coding fundamentals","Git/GitHub workflow, testing, deployment and maintaining a website"],
      sites:[["W3Schools","https://www.w3schools.com/","Beginner-friendly HTML, CSS and JavaScript tutorials"],["MDN Web Docs","https://developer.mozilla.org/en-US/docs/Learn_web_development","Detailed web standards, tutorials and references"],["freeCodeCamp","https://www.freecodecamp.org/learn/","Guided coding lessons and practical projects"],["The Odin Project","https://www.theodinproject.com/","Structured full-stack web development path"],["GitHub Skills","https://skills.github.com/","Git and GitHub practice"]],
      extra:["HTML/CSS/JavaScript","Responsive web design","DOM and JavaScript projects"]
    },
    programming: {
      label:"Programming",
      topics:["Problem solving: break a task into inputs, processes and outputs","Algorithms, pseudocode and flowcharts","Variables, constants, data types and operators","Selection, iteration and nested control structures","Functions, parameters, return values and scope","Arrays/collections, strings and basic data processing","Object-oriented programming: classes, objects, encapsulation and inheritance (where relevant)","Debugging, test cases, readable code and small application projects"],
      sites:[["W3Schools","https://www.w3schools.com/","Quick references and beginner exercises"],["freeCodeCamp","https://www.freecodecamp.org/learn/","Interactive coding practice"],["GitHub Skills","https://skills.github.com/","Version control and collaboration"],["MIT OpenCourseWare","https://ocw.mit.edu/","University-level computer science courses"]],
      extra:["Programming fundamentals","Programming practical examples","Programming exercises"]
    },
    networking: {
      label:"Computer networking",
      topics:["Network types, topologies, devices and transmission media","OSI and TCP/IP models and encapsulation","IPv4/IPv6 addressing, subnet masks and subnetting","Ethernet, MAC addresses, switches, VLANs and routing","TCP/UDP, ports and common application protocols","DNS, DHCP, NAT, HTTP/HTTPS and network services","Wireless networking, troubleshooting and network commands","Network security, firewalls, access control and secure configuration"],
      sites:[["Cisco Networking Academy","https://www.netacad.com/","Networking courses and learning pathways"],["Cisco Packet Tracer","https://www.netacad.com/cisco-packet-tracer","Virtual network design and simulation"],["Cloudflare Learning Center","https://www.cloudflare.com/learning/","Clear explanations of internet and network concepts"],["Wireshark","https://www.wireshark.org/docs/","Packet analysis documentation"]],
      extra:["Networking fundamentals","Cisco Packet Tracer lab","Subnetting explained"]
    },
    database: {
      label:"Database systems",
      topics:["Database concepts, DBMS roles and relational database terminology","Requirements analysis and entity-relationship diagrams","Tables, primary keys, foreign keys and constraints","Relational design and normalization (1NF, 2NF, 3NF)","SQL: CREATE, INSERT, SELECT, UPDATE and DELETE","Filtering, sorting, joins, grouping, aggregate functions and subqueries","Transactions, indexes, views, users and database security","Backup, recovery and a small database-backed application"],
      sites:[["SQLBolt","https://sqlbolt.com/","Interactive SQL lessons"],["PostgreSQL Documentation","https://www.postgresql.org/docs/","Official database documentation"],["W3Schools SQL","https://www.w3schools.com/sql/","SQL tutorials and examples"],["DB Fiddle","https://www.db-fiddle.com/","Try SQL queries in a browser"]],
      extra:["Database management systems","SQL tutorial","ER diagram and normalization"]
    },
    software: {
      label:"Software engineering",
      topics:["Software development life cycle and process models","Stakeholders, requirements elicitation and user stories","Functional and non-functional requirements; use-case modelling","System architecture, UML and design principles","Agile/Scrum, sprint planning and team collaboration","Version control, code review and build practices","Verification, validation, testing levels and defect tracking","Deployment, maintenance, documentation and software ethics"],
      sites:[["SWEBOK","https://www.computer.org/education/bodies-of-knowledge/software-engineering","Software engineering body of knowledge"],["Atlassian Agile Coach","https://www.atlassian.com/agile","Agile and Scrum learning resources"],["GitHub Skills","https://skills.github.com/","Collaboration and version-control practice"],["ISTQB","https://www.istqb.org/","Software testing syllabus and glossary"]],
      extra:["Software engineering tutorial","Agile Scrum explained","Software development life cycle"]
    },
    ui: {
      label:"User interface and experience design",
      topics:["Human-centred design and understanding users","User research, personas, scenarios and user journeys","Information architecture, navigation and task flows","Wireframes, low-fidelity and high-fidelity prototypes","Visual hierarchy, typography, colour and layout","Usability heuristics, feedback and error prevention","Accessibility, responsive design and inclusive interfaces","Usability testing, iteration and design handoff"],
      sites:[["Figma Learn","https://help.figma.com/hc/en-us/categories/360002051613-Learn-design","Interface design and prototyping tutorials"],["Nielsen Norman Group","https://www.nngroup.com/articles/","UX research and usability articles"],["W3C WAI","https://www.w3.org/WAI/fundamentals/","Web accessibility guidance"],["Material Design","https://m3.material.io/","Interface design guidelines"]],
      extra:["UI UX design fundamentals","Figma wireframe tutorial","Usability testing"]
    },
    security: {
      label:"Information and computer security",
      topics:["Information security goals: confidentiality, integrity and availability","Threats, vulnerabilities, risk, attack surfaces and security controls","Authentication, authorization, passwords and multi-factor authentication","Cryptography basics, hashing, encryption and digital signatures","Network, operating-system and application security","Common web risks and OWASP Top 10 concepts","Backups, patching, logging, incident response and recovery","Privacy, professional ethics, policies and legal responsibilities"],
      sites:[["OWASP","https://owasp.org/","Application security guidance and projects"],["NIST Cybersecurity Framework","https://www.nist.gov/cyberframework","Cybersecurity risk management guidance"],["Cisco Networking Academy","https://www.netacad.com/","Introductory cybersecurity courses"],["Google Safety Center","https://safety.google/","Security and privacy learning"]],
      extra:["Cybersecurity fundamentals","OWASP Top 10 explained","Information security basics"]
    },
    operating: {
      label:"Operating systems",
      topics:["Operating-system purpose, architecture and services","Processes, threads, states and CPU scheduling","Concurrency, synchronization and deadlocks","Memory management, paging and virtual memory","File systems, directories, permissions and storage","Linux/Windows command-line fundamentals","Users, processes, services, logs and system monitoring","Virtualization, containers and operating-system security"],
      sites:[["Linux Journey","https://linuxjourney.com/","Free Linux learning path"],["Ubuntu Documentation","https://help.ubuntu.com/","Linux administration documentation"],["Operating Systems: Three Easy Pieces","https://pages.cs.wisc.edu/~remzi/OSTEP/","Free online operating-systems textbook"]],
      extra:["Operating systems explained","Linux command line tutorial","Process scheduling"]
    },
    algorithms: {
      label:"Data structures and algorithms",
      topics:["Algorithm design and pseudocode","Time and space complexity; Big-O notation","Arrays, strings and linked lists","Stacks, queues, hash tables and maps","Trees, binary search trees and heaps","Graphs and graph traversal","Searching and sorting algorithms","Recursion, problem decomposition and comparing solutions"],
      sites:[["VisuAlgo","https://visualgo.net/","Visual algorithm and data-structure demonstrations"],["OpenDSA","https://opendsa-server.cs.vt.edu/","Interactive open data-structures material"],["MIT OpenCourseWare","https://ocw.mit.edu/","University algorithms lectures"]],
      extra:["Data structures explained","Algorithms visualisation","Big O notation"]
    },
    machine: {
      label:"Machine learning",
      topics:["AI, machine learning and data-science terminology","Data collection, cleaning, feature selection and exploratory analysis","Supervised vs unsupervised learning","Regression and classification models","Training, validation, testing and cross-validation","Metrics: accuracy, precision, recall, F1 and error measures","Overfitting, underfitting, regularization and model selection","Ethics, bias, privacy and communicating model results"],
      sites:[["Google Machine Learning Crash Course","https://developers.google.com/machine-learning/crash-course","Practical ML lessons and exercises"],["Kaggle Learn","https://www.kaggle.com/learn","Short courses and datasets"],["scikit-learn User Guide","https://scikit-learn.org/stable/user_guide.html","Machine-learning algorithms and examples"]],
      extra:["Machine learning beginner course","Regression and classification","Machine learning practical Python"]
    },
    statistics: {
      label:"Statistics and quantitative methods",
      topics:["Types of data, variables, scales and data collection","Fractions, percentages, ratios and basic algebra","Tables, charts and frequency distributions","Mean, median, mode, range, variance and standard deviation","Probability rules and common distributions","Sampling, estimation and confidence intervals","Correlation, regression and interpretation","Using spreadsheets or statistical tools to analyse data"],
      sites:[["OpenStax Statistics","https://openstax.org/details/books/introductory-statistics-2e","Free statistics textbook"],["Khan Academy Statistics","https://www.khanacademy.org/math/statistics-probability","Lessons and exercises"],["Seeing Theory","https://seeing-theory.brown.edu/","Visual probability and statistics"]],
      extra:["Statistics lessons","Probability explained","Descriptive statistics examples"]
    },
    project: {
      label:"Project and research work",
      topics:["Identify a real problem, research question and project objectives","Stakeholder analysis, scope and feasibility","Literature review and reliable source evaluation","Requirements, methodology and work breakdown structure","Timeline, milestones, budget and risk register","Design, implementation and evidence collection","Testing, evaluation, limitations and recommendations","Report writing, referencing, presentation and reflection"],
      sites:[["Purdue OWL","https://owl.purdue.edu/","Academic writing and referencing guidance"],["Google Scholar","https://scholar.google.com/","Find scholarly articles and research"],["PMI Learning","https://www.pmi.org/learning","Project-management learning resources"],["Atlassian Project Management","https://www.atlassian.com/project-management","Planning and collaboration guides"]],
      extra:["Project planning tutorial","Research methodology","Academic report writing"]
    },
    communication: {
      label:"Communication and professional skills",
      topics:["Purpose, audience, context and communication channels","Written, verbal, non-verbal and digital communication","Professional emails, reports, memos and presentations","Listening, teamwork, feedback and conflict management","Technical vocabulary, clarity, structure and proofreading","Referencing, source credibility and avoiding plagiarism","Professional ethics, workplace behaviour and inclusion","Presentation practice and reflective improvement"],
      sites:[["Purdue OWL","https://owl.purdue.edu/","Writing, grammar and academic communication"],["British Council LearnEnglish","https://learnenglish.britishcouncil.org/","English learning resources"],["Microsoft Learn","https://learn.microsoft.com/training/","Digital workplace and productivity learning"]],
      extra:["Professional communication skills","Technical report writing","Presentation skills"]
    },
    economics: {
      label:"Economics and business environment",
      topics:["Scarcity, choice, opportunity cost and economic systems","Demand, supply, equilibrium and elasticity","Consumer behaviour, production and costs","Market structures and competition","National income, GDP, inflation and unemployment","Monetary policy, fiscal policy and exchange rates","International trade, globalisation and business environment","Use data and current examples to explain economic decisions"],
      sites:[["CORE Econ","https://www.core-econ.org/","Free economics learning materials"],["OpenStax Economics","https://openstax.org/subjects/business","Free business and economics textbooks"],["Khan Academy Economics","https://www.khanacademy.org/economics-finance-domain","Economics lessons"]],
      extra:["Microeconomics basics","Macroeconomics explained","Business economics"]
    },
    law: {
      label:"Business and corporate law",
      topics:["Sources of law and the legal environment of business","Contract formation, terms, breach and remedies","Agency, sale of goods and business obligations","Employment relationships and workplace responsibilities","Company formation, directors and shareholder rights","Corporate governance, meetings and statutory records","Legal compliance, dispute resolution and case analysis","Apply principles to practical business scenarios; check current Sri Lankan legislation"],
      sites:[["Sri Lanka LawNet","https://www.lawnet.gov.lk/","Sri Lankan legal resources"],["Department of Government Printing","https://documents.gov.lk/","Acts, regulations and official publications"],["OpenLearn","https://www.open.edu/openlearn/","Free introductory law and business learning"]],
      extra:["Business law lessons","Contract law explained","Company law fundamentals"]
    },
    management: {
      label:"Management and organisational studies",
      topics:["Management functions: planning, organising, leading and controlling","Organisational structures, culture and decision-making","Leadership, motivation and team behaviour","Human-resource planning, recruitment and performance","Strategy, objectives and organisational change","Operations, quality, productivity and process improvement","Marketing, customers and competitive environment","Apply management theories to real organisational cases"],
      sites:[["OpenStax Business","https://openstax.org/subjects/business","Free business textbooks"],["OpenLearn","https://www.open.edu/openlearn/","Free management courses"],["Saylor Academy","https://www.saylor.org/","Open business and management courses"]],
      extra:["Principles of management","Organisational behaviour","Business management case study"]
    },
    audit: {
      label:"Auditing and assurance",
      topics:["Purpose, scope and types of audit and assurance","Auditor independence, ethics and professional scepticism","Audit planning, materiality and risk assessment","Internal controls and control testing","Audit evidence, sampling and substantive procedures","Audit documentation and working papers","Audit opinions, reports and communication with governance","Apply standards and examples; verify the latest applicable Sri Lankan and international requirements"],
      sites:[["IAASB","https://www.iaasb.org/","International auditing and assurance standards"],["ACCA Technical Articles","https://www.accaglobal.com/","Audit articles and exam support"],["IFAC","https://www.ifac.org/","Professional accountancy resources"]],
      extra:["Auditing fundamentals","Audit risk and internal controls","Audit procedures examples"]
    },
    tax: {
      label:"Taxation",
      topics:["Purpose of taxation and the Sri Lankan tax administration framework","Taxpayer status, residence, sources of income and tax periods","Identify taxable income, allowable deductions and reliefs","Compute tax using the rules applicable to the relevant year","VAT, withholding taxes and other relevant indirect taxes","Tax returns, payment, records, assessments and appeals","Tax planning, compliance, ethics and common errors","Always check current Inland Revenue Department guidance and legislation: tax rates and rules change"],
      sites:[["Inland Revenue Department Sri Lanka","https://www.ird.gov.lk/","Official current tax laws, notices, forms and guidance"],["Department of Government Printing","https://documents.gov.lk/","Official tax Acts and amendments"],["ACCA","https://www.accaglobal.com/","General taxation learning and exam resources"]],
      extra:["Sri Lanka taxation lessons","Income tax calculation examples","VAT explained Sri Lanka"]
    },
    finance: {
      label:"Financial management",
      topics:["Financial objectives, financial statements and cash-flow concepts","Time value of money, discounting and compounding","Investment appraisal: payback, NPV and IRR","Cost of capital and sources of finance","Capital structure, leverage and dividend decisions","Working-capital management and cash budgeting","Financial risk, ratios and performance analysis","Use worked examples and spreadsheet models to support decisions"],
      sites:[["OpenStax Finance","https://openstax.org/subjects/business","Free business and finance textbooks"],["Corporate Finance Institute","https://corporatefinanceinstitute.com/resources/","Finance explanations and practice resources"],["Khan Academy","https://www.khanacademy.org/economics-finance-domain","Finance and capital-markets lessons"]],
      extra:["Financial management lessons","NPV IRR worked examples","Working capital management"]
    },
    costing: {
      label:"Cost and management accounting",
      topics:["Cost terminology, cost objects and cost classification","Direct/indirect, fixed/variable and semi-variable costs","Cost-volume-profit analysis, contribution and break-even","Job, batch, process and activity-based costing","Budgets, standard costs and variance analysis","Relevant costing, pricing and short-term decisions","Performance measurement and responsibility accounting","Solve numerical questions and explain the decision implications"],
      sites:[["OpenStax Accounting","https://openstax.org/subjects/business","Free accounting textbook resources"],["ACCA","https://www.accaglobal.com/","Management accounting study resources"],["AccountingCoach","https://www.accountingcoach.com/","Accounting explanations and practice"]],
      extra:["Management accounting lessons","Cost accounting examples","Break even analysis"]
    },
    reporting: {
      label:"Financial reporting and accounting standards",
      topics:["Purpose and qualitative characteristics of financial reporting","Conceptual framework, recognition and measurement","Presentation of financial statements","Relevant IFRS/IAS or SLFRS/LKAS standards for the module","Property, plant and equipment, inventory, revenue and leases","Provisions, financial instruments and impairment (where relevant)","Consolidated statements and group reporting (advanced modules)","Prepare statement extracts and explain disclosures; confirm the standards and effective dates for your syllabus"],
      sites:[["IFRS Foundation","https://www.ifrs.org/","Official IFRS standards information and learning"],["CA Sri Lanka","https://www.casrilanka.com/","Sri Lankan accounting profession and standards resources"],["IAS Plus","https://www.iasplus.com/","Accounting standards summaries and updates"],["ACCA","https://www.accaglobal.com/","Financial reporting study resources"]],
      extra:["IFRS financial reporting","Sri Lanka accounting standards","Financial statements worked examples"]
    },
    businessmath: {
      label:"Business mathematics",
      topics:["Arithmetic, fractions, decimals, percentages and ratios","Algebra, equations, indices and formula rearrangement","Simple and compound interest","Discounts, mark-up, commission and depreciation","Annuities, loans and instalment calculations","Matrices, linear equations or other syllabus-specific methods","Interpret numerical results in business contexts","Practise step-by-step calculations and check answers with spreadsheets"],
      sites:[["Khan Academy","https://www.khanacademy.org/math","Free mathematics lessons"],["OpenStax","https://openstax.org/subjects/math","Free mathematics textbooks"],["Math is Fun","https://www.mathsisfun.com/","Accessible explanations and practice"]],
      extra:["Business mathematics lessons","Compound interest examples","Business maths problems"]
    },
    data: {
      label:"Data analytics and information systems",
      topics:["Information systems, data and decision-support concepts","Data collection, data quality and data cleaning","Spreadsheets: formulas, lookups, pivot tables and charts","Descriptive analysis and selecting suitable visualisations","Introductory databases and SQL for data retrieval","Dashboards, reporting and communicating insights","Privacy, data governance, bias and ethical use","Complete a small analysis from raw data to a justified recommendation"],
      sites:[["Google Analytics Academy","https://skillshop.withgoogle.com/","Google analytics and digital skills training"],["Kaggle Learn","https://www.kaggle.com/learn","Data analysis and visualisation courses"],["Microsoft Learn","https://learn.microsoft.com/training/","Excel, Power BI and data learning"],["Our World in Data","https://ourworldindata.org/","Open datasets and examples"]],
      extra:["Data analytics tutorial","Excel data analysis","Data visualisation"]
    }
  };
  function classify(courseId, module) {
    const s = (module.name + " " + module.code).toLowerCase();
    if (/web design|web programming|web development/.test(s)) return "web";
    if (/visual application programming|fundamentals of programming|object oriented programming|programming individual|programming/.test(s)) return "programming";
    if (/data communication|computer and network|network|ict and networks/.test(s)) return "networking";
    if (/database/.test(s)) return "database";
    if (/software development|software engineering|software quality/.test(s)) return "software";
    if (/user interface|ui design/.test(s)) return "ui";
    if (/security/.test(s)) return "security";
    if (/operating systems/.test(s)) return "operating";
    if (/data structures|algorithms/.test(s)) return "algorithms";
    if (/machine learning/.test(s)) return "machine";
    if (/statistics/.test(s)) return courseId === "HNDA" ? "statistics" : "statistics";
    if (/project|research|researching|community work/.test(s)) return "project";
    if (/communication|technical writing|professional world|human value/.test(s)) return "communication";
    if (/business mathematics/.test(s)) return "businessmath";
    if (/economics|global business environment/.test(s)) return "economics";
    if (/business law|corporate law/.test(s)) return "law";
    if (/auditing|assurance/.test(s)) return "audit";
    if (/taxation/.test(s)) return "tax";
    if (/financial management|investment|portfolio/.test(s)) return "finance";
    if (/management accounting|cost management/.test(s)) return "costing";
    if (/financial reporting|accounting standards|corporate reporting|advanced financial accounting|financial accounting/.test(s)) return "reporting";
    if (/financial accounting/.test(s)) return "reporting";
    if (/computer based accounting/.test(s)) return "data";
    if (/data analytics|information management|information system|enterprise resource planning/.test(s)) return "data";
    if (/human resources|managing organizations|management|marketing|operations|business process|enterprise resource/.test(s)) return "management";
    if (/business statistics/.test(s)) return "statistics";
    return courseId === "HNDA" ? "management" : "programming";
  }
  function build(course, module) {
    const key = classify(course.id, module);
    const c = common[key];
    const subject = module.name;
    const base = subject + " " + course.id + " SLIATE";
    const searchTerms = c.extra[0] || subject;
    return {
      category:c.label,
      topics:c.topics,
      note:"Independent study guide based on the module title. Match these topics against your current official SLIATE module descriptor, lecturer's instructions and examination scope.",
      videos:[
        {language:"English",url:yt(base + " tutorial full course", "English")},
        {language:"Sinhala",url:yt(subject + " " + course.id + " පාඩම්", "Sinhala")},
        {language:"Tamil",url:yt(subject + " " + course.id + " பாடம்", "Tamil")}
      ],
      websites:c.sites,
      google:[
        {title:"Google – module notes and PDFs",url:google('"' + subject + '" ' + course.id + " lecture notes filetype:pdf")},
        {title:"Google – topic explanations",url:google(subject + " " + searchTerms + " tutorial examples")},
        {title:"Google Scholar – academic references",url:"https://scholar.google.com/scholar?q=" + enc(subject + " " + course.id)}
      ],
      openLearning:[
        {title:"OpenLearn – related free courses",url:google("site:open.edu/openlearn " + subject)},
        {title:"MIT OpenCourseWare – lectures and notes",url:google("site:ocw.mit.edu " + subject)},
        {title:"OER Commons – open educational resources",url:google("site:oercommons.org " + subject)},
        {title:"Saylor Academy – open courses",url:google("site:saylor.org " + subject)}
      ],
      shortVideos:[
        {title:"TikTok short lessons",url:tiktok(subject + " tutorial")},
        {title:"YouTube Shorts",url:yt(subject + " short tutorial", "shorts")}
      ],
      practice:[
        "Write a one-page summary of each topic using your own words.",
        "Complete at least 5 practice questions or practical tasks for each major topic.",
        "Create one small assignment, case study, lab or worked example related to this module.",
        "Keep a list of topics you cannot explain without notes and revise them."
      ]
    };
  }
  window.OPEN_LMS_GUIDES = {build};
})();