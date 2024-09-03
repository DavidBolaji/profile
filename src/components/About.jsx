import React from 'react'
import styled from 'styled-components'
import { FaCode, FaDatabase, FaDev } from 'react-icons/fa'

const AboutStyled = styled.div`
  padding: 80px;
  background-color: ${(props) => props.theme.bg};
  height: 100vh;
  padding-bottom: 100px;

  .div {
    align-items: 'flex-start';
    display: flex;

    @media (max-width: 810px) {
      flex-direction: column;
    }
  }

  @media (max-width: 810px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
        padding-top: 150px;
    height: auto;
  }
`

const StyledH2 = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 90px;
  position: relative;
  text-transform: uppercase;

  &:after {
    content: '';
    width: 10%;
    height: 5px;
    margin-top: 10px;
    background-color: ${(props) => props.theme.textbg};
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 810px) {
    margin-bottom: 50px !important;
  }
`

const StyledAboutRight = styled.div`
  flex: 1;
  margin-top: -30px;

  h1 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: 500;
    font-size: 2rem;
    color: #fff;
  }
  h3 {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.3rem;
    text-align: justify;
    color: #fff;
  }
  p {
    font-weight: 400;
    font-size: 1rem;
    text-align: justify;
    color: #ffffff;
    line-height: 1.65rem;
  }
  .partners {
    padding-top: 5rem;
  }
  h5 {
    color: #777777;
  }
  @media (max-width: 810px) {
    margin-top: 20px;
  }
`

export default function About() {
  return (
    <AboutStyled id="about">
      <StyledH2>About Me</StyledH2>
      <div className="div">
        <div className="flex-full">
          <AboutCard
            title="Full Stack Development"
            icon={<FaCode color="white" />}
            description="Building seamless web applications from front-end to back-end systems."
            projects={7}
          />
          <AboutCard
            title="Database Schema Orchestration"
            icon={<FaDatabase color="white" />}
            description="Designing and managing complex database structures for optimized data flow."
            projects={10}
          />
          <AboutCard
            title="Devops/Deployment"
            icon={<FaDev color="white" />}
            description="Automating software deployment, ensuring seamless integration, and scalable operations."
            projects={10}
          />
        </div>

        <StyledAboutRight data-aos={'fade-up'} data-aos-duration={1500}>
          <h5>Introduction</h5>
          <h1>Hello, I&#39;m Ologunleko David</h1>
          <h3>Design is not just what it looks like. Design is how it works!</h3>
          <p>
            I&apos;m a passionate Full Stack Developer with expertise in building scalable web applications using modern technologies like React,
            Next.js, Node.js, and MySQL. My journey in software development has equipped me with a strong foundation in both front-end and
            back-end technologies, allowing me to craft optimized, user-friendly interfaces and develop robust server-side logic. I take
            pride in my ability to translate complex requirements into intuitive, high-performance applications that meet user needs and
            business goals.
          </p>
          <p>
          Over the years, I&apos;ve gained diverse experience across multiple industries, leading teams to
            successfully deliver high-quality projects. I&apos;ve worked on everything from integrating third-party APIs like Paystack and Zoho
            to orchestrating database operations with Prisma, ensuring seamless performance and reliability. My commitment to continuous
            learning drives me to stay updated with the latest technologies and trends, always seeking out challenging projects that push
            the boundaries of my skills.
          </p>
        </StyledAboutRight>
      </div>
    </AboutStyled>
  )
}

function AboutCard({ title, icon, description, projects }) {
  return (
    <div className="light-bg about-card" >
      <div className="flex justify-space">
        <h3 className="green">{title}</h3>
        {icon}
      </div>
      <p className="white">{description}</p>
    </div>
  )
}
