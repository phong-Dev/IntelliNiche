import Head from "next/head";
import Title from "../components/Title";
import Image from "next/image";
import Carousel from "react-elastic-carousel";
import PartnerItem from "../components/PartnerItem";
import ClientSayItem from "../components/ClientSayItem";
import ProgressBar from "../components/ProgressBar";
import { Button } from "../components/Button";
import { useState } from "react";

export default function Home() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };

  const [button, setButton] = useState(true);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 558, itemsToShow: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1280, itemsToShow: 7 },
  ];

  const breakPointsClient = [
    { width: 1, itemsToShow: 1 },
    { width: 558, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1280, itemsToShow: 4 },
  ];
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      {/* -----------header--------- */}
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1>We build digital products that power business</h1>
            <p>
              Our focus is the agile development of web, cloud, and mobile
              applications - and helping organizations create and sustain
              digital innovation
            </p>
          </div>
          {button && <Button buttonStyle="btn--outline">Our Service</Button>}
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" onClick={scrollToBottom}>
            <span></span>
          </a>
        </p>
      </header>
      {/* --------end header------------- */}
      {/* ---------about-------------- */}
      <section id="about">
        <Title title="About us" />
        <div className="container">
          <div className="row mx-auto mt-3">
            <div className="col-md-6 my-2 about__description">
              <div className="about__description--width">
                <h3>We're a global team</h3>
                <p>
                  IntelliNiche is headquartered in VietNam, with regional
                  operations in europe and asia. Our primary focus is the angile
                  development of cloud-connected web and mobile apps
                </p>
              </div>
            </div>
            <div className="col-md-6 my-2">
              <div>
                <Image
                  src="/picture/team.svg"
                  alt="team"
                  width={504}
                  height={562}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------end about------------- */}
      {/* -------------partner------------- */}
      <section id="partner">
        <Title title="Partner" />
        <div className="partner__description">
          <p>
            IntelliNiche partner list is growing. This is testament to the
            effective and rewarding cooperation we undertake with local and
            global partner. We are pround to share our partner list
          </p>
        </div>
        <Carousel breakPoints={breakPoints}>
          <PartnerItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </PartnerItem>
          <PartnerItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </PartnerItem>
          <PartnerItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </PartnerItem>
          <PartnerItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </PartnerItem>
          <PartnerItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </PartnerItem>
          <PartnerItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </PartnerItem>
        </Carousel>
      </section>
      {/* --------------end partner------------ */}
      {/* ---------------service---------------- */}
      <section id="service">
        <Title title="Service" />
        <div className="service__description">
          <p>
            We offer outstanding software engineering expertise coupled with
            seasoned product management and user interface/experience designers.
            This makes tivix a one-stop-shop for digital product development.
          </p>
        </div>
        <div className="service__items--top">
          <div className="service__item shadow px-3 pt-3 mb-5 bg-white rounded">
            <b>
              <p>UX Design</p>
            </b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              esse explicabo accusantium assumenda autem dicta nemo, maxime eos
              at molestiae cum temporibus exercitationem vitae culpa, sit
              incidunt dolore, pariatur sint!
            </p>
            <div className="service-picture">
              <div className="service-bg"></div>
              <div className="service-around"></div>
              <div className="service-img">
                <Image
                  src="/picture/design_icon.svg"
                  alt="design_icon"
                  width={34}
                  height={43}
                />
              </div>
            </div>
          </div>
          <div className="service__item shadow px-3 pt-3 mb-5 bg-white rounded">
            <b>
              <p>UX Design</p>
            </b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              esse explicabo accusantium assumenda autem dicta nemo, maxime eos
              at molestiae cum temporibus exercitationem vitae culpa, sit
              incidunt dolore, pariatur sint!
            </p>
            <div className="service-picture">
              <div className="service-bg"></div>
              <div className="service-around"></div>
              <div className="service-img">
                <Image
                  src="/picture/design_icon.svg"
                  alt="design_icon"
                  width={34}
                  height={43}
                />
              </div>
            </div>
          </div>
          <div className="service__item shadow px-3 pt-3 mb-5 bg-white rounded">
            <b>
              <p>UX Design</p>
            </b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              esse explicabo accusantium assumenda autem dicta nemo, maxime eos
              at molestiae cum temporibus exercitationem vitae culpa, sit
              incidunt dolore, pariatur sint!
            </p>
            <div className="service-picture">
              <div className="service-bg"></div>
              <div className="service-around"></div>
              <div className="service-img">
                <Image
                  src="/picture/design_icon.svg"
                  alt="design_icon"
                  width={34}
                  height={43}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="service__items--bottom">
          <div className="service__item shadow px-3 pt-3 mb-5 bg-white rounded">
            <b>
              <p>UX Design</p>
            </b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              esse explicabo accusantium assumenda autem dicta nemo, maxime eos
              at molestiae cum temporibus exercitationem vitae culpa, sit
              incidunt dolore, pariatur sint!
            </p>
            <div className="service-picture">
              <div className="service-bg"></div>
              <div className="service-around"></div>
              <div className="service-img">
                <Image
                  src="/picture/design_icon.svg"
                  alt="design_icon"
                  width={34}
                  height={43}
                />
              </div>
            </div>
          </div>
          <div className="service__item shadow px-3 pt-3 mb-5 bg-white rounded">
            <b>
              <p>UX Design</p>
            </b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              esse explicabo accusantium assumenda autem dicta nemo, maxime eos
              at molestiae cum temporibus exercitationem vitae culpa, sit
              incidunt dolore, pariatur sint!
            </p>
            <div className="service-picture">
              <div className="service-bg"></div>
              <div className="service-around"></div>
              <div className="service-img">
                <Image
                  src="/picture/design_icon.svg"
                  alt="design_icon"
                  width={34}
                  height={43}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------end service----------- */}
      {/* --------------our work-------------- */}
      <section id="our-work" className="pt-5">
        <div className="our-work__description">
          <h4>
            You can check out our work <br /> Are you ready for a better, more
            productive busiess
          </h4>
        </div>
        <ProgressBar />
      </section>
      {/* ---------------end our work------------- */}
      {/* -------------client say------------- */}
      <section id="client">
        <Title title="What our client are saying" />
        <Carousel breakPoints={breakPointsClient}>
          <ClientSayItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </ClientSayItem>
          <ClientSayItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </ClientSayItem>
          <ClientSayItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </ClientSayItem>
          <ClientSayItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </ClientSayItem>
          <ClientSayItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </ClientSayItem>
          <ClientSayItem>
            <Image
              src="/picture/blockex.png"
              alt="blockex"
              width={160}
              height={50}
            />
          </ClientSayItem>
        </Carousel>
      </section>
      {/* --------------end client say------------ */}
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
      <section id="getInTouch">
        <div className="text-center">
          <h5>
            <b>Interested in discussing a project?</b>
          </h5>
          <h5>Let’s build something great.</h5>
          {button && <Button buttonStyle="btn--primary">Get in touch</Button>}
        </div>
      </section>
    </>
  );
}
