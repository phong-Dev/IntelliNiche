import Head from "next/head";
import Title from "../components/Title";
import { Button } from "../components/Button";
import { useState } from "react";

const About = () => {
    const [button, setButton] = useState(true);
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      {/* -----------header--------- */}
      <header id="about">
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
      {/* -------------people------------- */}
      <section id="people">
        <Title title="Our people" />
        <div className="filter-people">
          <ul className="menu-people">
            <li className="people-item active">All</li>
            <li className="people-item">Product</li>
            <li className="people-item">Engineering</li>
            <li className="people-item">Design</li>
          </ul>
        </div>
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="view-people"></div>
              <div className="info-people mb-5 mt-3">
                <p>Name</p>
                <p>Engineering</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="view-people"></div>
              <div className="info-people mb-5 mt-3">
                <p>Name</p>
                <p>Engineering</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="view-people"></div>
              <div className="info-people mb-5 mt-3">
                <p>Name</p>
                <p>Engineering</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="view-people"></div>
              <div className="info-people mb-5 mt-3">
                <p>Name</p>
                <p>Engineering</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="view-people"></div>
              <div className="info-people mb-5 mt-3">
                <p>Name</p>
                <p>Engineering</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="view-people"></div>
              <div className="info-people mb-5 mt-3">
                <p>Name</p>
                <p>Engineering</p>
              </div>
            </div>
          </div>
          {button && <Button buttonStyle="btn--black">Read more</Button>}
        </div>
      </section>
      {/* ----------end people------------- */}
      {/* ----------get in touch-------------- */}
      <section id="getInTouch">
        <div className="text-center">
          <h5>
            <b>Interested in discussing a project?</b>
          </h5>
          <h5>Let’s build something great.</h5>
          {button && <Button buttonStyle="btn--primary">Get in touch</Button>}
        </div>
      </section>
      {/* ----------end get in touch--------- */}
    </>
  );
};

export default About;
