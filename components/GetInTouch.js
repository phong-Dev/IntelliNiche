import { Button } from "../components/Button";
import { useState } from "react";

const GetInTouch = () => {
    const [button, setButton] = useState(true);
    return (
        <section id="getInTouch">
        <div className="text-center">
          <h5>
            <b>Interested in discussing a project?</b>
          </h5>
          <h5>Let’s build something great.</h5>
          {button && <Button buttonStyle="btn--primary">Get in touch</Button>}
        </div>
      </section>
    )
}

export default GetInTouch
