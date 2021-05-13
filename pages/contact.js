import Head from "next/head";
import Title from "../components/Title";
import { Button } from "../components/Button";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
    const [button, setButton] = useState(true);
    return (
        <>
      <Head>
        <title>Contact</title>
      </Head>
      {/* -----------header--------- */}
      <header id="contact">
        <div className="row banner">
          <div className="banner-text">
            <h1>We build digital products that power business</h1>
            <p>
              Our focus is the agile development of web, cloud, and mobile
              applications - and helping organizations create and sustain
              digital innovation
            </p>
          </div>
          </div>
      </header>
      {/* --------end header------------- */}
      {/* ------------contact--------------- */}
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
      {/* --------------end contact-------------------- */}
      {/* ---------------map contact---------------- */}
      <section>
        <div className="map-contact">
        <Image
                src="/picture/map_contact.svg"
                alt="map"
                width={1029}
                height={538}
              />
        </div>
      </section>
      {/* -------------------end map contact------------- */}
      </>
    )
}

export default Contact
