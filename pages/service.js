import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Button";
import { useState } from "react";

const Service = () => {
  const [button, setButton] = useState(true);
  return (
    <>
      <Head>
        <title>Service</title>
      </Head>
      {/* -----------header--------- */}
      <header id="service">
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
      {/* --------mobile---------------- */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="service-content mt-3">
                <div className="number-service">
                <Image
                src="/picture/03.png"
                alt="03"
                width={250}
                height={180}
              />
                </div>
                <div className="info-service">
                  <h3>Mobile development next-level apps</h3>
                  <p>
                    We build innovation IOS and Android applications for a
                    variety of industries and use-cases
                  </p>
                  <div className="service-button">{button && (
                    <Button buttonStyle="btn--black">IOS development</Button>
                  )}
                  {button && (
                    <Button buttonStyle="btn--black">
                      Android development
                    </Button>
                  )}</div>
                  
                  <p>Read more</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <Image
                src="/picture/mobile.svg"
                alt="mobile"
                width={424}
                height={334}
                className="img-service"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ---------end mobile----------- */}
      {/* --------design---------------- */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            
            <div className="col-md-5 text-center d-flex">
              <Image
                src="/picture/design.svg"
                alt="mobile"
                width={471}
                height={257}
                className="img-service"
              />
            </div>

            <div className="col-md-7">
              <div className="service-content mt-3">
                <div className="number-service">
                <Image
                src="/picture/04.png"
                alt="04"
                width={250}
                height={180}
              />
                </div>
                <div className="info-service">
                  <h3>Mobile development next-level apps</h3>
                  <p>
                    We build innovation IOS and Android applications for a
                    variety of industries and use-cases
                  </p>
                  <div className="service-button">{button && (
                    <Button buttonStyle="btn--black">IOS development</Button>
                  )}
                  {button && (
                    <Button buttonStyle="btn--black">
                      Android development
                    </Button>
                  )}</div>
                  
                  <p>Read more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------end design----------- */}
    </>
  );
};

export default Service;
