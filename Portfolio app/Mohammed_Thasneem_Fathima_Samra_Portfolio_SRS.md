# Software Requirements Specification (SRS)
## Personal Portfolio Website

**Project:** Professional Personal Portfolio Website  
**Prepared for:** Mohammed Thasneem Fathima Samra  
**Role/Background:** Computer Science Undergraduate  
**Institution:** Eastern University, Sri Lanka – Trincomalee Campus  
**Expected Graduation:** 2027  
**Document Version:** 1.0  
**Date:** September 2026

---

## 1. Introduction

### 1.1 Project Keyword

**Keyword:** `the website should be professional`

This is a core requirement of the portfolio website and shall be considered throughout the design and development process.

### 1.1 Purpose

This Software Requirements Specification (SRS) defines the requirements for developing a **professional personal portfolio website** for Mohammed Thasneem Fathima Samra, a Computer Science undergraduate.

The website will present academic background, technical skills, software engineering and QA interests, UI/UX work, projects, certifications, achievements, and contact information in a clear and modern format.

### 1.2 Project Objective

The main objective is to develop a responsive and professional portfolio that:

- Introduces the student and professional interests.
- Showcases software development, QA, web development, and UI/UX skills.
- Displays academic and personal projects.
- Provides links to GitHub and LinkedIn.
- Presents certifications and achievements.
- Allows recruiters, lecturers, clients, and other visitors to contact the owner.
- Provides a strong online professional presence for internship and future employment opportunities.

### 1.3 Scope

The portfolio website will contain:

- Home / Hero section
- About / Professional Summary
- Education
- Technical Skills
- Software Engineering & QA skills
- UI/UX skills
- Projects
- Certifications
- Achievements & Activities
- Languages
- Soft Skills
- Contact section
- GitHub and LinkedIn links
- Responsive navigation
- Project links where available

The website is primarily an informational portfolio. A complex backend, user registration system, shopping system, and database-driven administration panel are outside the initial scope.

---

## 2. Overall Description

### 2.1 Product Perspective

The system will be a standalone web-based portfolio application accessible through modern web browsers on desktop, tablet, and mobile devices.

The portfolio should provide a clean, professional, easy-to-navigate user experience and should represent the owner's academic and technical profile.

### 2.2 User Classes

| User | Description |
|---|---|
| Recruiter / Employer | Views qualifications, skills, projects, and contact information. |
| Lecturer / Academic | Reviews academic background and university projects. |
| Client | Reviews technical and UI/UX work for possible project opportunities. |
| General Visitor | Views the professional profile and portfolio content. |
| Portfolio Owner | Updates portfolio content and external links. |

### 2.3 Operating Environment

The website should work on:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Modern Android and iOS browsers

The website should support:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

### 2.4 Design Requirements

The website should be:

- Professional
- Modern
- Responsive
- User-friendly
- Easy to navigate
- Visually consistent
- Accessible
- Fast-loading
- Suitable for recruiters and professional use

A blue/white visual theme may be used to maintain a clean professional appearance similar to the supplied CV.

---

# 3. Functional Requirements

## FR-01: Home / Hero Section

The system shall provide a hero section containing:

- Full name: **Mohammed Thasneem Fathima Samra**
- Professional title: **Computer Science Undergraduate**
- Areas of interest:
  - Software Engineering
  - QA
  - Web Development
  - UI/UX
- Professional profile image
- Short introduction
- Call-to-action buttons such as:
  - View Projects
  - Contact Me
  - Download CV

## FR-02: About / Professional Summary

The system shall display a professional summary describing:

- Computer Science undergraduate status
- Eastern University, Sri Lanka – Trincomalee Campus
- Interest in Software Engineering
- Quality Assurance
- Web Development
- UI/UX Design
- Artificial Intelligence
- Career objective

## FR-03: Education Section

The system shall display:

- Institution
- Degree
- Study period
- Expected graduation year
- Relevant coursework

Example coursework:

- Object-Oriented Programming
- Data Structures & Algorithms
- Database Management Systems
- Software Engineering
- Operating Systems
- Internet & Web Design
- Computer Graphics
- System Analysis & Design
- UI/UX

## FR-04: Technical Skills

The system shall display technical skills under suitable categories.

### Programming Languages

- Java
- Python
- C++

### Web Technologies

- HTML
- CSS
- JavaScript
- PHP

### Database

- MySQL
- SQL

### Software & Tools

- Git
- GitHub
- VS Code
- NetBeans
- Eclipse
- Figma
- StarUML

### Software Engineering & QA

- Software Testing
- Quality Assurance
- Requirements Analysis
- SDLC
- UML

### UI/UX Design

- Figma
- Prototyping
- User Flow
- Interface Design

## FR-05: Projects Section

The system shall display portfolio projects using project cards or similar components.

Each project should contain:

- Project name
- Short description
- Technologies/tools
- Key features
- Project image or screenshot
- GitHub link where available
- Demo link where available

Initial projects include:

### City Bookshop Management System

Technology:

- Java
- Java Swing
- OOP
- GitHub

Description:

A Java desktop application for managing bookshop operations, including book inventory, categories, and user management.

### EAT MORE – Food Delivery UI/UX Project

Technology:

- Figma
- UI/UX

Description:

A food delivery application prototype focused on usability, navigation, categorized menus, and user experience.

### 2050 Food Measuring App

Technology:

- Figma
- UI/UX

Description:

A food measuring application concept with multiple screens and a QR scanning feature.

## FR-06: Certifications Section

The system shall display certifications such as:

- Google AI Essentials
- Data Analytics with AI – Sololearn
- Introduction to SQL – Sololearn
- Quality Assurance – Alison
- Quality Assurance: Techniques & Methodologies – Alison
- Introduction to Figma – Simplilearn
- Azure Fundamentals – Simplilearn
- Discover the Art of Prompting
- Node.js Certificate – HackerRank

Each certification may include:

- Certificate name
- Issuing organization
- Completion date
- Certificate image
- Verification link, if available

## FR-07: Achievements & Activities

The system shall display:

- 3rd Place – CodeCrush Competition
- Participation in technology competitions
- Participation in UI/UX competitions
- University technology-related activities
- Continuous technical learning
- Practical project activities

## FR-08: Languages

The website shall display:

- Tamil – Native
- English – Professional Working Proficiency
- Sinhala – Basic

## FR-09: Soft Skills

The website shall display:

- Problem Solving
- Teamwork
- Communication
- Time Management
- Adaptability
- Presentation Skills
- Continuous Learning

## FR-10: Contact Section

The system shall provide contact information:

- Email
- LinkedIn
- GitHub

The website may also provide a contact form containing:

- Name
- Email
- Subject
- Message
- Submit button

If a contact form is implemented, appropriate validation shall be provided.

## FR-11: Social / Professional Links

The system shall provide clickable links to:

- LinkedIn profile
- GitHub profile
- Project repositories
- Certificate verification pages where applicable

## FR-12: CV Download

The website should provide a **Download CV** button that allows visitors to download the latest CV in PDF format.

## FR-13: Navigation

The website shall provide navigation links to major sections, such as:

- Home
- About
- Education
- Skills
- Projects
- Certifications
- Achievements
- Contact

Navigation should remain clear and usable on mobile devices.

## FR-14: Responsive Design

The website shall automatically adapt its layout to:

- Mobile screens
- Tablet screens
- Laptop screens
- Desktop screens

Navigation, images, text, cards, and buttons shall remain readable and usable at different screen sizes.

---

# 4. Non-Functional Requirements

## NFR-01: Performance

- Pages should load quickly.
- Images should be optimized.
- Unnecessary libraries and scripts should be avoided.
- The website should provide smooth scrolling and interactions.

## NFR-02: Usability

- Navigation should be simple.
- Content should be organized into clear sections.
- Buttons and links should be easy to identify.
- The interface should be understandable without technical knowledge.

## NFR-03: Accessibility

The website should:

- Use readable font sizes.
- Provide sufficient color contrast.
- Use alternative text for important images.
- Support keyboard navigation where practical.
- Use meaningful headings and semantic HTML.

## NFR-04: Security

- No sensitive personal information should be exposed.
- External links should use secure HTTPS URLs where available.
- Contact-form input should be validated.
- If a backend is added, user input should be sanitized.

## NFR-05: Compatibility

The website should function correctly in current versions of major browsers, including Chrome, Edge, Firefox, and Safari.

## NFR-06: Maintainability

The source code shall be:

- Organized
- Readable
- Modular
- Properly named
- Easy to update

Portfolio content should be easy to modify when new projects, certificates, skills, or achievements are added.

## NFR-07: Professional Appearance

The website should be professional and suitable for:

- Internship applications
- Graduate job applications
- Recruiter review
- Academic purposes
- Freelance/project opportunities

---

# 5. User Interface Requirements

## 5.1 General Layout

The recommended layout is:

1. Header / Navigation
2. Hero
3. Professional Summary
4. Education
5. Skills
6. Projects
7. Certifications
8. Achievements
9. Languages & Soft Skills
10. Contact
11. Footer

## 5.2 Visual Design

Recommended design characteristics:

- Professional blue and white color palette
- Clean typography
- Consistent spacing
- Rounded cards where appropriate
- Simple icons
- Subtle animations
- Clear section headings
- Responsive project cards

## 5.3 Suggested Typography

The website may use modern web fonts such as:

- Poppins
- Inter
- Roboto

Headings should be visually distinct from body text.

---

# 6. Technical Requirements

## 6.1 Front-End Technologies

The initial version may be developed using:

- HTML5
- CSS3
- JavaScript

Optional technologies:

- React
- Bootstrap
- Tailwind CSS

## 6.2 Version Control

Git and GitHub should be used for:

- Source-code management
- Version control
- Project backup
- Public project repositories

## 6.3 Deployment

The website may be deployed using:

- GitHub Pages
- Netlify
- Vercel
- Other suitable web-hosting services

## 6.4 Backend

A backend is **not required for the first version**.

If a contact form requires server-side processing, a suitable backend service may be added later.

---

# 7. Data Requirements

The portfolio shall maintain the following information:

| Data Category | Required Information |
|---|---|
| Personal | Name, professional title, profile image |
| Contact | Email, LinkedIn, GitHub |
| Education | Institution, degree, dates, coursework |
| Skills | Programming, web, database, tools, QA, UI/UX |
| Projects | Name, description, technologies, links |
| Certifications | Certificate name, provider, verification link |
| Achievements | Awards, competitions, activities |
| Languages | Language and proficiency |
| Soft Skills | Personal/professional skills |

---

# 8. System Constraints

- The website should work without requiring visitors to create an account.
- The website should not expose private or unnecessary personal information.
- External services and links may change and should be easy to update.
- The website must remain usable on mobile devices.
- The first release should prioritize portfolio presentation rather than complex backend functionality.

---

# 9. Use Cases

## UC-01: View Portfolio

**Actor:** Visitor

**Steps:**
1. Visitor opens the portfolio website.
2. System displays the home section.
3. Visitor navigates through portfolio sections.
4. System displays requested information.

**Result:** Visitor can review the professional profile.

## UC-02: View Project

**Actor:** Visitor

**Steps:**
1. Visitor opens Projects.
2. System displays project cards.
3. Visitor selects a project.
4. System displays project details and available links.

**Result:** Visitor can understand the project and access its repository/demo.

## UC-03: Contact Portfolio Owner

**Actor:** Visitor

**Steps:**
1. Visitor opens Contact.
2. Visitor views email, LinkedIn, and GitHub.
3. Visitor selects the required communication method.

**Result:** Visitor can contact or connect with the portfolio owner.

## UC-04: Download CV

**Actor:** Visitor

**Steps:**
1. Visitor selects Download CV.
2. System provides the latest CV PDF.
3. Visitor downloads or views the CV.

---

# 10. Acceptance Criteria

The portfolio website will be considered complete when:

- [ ] The website is professional and visually consistent.
- [ ] All major portfolio sections are available.
- [ ] Personal information is displayed correctly.
- [ ] Education information is displayed correctly.
- [ ] Technical skills are categorized clearly.
- [ ] Projects include descriptions and technologies.
- [ ] GitHub and LinkedIn links work correctly.
- [ ] Certifications are displayed.
- [ ] Achievements are displayed.
- [ ] Contact information is accessible.
- [ ] CV can be downloaded.
- [ ] The website is responsive on mobile, tablet, and desktop.
- [ ] Major browsers display the website correctly.
- [ ] Images are optimized.
- [ ] Navigation works correctly.
- [ ] No broken links or major UI errors remain.
- [ ] The source code is stored in GitHub.

---

# 11. Future Enhancements

Possible future features include:

- Blog section
- Dark mode
- Project filtering by technology
- Animated skill indicators
- Certificate verification links
- Contact form with email integration
- Visitor analytics
- Admin dashboard for updating content
- Multilingual support
- AI-powered portfolio assistant
- Detailed case studies for projects

---

# 12. Conclusion

The proposed portfolio website will provide a professional online representation of Mohammed Thasneem Fathima Samra's academic background, technical skills, projects, certifications, achievements, and career interests.

The system should prioritize **professional design, responsive behavior, usability, accessibility, performance, and maintainability**. The website will serve as a central platform for presenting the user's work to recruiters, lecturers, clients, and other professional visitors.
