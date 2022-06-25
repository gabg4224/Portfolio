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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          culpa dolorum ea, unde, laborum tenetur iure laudantium facilis quis
          maxime a nulla est corporis, nihil necessitatibus nisi repellendus
          mollitia obcaecati.
        </p>
       
        </div>
       
       
      </div>

      <CallToAction />
    </section>
  );
};

export default About;
