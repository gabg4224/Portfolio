import "./About.css";
import ME from "../../assets/gus2.jpg";
import AboutSocials from "./AboutSocials";
import CallToAction from "./CallToAction";

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
            Hello! My name is <strong style={{ color: "#fff" }}>Gustavo</strong>
            , and I am a{" "}
            <strong style={{ color: "#fff" }}>Front-end developer</strong> from
            Aragua, Venezuela, i currently reside in Buenos Aires, Argentina. I
            love learning and working with new technologies and I aspire to be
            the best developer I can become.
          </p>
        </div>
      </div>

      <CallToAction />
    </section>
  );
};

export default About;
