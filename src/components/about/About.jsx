import "./About.css";
import ME from "../../assets/gus2.jpg";
import AboutSocials from "./AboutSocials";
import CallToAction from "./CallToAction";
import PortfolioJobs from "../Utils/PortfolioJobs";

const About = () => {
  return (
    <section id="about">
      <h4>Get to know</h4>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <AboutSocials />

          <p className="text-light">
            {/*Hello! My name is Micael, and I am a Front-end developer from
            Buenos Aires, Argentina. I love learning and working with new
  technologies and I aspire to be the best developer I can become.*/}
            Hola! mi nombre es{" "}
            <strong style={{ color: "#fff" }}>Gustavo</strong>, y soy un{" "}
            <strong style={{ color: "#fff" }}>Desarrollador Front-end</strong>,
            de Aragua, Venezuela, actualmente resido en Buenos Aires, Argentina.
            Me gusta aprender y trabajar con nuevas tecnologias y aspiro ser el
            mejor desarrollador en el que puedo convertirme.
          </p>
        </div>
      </div>

      <CallToAction />
    </section>
  );
};

export default About;
