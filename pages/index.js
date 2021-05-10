import Head from "next/head";
import Title from "../components/Title";
import Image from 'next/image'

export default function Home() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  };
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
    </>
  );
}
