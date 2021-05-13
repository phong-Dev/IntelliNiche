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
      {/* ----------- core value----------- */}
      <div>
            <Title title="Core values and facts"/>
            <div className="container">
                <div className="row">
                    <div className="spaceabout"></div>
                    <div className="col-md-4">
                        <h2><b>Global team, local free</b></h2><br/>
                        <p>We're a tightly knit global teams, with offices in 6 major cities across the world
                            We're assionate about learning, developing ourselves professionally and creating 
                            inovative digital products for clients around the world.
                        </p><br/>
                        <hr className="hrabout"/><br/>
                        <h2>20</h2>
                        <h4>Talented employees</h4><br/>
                        <hr className="hrabout"/>
                    </div>
                    <div className="col-md-4">
                        <h2><br/><b>Diverse client roster</b></h2><br/>
                        <p>Our clients are a mix of Fortune 1000 exterprises (Zoetis, Aple, Tesla), 
                            newly-funded ventures (CloudVelox, Marlette Funding, SwiftStack), and large
                            NGO's (UNICEF, World Food Program and The European Commission.)
                        </p><br/>
                        <hr className="hrabout"/><br/>
                        <h2><b>Agile approach</b></h2>
                        <p>Our approach is fast, flexible, and collaborative3. All IntelliNiche clients have 
                            direct access to our leadership team, plus a designated Product Manager who is responsible
                            for making sure we thoroughly understand client expectations and deliver to them.
                        </p>
                        <hr className="hrabout"/>
                    </div>
                    <div className="col-md-4">
                        <h2><b>Process</b></h2><br/>
                        <p>We create bussiness impact via a proven approach to identifyin and delivering on digital opprotunities,
                            using best-in-class techniques such as design thinking, rapid protyping and 
                            UXD. Our process includes aspects of the Google Ventures Design Sprint and 
                            Standford's d.school methodology.
                        </p>
                        <br/>
                        <hr className="hrabout"/>
                        <br/>
                        <h2><b>2020</b></h2>
                        <h4>year founded</h4>
                        <br/>
                        <hr className="hrabout"/>
                    </div>
                </div>
            </div>

        </div>
      {/* -----------end core value--------- */}
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
