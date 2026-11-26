import './App.css';
function App(){
 return <main>
  <nav><strong>My Portfolio</strong><a href="#about">About</a>
   <a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
  <header><h1>Hello, I'm Your Name</h1>
   <p>MCA Student | Java Developer | Web Developer</p>
   <a className="btn" href="#projects">View Projects</a></header>
  <section id="about"><h2>About Me</h2>
   <p>I am a motivated developer interested in building useful web applications.</p></section>
  <section id="skills"><h2>Skills</h2><p>Java • Spring Boot • MySQL • HTML • CSS • JavaScript • React</p></section>
  <section id="projects"><h2>Projects</h2>
   <article><h3>StayEasy</h3><p>A web platform to discover PG accommodation and list properties.</p></article>
   <article><h3>Portfolio</h3><p>A personal website built with React.</p></article></section>
  <section id="contact"><h2>Contact</h2><p>Email: your.email@example.com</p></section>
  <footer>© {new Date().getFullYear()} Your Name</footer>
 </main>;
}
export default App;
