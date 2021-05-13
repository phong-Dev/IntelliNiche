import Head from "next/head";
import Title from "../components/Title";
import { Button } from "../components/Button";
import { useState } from "react";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

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
      <ContactForm/>
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
