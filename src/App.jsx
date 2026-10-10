
import './App.css';
import profilePhoto from './assets/aisha.jpg';

function App() {
  return (
    <main className="resume">
      <section className="profile">
        <div className="profile-info">
          <p className="greeting">HELLO, I'M</p>
          <h1>Shabdanova Aisha</h1>
          <h2>Frontend Developer</h2>
          <p className="description">
            I create modern, responsive and user-friendly
            websites using HTML, CSS, JavaScript and React.
          </p>

          <a
            className="github-button"
            href="https://github.com/meow27meow37"
            target="_blank"
            rel="noreferrer"
          >
            Visit my GitHub
          </a>
        </div>

        <div className="profile-image">
          <img className="image-placeholder" src={profilePhoto} alt="Shabdanova Aisha" />
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am learning web development and building projects
          with React. I enjoy creating beautiful websites
          and learning new technologies.
        </p>
      </section>

      <section className="skills">
        <h2>My Skills</h2>
        <div className="skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>

      <footer>
        <p>Contact: aisha07shabdan@gmail.com</p>
        <p>2026 Shabdanova Aisha</p>
      </footer>
    </main>
  );
}

export default App;
