import "./App.css";

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="Container">
        <div className="side-bar">
          <ul>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => scrollToSection("skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="left">
          <div className="about" id="about">
            <h2>About Me</h2>
            <p>
              I am a Computer Engineering student at The Chinese University of
              Hong Kong. I have a passion for software development and enjoy
              working on projects that challenge my skills and creativity.
            </p>
          </div>
          <div className="skills" id="skills">
            <h2>Skills</h2>
            <p>
              I have experience in various programming languages and
              technologies, including frontend development, backend development, and database management. I
              am always eager to learn new skills and improve my knowledge in
              the field of computer engineering.
            </p>
          </div>
          <div className="projects" id="projects">
            <h2>Projects</h2>
            <ul>
              <li>
                <strong>Portfolio Website</strong> - A personal portfolio
                website to showcase my skills and projects.
              </li>
              <li>
                <strong>AI Chatting Web App</strong> - A web application to
                manage AI-driven chat interactions.
              </li>
              <li>
                <strong>Hong Kong Mahjong Calculator Mobile App</strong> - A
                mobile application that calculates scores for Hong Kong Mahjong
                games.
              </li>
            </ul>
            <h3>1. Portfolio Website</h3>
            <p>This is the website that you are currently viewing.</p>
            <a
              href="https://ysulchaum.github.io/personal-website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ysulchaum.github.io/personal-website/
            </a>
            <ul>
              <li>
              <strong>Technologies Used:</strong>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS</li>
                <li>Caddy</li>
                <li>Docker</li>
              </ul>
              </li>
              <li>
              <strong>Features:</strong>
              <ul>
                <li>Static website</li>
                <li>Clean layout</li>
              </ul>
              </li>
            </ul>
            <h3>2. AI Chatting Web App</h3>
            <div>
              <p>
                A web application that allows users to engage in AI-driven chat
                interactions. Here is the link to the project:
              </p>
              <a
                href="https://sythpartner.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://sythpartner.com
              </a>
                <ul>
                <li>
                  <strong>Technologies Used:</strong>
                  <ul>
                  <li><strong>Frontend:</strong> React, TypeScript, CSS</li>
                  <li><strong>Backend:</strong> Flask-cors, Socketio (Python)</li>
                  <li><strong>Database:</strong> MySQL</li>
                  <li><strong>Payment Integration:</strong> Stripe</li>
                  <li><strong>Deployment:</strong> Docker, Caddy</li>
                  </ul>
                </li>
                <li>
                  <strong>Features:</strong>
                  <ul>
                  <li>Real-time chat</li>
                  <li>User authentication</li>
                  <li>Responsive design</li>
                  <li>AI image generation (Stable Diffusion)</li>
                  <li>Payment integration with Stripe</li>
                  </ul>
                </li>
                </ul>
            </div>
            <h3>3. Hong Kong Mahjong Calculator Mobile App</h3>
            <p>
              A mobile application that calculates scores for Hong Kong Mahjong
              games. Here is the link to the project:
            </p>
            <a
              href="https://github.com/ysulchaum/hong-kong-majong-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/ysulchaum/hong-kong-majong-app
            </a>
            <ul>
              <li>
                <strong>Technologies Used:</strong>
                <ul>
                  <li>Android Studio</li>
                  <li>Java</li>
                  <li>XML</li>
                  <li>Gradle</li>
                  <li>Android SDK</li>
                </ul>
              </li>
              <li>
                <strong>Features:</strong>
                <ul>
                  <li>Score calculation for Hong Kong Mahjong</li>
                  <li>User-friendly interface</li>
                  <li>Android mobile app</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="contact" id="contact">
            <h2>Contact</h2>
            <p>
              Feel free to reach out to me via email at{" "}
              <a href="mailto:ysulchaum@gmail.com">ysulchaum@gmail.com</a> or
              connect with me with phone number 55085415.
            </p>
            
          </div>
        </div>
        <div className="right">
          <img src="src/assets/me.png" className="me-image" alt="me" />
          <h1 className="my-name">Yu Sui Chung</h1>
          <h2 className="my-title">
            Computer Engineering <br /> The Chinese University of Hong Kong{" "}
            <br /> ysulchaum@gmail.com | 55085415
          </h2>
          <a
            href="https://github.com/ysulchaum"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <img
              src="src/assets/github-mark-white.svg"
              alt="GitHub"
              style={{
                width: 24,
                height: 24,
                marginRight: 8,
                verticalAlign: "middle",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
