import logo from './logo.svg';
import './App.css';

function App() {
  return (
<body>
    <header class="nav">
        <div class="nav-left-div">
                <span class="nav-name">Michael Moss / Full Stack Software Engineer</span>
        </div>
        <div class="nav-right-div">
            <a href="#projects-section" class="nav-link">Projects</a>
            <a href="#skills-section"class="nav-link">Skills</a>
            <a href="#about-me-section"class="nav-link">About Me</a>
            <a href="#connect-section"class="nav-link">Connect</a>
        </div>
    </header>
    <main>
        <Section id="hero-section">
            <span style="font-size: 90px;">Hello!</span>
            <span style="font-size: 20px; margin-left: 20px; margin-right: 20px;">My name is Michael Moss. I'm a full-stack software engineer!</span>
        </Section>

        <section id="projects-section">
            <h1>Projects</h1>
            <div class="inner-div" id="rehomr">
                <div class="inner-left-div">
                    <img class="project-img" src="assets/rehomr.png">
                    <div class="project-button-div">
                        <a href="https://rehomr-58ea4d4dc5ca.herokuapp.com/"><button class="general-button">Site</button></a>
                        <a href="https://github.com/MichaelBMoss/rehomr"><button class="general-button">Github</button></a>
                    </div>
                </div>
                <div class="inner-right-div">
                    <h2>reHomr</h2>
                    <p>Built with the Mern Stack, reHomr is a web application designed to streamline the process of connecting pets in need of a home with individuals or families looking to adopt. The platform serves as a bridge between pet owners or rescue organizations and potential adopters, facilitating the adoption process and providing a centralized space for users to explore, learn about, and connect with pets.</p>
                </div>
            </div>
            <div class="inner-div" id="simmr">
                <div class="inner-left-div">
                    <img class="project-img" src="assets/simmr.png">
                    <div class="project-button-div">
                        <a href="https://simmr-a4e862a95079.herokuapp.com/"><button class="general-button">Site</button></a>
                        <a href="https://github.com/MichaelBMoss/simmr"><button class="general-button">Github</button></a>
                    </div>
                </div>
                <div class="inner-right-div">
                    <h2>Simmr</h2>
                    <p>On Simmr food enthusiasts come together to share, explore, and celebrate the art of cooking. Both seasoned chefs and an aspiring home cooks enjoy the welcoming space to share favorite recipes, discover unique culinary creations, and connect with a diverse community. From mouth-watering dishes to innovative cooking techniques, Simmr is a go-to destination for all things food. Simmr was built with Django and PostgreSQL.
                    </p>
                </div>
            </div>
            <div class="inner-div" id="wardrobe-aspiration-library">
                <div class="inner-left-div">
                    <img class="project-img" src="assets/wal.png">
                    <div class="project-button-div">
                        <a href="https://wardrobe-aspiration-library-bb6858182927.herokuapp.com/"><button class="general-button">Site</button></a>
                        <a href="https://github.com/MichaelBMoss/Mongodb_Express_Node.js-Wardrobe-Aspiration-Library"><button class="general-button">Github</button></a>
                    </div>
                </div>
                <div class="inner-right-div">
                    <h2>Wardrobe Aspiration Library</h2>
                    <p>With Wardrobe Aspiration Library (WAL) users have a digital repository for the attire they aspire to. Once users have created a profile, they can add images and information about cool gear from brand websites, clothing retailers and e-commerce platforms like Etsy and Ebay. WAL allows users to share their unique style, explore the fashion choices of others, discover stylish clothing items, and express themselves creatively. Visiting a user's WAL is an excellent idea when searching for a gift they'll truly appreciate!</p>
                </div>
            </div>
            <div class="inner-div" id="battle-of-ships">
                <div class="inner-left-div">
                    <img class="project-img" src="assets/battle-of-ships.png">
                    <div class="project-button-div">
                        <a href="https://michaelbmoss.github.io/Static_Game-Battle_of_Ships/"><button class="general-button">Site</button></a>
                        <a href="https://github.com/MichaelBMoss/Static_Game-Battle_of_Ships"><button class="general-button">Github</button></a>
                    </div>
                </div>
                <div class="inner-right-div">
                    <h2>Battle of Ships</h2>
                    <p>
                        Battle of Ships is an interactive web game inspired by Battleship, created using HTML, CSS, and JavaScript with a strong focus on DOM manipulation. Designed for both mobile and desktop platforms, it offers a classic gaming experience with modern twists. Players strategically aim to sink the enemy fleet before their ammunition is depleted. The game uses open-source and AI-generated imagery and sound effects.</p>
                </div>
            </div>
            <div class="inner-div" id="currency-value-chart">
                <div class="inner-left-div">
                    <img class="project-img" src="assets/CVA.png">
                    <div class="project-button-div">
                        <a href="https://michaelbmoss.github.io/React_SPA-Currency_Value_Chart/"><button class="general-button">Site</button></a>
                        <a href="https://github.com/MichaelBMoss/React_SPA-Currency_Value_Chart"><button class="general-button">Github</button></a>
                    </div>
                </div>
                <div class="inner-right-div">
                    <h2>Currency Value Chart</h2>
                    <p>
                        Currency Value Chart is a React-based front-end web app showcasing API integration and CSS transitions. The app features an interactive bar chart displaying the values of popular world currencies relative to the US dollar. Users can select and compare up to five currencies, with dynamic bar sizing for easy visualization. Data is sourced from the Exchange Rates Data API by apilayer.com.</p>
                </div>
            </div>
        </section>

        <section class="white-to-blue"></section>

        <section id="skills-section">
            <h1>Skills</h1>
            <div id="skills-inner-div">
                <div class="skill-category-div">
                    <h4 style="text-align: center;">Programming Languages</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                    </ul>
                </div>
                
                <div class="skill-category-div">
                    <h4 style="text-align: center;">APIs and Data Exchange</h4>
                    <ul>
                        <li>API integration</li>
                        <li>AJAX (Server communication)</li>
                        <li>Token-based authentication</li>
                        <li>Google OAuth (User Authentication)</li>
                    </ul>
                </div>

                <div class="skill-category-div">
                    <h4 style="text-align: center;">Server-Side Technologies</h4>
                    <ul>
                        <li>Node.js (Runtime environment for JavaScript)</li>
                        <li>PostgreSQL (database)</li>
                        <li>MongoDB (database)</li>
                        <li>Mongoose (MongoDB library)</li>
                    </ul>
                </div>
                
                <div class="skill-category-div">
                    <h4 style="text-align: center;">Cloud Services</h4>
                    <ul>
                        <li>Amazon S3 (Photo Storage)</li>
                        <li>Heroku (Application host)</li>
                    </ul>
                </div>

                <div class="skill-category-div">
                    <h4 style="text-align: center;">Web Frameworks and Libraries</h4>
                    <ul>
                        <li>Django (Python web framework)</li>
                        <li>Express (Node.js web framework)</li>
                        <li>React (JavaScript library)</li>
                    </ul>
                </div>

                <div class="skill-category-div">
                    <h4 style="text-align: center;">Version Control and Collaboration</h4>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Trello</li>
                    </ul>
                </div>
                
            </div>
        </section>

        <section class="blue-to-white"></section>

        <section id="about-me-section">
            <h1>About Me</h1>
            <div class="inner-div" id="about-me-inner-div">
                <p class="about-me-p">I have always enjoyed crafting solutions to complex problems. After spending almost a decade specializing in the teaching of logic and problem solving I became fascinated with the recent developments in artificial intelligence. I completed a 480 hour software engineering immersive program and I now apply my skills to coding and software development.
                
                Beyond coding, I love to have a laugh. I love live comedy, cult films, pastrami sandwiches and my adorable chihuahua, Pepe. I'm excited to contribute my coding skills to the tech world. Let's connect and explore how I can be an asset to your team.</p>
                <img class="about-me-img" src="assets/mike.png">
            </div>
        </section>

        <section class="white-to-blue"></section>

        <section id="connect-section">
            <h1>Connect</h1>
            <div id="connect-inner-div">
                <a href="assets/Michael Moss Resume.pdf"></ahref>Download My Resume</a>
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
