import "./Contact.css";
import "./Form.css";
import Form from "./Form";
import { ContactItem } from "./ContactItem";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h4>Get in touch</h4>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className=" contact__options">
          <ContactItem
            icon={<MdOutlineEmail className="contact__option-icon" />}
            util="email"
            name="gabg4224@gmail.com"
            source="mailto:gabg4224@gmail.com"
          />

          <ContactItem
            icon={<BsWhatsapp className="contact__option-icon" />}
            util="whatsapp"
            name="+54 11 5843-8872"
            source={"https://wa.me/541158438872"}
          />
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
