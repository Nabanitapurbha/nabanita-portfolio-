import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState("");

  const skills = [
    { icon: "🌐", name: "HTML" },
    { icon: "🎨", name: "CSS" },
    { icon: "⚡", name: "JavaScript" },
    { icon: "⚛️", name: "React" },
    { icon: "👕", name: "T-Shirt Design" },
    { icon: "🐍", name: "Python" },
    { icon: "©️", name: "C" },
    { icon: "💻", name: "C++" },
    { icon: "🗄️", name: "MySQL" },
    { icon: "🔌", name: "Arduino" }
  ];

  const projects = [
    {
      title: "Java Snake Game",
      type: "Java Project",
      image: "https://progolovolomki.ru/img/zmejka-og.webp",
      description:
        "A classic Snake Game developed using Java with simple controls, game logic and score tracking.",
      tag: "Java"
    },
    {
      title: "Smart Attendance System",
      type: "Arduino Project",
      image:
        "https://ih1.redbubble.net/image.5690391332.9921/st%2Csmall%2C507x507-pad%2C600x600%2Cf8f8f8.jpg",
      description:
        "An Arduino-based smart attendance project using hardware components and sensors.",
      tag: "Arduino"
    },
    {
      title: "Campus Event Hub",
      type: "Web Project",
      image: "https://www.uni-chat.com/css/media/blog-10/1.webp",
      description:
        "A university event management platform for creating and managing campus events.",
      tag: "React"
    },
    {
      title: "Quiz Marks Checking System",
      type: "Programming Project",
      image: "https://www.madcityzen.fr/images/quiz-1.png",
      description:
        "A simple programming project for checking quiz marks and displaying students' results.",
      tag: "Programming"
    }
  ];

  /* Only 2 T-shirt design spaces */
  const tshirts = [
    "/pic jpng1.jpeg",
    "/pic jpng2.jpeg"
  ];

  // Google Sheet-এ message পাঠানোর function
  async function sendMessage(e) {
    e.preventDefault();

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbw9dqlB_I-BNcJzJcums8rjVY2FM8UHKyPTI7lpodWxeeloHbYZlsmFweGJ8L74tJiK/exec";

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message")
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data)
      });

      setSent("Message sent successfully! ✨");

      e.target.reset();
    } catch (error) {
      setSent("Something went wrong. Please try again.");
    }
  }

  return (
    <div className={dark ? "app dark" : "app"}>

      {/* LEFT SIDEBAR */}

      <aside className="sidebar">

        <div className="sideLogo">
          <h1>Nabanita.</h1>
          <p>STUDENT • DESIGNER • DEVELOPER</p>
        </div>

        <div className="sideMenu">
          <a href="#home">⌂ &nbsp; Home</a>
          <a href="#about">♧ &nbsp; About</a>
          <a href="#skills">✦ &nbsp; Skills</a>
          <a href="#projects">▣ &nbsp; Projects</a>
          <a href="#education">🎓 &nbsp; Education</a>
          <a href="#contact">✉ &nbsp; Contact</a>
        </div>

        <div className="sideQuote">
          <span>learn.</span>
          <b>create.</b>
          <span>repeat.</span>
        </div>

        {/* GIRL IMAGE */}

        <div className="sideGirl">

          <div className="girlFlower flowerA">
            ✿
          </div>

          <img
            src="/girl.png"
            alt="Creative girl"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="girlFlower flowerB">
            ❀
          </div>

        </div>

        <div className="sideLearning">
          <strong>Currently Learning</strong>
          <p>Frontend Development</p>
          <p>React & JavaScript</p>
          <p>UI / UX Design</p>
        </div>

        <div className="sideFollow">
          <p>FOLLOW MY JOURNEY</p>
          <span>♡ Coding • Design • Ideas</span>
        </div>

        <div className="sideFlower">
          ✿
        </div>

      </aside>

      {/* MAIN */}

      <main>

        {/* NAVBAR */}

        <header className="navbar">

          <div className="mobileLogo">
            Nabanita.
          </div>

          <nav className={menu ? "navOpen" : ""}>

            <a
              href="#home"
              onClick={() => setMenu(false)}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenu(false)}
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenu(false)}
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenu(false)}
            >
              Projects
            </a>

            <a
              href="#education"
              onClick={() => setMenu(false)}
            >
              Education
            </a>

            <a
              href="#contact"
              onClick={() => setMenu(false)}
            >
              Contact
            </a>

          </nav>

          <button
            className="darkBtn"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀" : "☾"}
          </button>

          <button
            className="menuBtn"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "✕" : "☰"}
          </button>

        </header>

        {/* HERO */}

        <section className="hero" id="home">

          <div className="paperBlob blob1"></div>
          <div className="paperBlob blob2"></div>

          <div className="heroText">

            <p className="hi">
              Hi, I'm
            </p>

            <h1>
              Nabanita <span>Bhattacharjee</span>
            </h1>

            <h3>
              CSE Student | Learning Frontend Development
            </h3>

            <p className="heroIntro">
              I'm a Computer Science and Engineering student who has
              recently started exploring frontend development and
              modern web technologies.
            </p>

            <div className="heroButtons">

              <a href="#projects">
                View My Projects
              </a>

              <a href="#contact">
                Contact Me
              </a>

            </div>

          </div>

          {/* PROFILE PHOTO AREA */}

          <div className="photoArea">

            <div className="photoFlower flowerLeft">
              <span>✿</span>
              <i>❀</i>
              <b>✦</b>
            </div>

            <div className="tape"></div>

            <div className="photoFrame">

              <img
                src="/profile.jpg"
                alt="Nabanita"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80";
                }}
              />

            </div>

            <div className="photoFlower flowerRight">
              <span>❀</span>
              <i>✿</i>
              <b>♡</b>
            </div>

            <div className="dreamText">
              dream
              <br />
              & create
            </div>

            <div className="doodle d1">✦</div>
            <div className="doodle d2">♡</div>
            <div className="doodle d3">✧</div>

          </div>

        </section>

        {/* ABOUT */}

        <section
          className="section about"
          id="about"
        >

          <div className="sectionTitle">

            <small>
              01 — A LITTLE ABOUT ME
            </small>

            <h2>
              About <span>Me</span>
            </h2>

          </div>

          <div className="aboutContent">

            <div className="aboutText">

              <p>
                I am a Computer Science and Engineering Student
                who is currently learning frontend development
                and exploring modern web technologies.
              </p>

              <p>
                I enjoy creating simple, clean and interesting
                interfaces while learning new programming concepts.
              </p>

              <p>
                Apart from coding, I also enjoy designing T-shirts
                and experimenting with creative ideas.
              </p>

            </div>

            <div className="personality">

              <h3>
                My Little World ✦
              </h3>

              <div className="personalityItems">

                <div>
                  <strong>💻</strong>
                  <b>CODING</b>
                  <p>Learning & building</p>
                </div>

                <div>
                  <strong>🎨</strong>
                  <b>DESIGN</b>
                  <p>Creative ideas</p>
                </div>

                <div>
                  <strong>☕</strong>
                  <b>LEARNING</b>
                  <p>Every single day</p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* SKILLS */}

        <section
          className="skills"
          id="skills"
        >

          <div className="sectionTitle darkTitle">

            <small>
              02 — WHAT I WORK WITH
            </small>

            <h2>
              My <span>Digital Desk</span>
            </h2>

          </div>

          <p className="skillIntro">
            A collection of technologies and creative skills
            that I am currently learning and practicing.
          </p>

          <div className="skillBoard">

            {skills.map((skill, index) => (

              <div
                className="skillBox"
                key={index}
              >

                <strong>
                  {skill.icon}
                </strong>

                <span>
                  {skill.name}
                </span>

              </div>

            ))}

          </div>

          <div className="deskDecor">
            ✦ — keep learning — ✦
          </div>

        </section>

        {/* PROJECTS */}

        <section
          className="section projects"
          id="projects"
        >

          <div className="sectionTitle">

            <small>
              03 — THINGS I'VE BUILT
            </small>

            <h2>
              My <span>Projects</span>
            </h2>

          </div>

          <div className="realProjects">
            real projects • real learning ✦
          </div>

          <div className="projectGrid">

            {projects.map((project, index) => (

              <article
                className="projectCard"
                key={index}
              >

                <div className="pin">
                  ●
                </div>

                <div className="projectImage">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                </div>

                <small>
                  {project.type}
                </small>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <label>
                  {project.tag}
                </label>

                <button>
                  →
                </button>

              </article>

            ))}

          </div>

        </section>

        {/* T-SHIRT DESIGN */}

        <section
          className="tshirt"
          id="tshirt"
        >

          <div className="shirtInfo">

            <small>
              04 — MY CREATIVE SIDE
            </small>

            <h2>
              T-Shirt <span>Artist</span>
            </h2>

            <p>
              Along with coding, I enjoy creating simple T-shirt
              designs and experimenting with typography,
              graphics and creative ideas.
            </p>

            <a href="#contact">
              Let's Create
            </a>

          </div>

          <div className="shirtGrid">

            {tshirts.map((shirt, index) => (

              <div
                className="shirtCard"
                key={index}
              >

                <img
                  src={shirt}
                  alt={`T-shirt design ${index + 1}`}
                />

                <span>
                  ✦
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* EDUCATION */}

        <section
          className="section education"
          id="education"
        >

          <div className="sectionTitle">

            <small>
              05 — MY EDUCATION
            </small>

            <h2>
              <span>Education</span>
            </h2>

          </div>

          <div className="educationRow">

            <div className="eduCard">

              <b>
                PRESENT
              </b>

              <h3>
                B.Sc. in Computer Science & Engineering
              </h3>

              <p>
                Metropolitan University, Sylhet
              </p>

            </div>

            <i>
              ✦
            </i>

            <div className="eduCard">

              <b>
                HSC — 2022
              </b>

              <h3>
                Higher Secondary Certificate
              </h3>

            </div>

            <i>
              ✦
            </i>

            <div className="eduCard">

              <b>
                SSC — 2020
              </b>

              <h3>
                Secondary School Certificate
              </h3>

            </div>

          </div>

        </section>

        {/* CONTACT */}

        <section
          className="contact"
          id="contact"
        >

          <div className="contactText">

            <small>
              06 — SAY HELLO
            </small>

            <h2>
              Let's <span>Talk!</span>
            </h2>

            <p>
              Have a project idea, suggestion or just want to
              say hello? Feel free to send me a message.
            </p>

            <div className="contactDetails">

              <p>
                ✉ nabanitapurbha007@gmail.com
              </p>

              <p>
                📍 Sylhet, Bangladesh
              </p>

            </div>

          </div>

          <form onSubmit={sendMessage}>

            <div className="formTitle">
              drop me a line ✎
            </div>

            <div className="formInputs">

              {/* NAME */}
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />

              {/* SUBJECT */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              {/* MESSAGE */}
              <textarea
                name="message"
                placeholder="Your message..."
                required
              ></textarea>

            </div>

            <button type="submit">
              Send Message ✦
            </button>

            {sent && (
              <p className="success">
                {sent}
              </p>
            )}

          </form>

        </section>

        {/* FOOTER */}

        <footer>

          <div className="footerName">
            Nabanita.
          </div>

          <div className="footerMiddle">

            <small>
              MADE WITH CODE & CREATIVITY
            </small>

            <h3>
              Thanks for visiting ♡
            </h3>

          </div>

          <div className="footerRight">
            © 2026 Nabanita Bhattacharjee
          </div>

        </footer>

      </main>

    </div>
  );
}

export default App;