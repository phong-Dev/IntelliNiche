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

      {/* --------body------------- */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="service-content mt-3">
                <div className="number-service">
                <Image
                src="/picture/01.png"
                alt="01"
                width={200}
                height={180}
              />
                </div>
                <div className="info-service">
                  <h3>Backend Web Development Powering your applications</h3>
                  <p>
                  Rock-solid, reliable backend development ensures your business logic works as it
                  </p>
                  <div className="service-button">{button && (
                    <Button buttonStyle="btn--black">API development</Button>
                  )}
                  {button && (
                    <Button buttonStyle="btn--black">
                      Database Development
                    </Button>
                  )}
                  </div>
                  <div className="service-button">
                    {button && (<Button buttonStyle="btn--black" >
                      Django Development
                    </Button>)}
                    {button && (<Button buttonStyle="btn--black">
                      DevOps Consulting
                    </Button>)}
                    </div>
                  
                  <p>Read more</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <Image
                src="/picture/backend.svg"
                alt="backend"
                width={452}
                height={362}
                className="img-service"
              />
            </div>
          </div>
        </div>
      </section>

      {/*..2*/}
      <section className="service-section">
        <div className="container">
          <div className="row">
            
            <div className="col-md-5 text-center d-flex">
              <Image
                src="/picture/frontend.svg"
                alt="frontend"
                width={484}
                height={251}
                className="img-service"
              />
            </div>

            <div className="col-md-7">
              <div className="service-content mt-3">
                <div className="number-service">
                <Image
                src="/picture/02.png"
                alt="02"
                width={250}
                height={180}
              />
                </div>
                <div className="info-service">
                  <h3>Frontend Web Development Interfaces that delight</h3>
                  <p>
                  Fontend development sits at the intersection of 3 pillars: clean code, 
                beautiful design and intuitive usability. We guarantee all three
                  </p>
                  <div className="service-button">{button && (
                    <Button buttonStyle="btn--black">Angular Development</Button>
                  )}
                  {button && (
                    <Button buttonStyle="btn--black">
                      React development
                    </Button>
                  )}</div>
                  
                  <p>Read more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <div>
        <div className="container">
          <div className="row divservice1">
            <div className="col-md-6 serviceground1">
              <h1>Backend Web Development Powering your applications</h1><br/>
              <p>Rock-solid, reliable backend development ensures your business logic works as it</p><br/>
              {button && <Button buttonStyle="btn--black" className="buttonservice1">API Development</Button>}&emsp;
              {button && <Button buttonStyle="btn--black" className="buttonservice1">Database Development</Button>}<br/>
              {button && <Button buttonStyle="btn--black" className="buttonservice1">Django Development</Button>}&emsp;
              {button && <Button buttonStyle="btn--black" className="buttonservice1">DevOps Consulting</Button>}<br/>
              <br/>
              <p><a href="#"> read more  &rarr;</a></p>
            </div>
            <div className="col-md-6 ">
              <img src="picture/backend.svg"></img>
            </div>
          </div>

          <div className="row divservice2">
            <div className="col-md-6">
              <img src="picture/frontend.svg"></img>
            </div>
            <div className="col-md-6 serviceground1">
              <h1>Frontend Web Development Interfaces that delight</h1><br/>
              <p>Fontend development sits at the intersection of 3 pillars: clean code, 
                beautiful design and intuitive usability. We guarantee all three
              </p><br/>
                {button && <Button buttonStyle="btn--black">Angular Development</Button>}&emsp;
                {button && <Button buttonStyle="btn--black">React Development</Button>}<br/><br/>
              <p><a href="#"> read more  &rarr;</a></p>
            </div> 
          </div>

        </div>
        
      
      </div>
      <div>
        
      
      </div> */}
      {/* --------endbody------------- */}
      

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
