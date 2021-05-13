import { Button } from "../components/Button";
import { useState } from "react";
import Title from "../components/Title";

const ContactForm = () => {
    const [button, setButton] = useState(true);
    return (
        <section id="contact">
        <Title title="CONTACT" />
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="ENTER YOUR NAME*"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="ENTER YOUR EMAIL*"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                name="phone"
                placeholder="ENTER YOUR PHONE*"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="3"
                placeholder="YOUR MESSAGE*"
              ></textarea>
            </div>

            {button && <Button buttonStyle="btn--red">Submit</Button>}
          </form>
        </div>
      </section>
    )
}

export default ContactForm
