import Head from "next/head";
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
      <div>
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
        
      
      </div>
      {/* --------endbody------------- */}
      </>
    )
}

export default Service
