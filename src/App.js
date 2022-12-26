import { Helmet } from "react-helmet";
import React, { useState } from 'react';
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Typewriter from "typewriter-effect";
import "animate.css";
import AOS from "aos";

import "aos/dist/aos.css";
import { Avatar, ConfigProvider, Spin } from "antd";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components";
import DavidPic from './assets/images/dav.jpg'
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = React.useState(false)
  React.useEffect(() => {
    const isLoading = () => {
      setTimeout(() => setLoading(prev => !prev), 5000)
    }
    window.addEventListener('load', isLoading);

    return () => window.removeEventListener('load', isLoading);
  }, [])
  React.useEffect(() => {
    if (!theme) return setTheme(false);
    setTheme(true)
  }, [theme]);

  React.useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      // offset: 50,
    });
  }, []);

  const themeSetHandler = (theme) => {
    if (!theme) return setTheme(false);
    setTheme(true)
  }

  return (
    <>
      {loading ?
        (
          <div style={{ position: 'absolute', top: 0, display: 'flex', height: '100vh', width: '100vw', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a192f', textAlign: "center" }}>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', color: '#fff' }}>
              <Avatar src={DavidPic} size={100} className="animate__animated animate__flash animate__slow animate__infinite infinite" />
              <div style={{ fontSize: '20px', paddingTop: '20px', textAlign: 'center' }}>
                <Typewriter

                  options={{
                    strings: ["Loading...."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

            </div>
          </div>
        ) :
        (
          <ConfigProvider theme={{
            token: {
              colorPrimary: !theme ? '#54d9bd' : '#7b86a4',
            }
          }}>
            <ThemeProvider theme={!theme ? darkTheme : lightTheme}>
              <Helmet>
                <title>David - Full-Stack Developer</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <meta name="author" content="Ologunleko David" />
                <meta name="keywords" content="ReactJS" />
                <link rel="icon" href="./assets/images/dav.jpg" />
                <meta
                  name="description"
                  content="I am a talented Full-Stack developer"
                />
                <meta charSet="UTF-8" />
                <meta name="theme-color" content="#2D2E32" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:site_name" content="David - Full-Stack Developer" />
                <meta property="og:locale" content="en_GB" />
                <title data-rh="true">David - Full-Stack Developer</title>
                <meta data-rh="true" property="og:type" content="website" />
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <meta
                  data-rh="true"
                  property="og:title"
                  content="David - Full-Stack Developer"
                />
                {/* <meta data-rh="true" property="og:image" content="/images/blaiti.png" /> */}
              </Helmet>

              {/* Header */}
              <Header themeSet={themeSetHandler} currentTheme={!theme ? 'dark' : 'light'} />

              <main>
                {/* About */}
                <About />
                <Experience />
                <Projects />
                <Contact />
              </main>

              {/* Footer */}
              <Footer />
            </ThemeProvider>
          </ConfigProvider>
        )
      }
    </>
  )
}
