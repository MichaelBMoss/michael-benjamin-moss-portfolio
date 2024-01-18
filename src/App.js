import './App.css';
import projectsData from './projectsData';
import skillsData from './skillsData';
import ProjectCard from './ProjectCard';
import SkillCard from './SkillCard';

function App() {
  return (
<body>
    <header className="nav">
        <div className="nav-left-div">
                <span className="nav-name">Michael Moss / Full Stack Software Engineer</span>
        </div>
        <div className="nav-right-div">
            <a href="#projects-section" className="nav-link">Projects</a>
            <a href="#skills-section"className="nav-link">Skills</a>
            <a href="#about-me-section"className="nav-link">About Me</a>
            <a href="#connect-section"className="nav-link">Connect</a>
        </div>
    </header>
    <main>
    <section id="hero-section">
      <span style={{ fontSize: '90px' }}>Hello!</span>
      <span style={{ fontSize: '20px', marginLeft: '20px', marginRight: '20px' }}>My name is Michael Moss. I'm a full-stack software engineer!</span>
    </section>


        <section id="projects-section">
            <h1>Projects</h1>
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                imageUrl={project.imageUrl}
                siteUrl={project.siteUrl}
                githubUrl={project.githubUrl}
                title={project.title}
                description={project.description}
              />
            ))}
        </section>

        <section className="white-to-blue"></section>

        <section id="skills-section">
            <h1>Skills</h1>
            <div id="skills-inner-div">
              {skillsData.map((categoryData, index) => (
                <SkillCard
                  key={index}
                  category={categoryData.category}
                  skills={categoryData.skills}
                />
              ))}   
            </div>
        </section>

        <section className="blue-to-white"></section>

        <section id="about-me-section">
            <h1>About Me</h1>
            <div className="inner-div" id="about-me-inner-div">
                <p className="about-me-p">I have always enjoyed crafting solutions to complex problems. After spending almost a decade specializing in the teaching of logic and problem solving I became fascinated with the recent developments in artificial intelligence. I completed a 480 hour software engineering immersive program and I now apply my skills to coding and software development.
                
                Beyond coding, I love to have a laugh. I love live comedy, cult films, pastrami sandwiches and my adorable chihuahua, Pepe. I'm excited to contribute my coding skills to the tech world. Let's connect and explore how I can be an asset to your team.</p>
                <img className="about-me-img" src="assets/mike.png" alt='portrait of Michael Moss' />
            </div>
        </section>

        <section className="white-to-blue"></section>

        <section id="connect-section">
            <h1>Connect</h1>
            <div id="connect-inner-div">
                <a href="assets/Michael Moss Resume.pdf">Download My Resume</a>
                <span>Email: MichaelBMoss@gmail.com</span>
                <a href="https://www.linkedin.com/in/michaelbmoss">LinkedIn: https://www.linkedin.com/in/michaelbmoss</a>
                <a href="https://github.com/MichaelBMoss">Github: https://github.com/MichaelBMoss</a>
            </div>
        </section>
    </main>
</body>
  );
}

export default App;
