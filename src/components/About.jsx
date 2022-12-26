import React from "react";
import DesignIcon from '../assets/icons/design.svg';
import CodeIcon from '../assets//icons/code.svg';
import PhoneIcon from '../assets/icons/phone.svg';
import styled from "styled-components";

const AboutStyled = styled.div`
  padding: 80px;
  /* align-items: flex-start; */
  background-color: ${(props) => props.theme.bg};
  /* background-color: #fff; */
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
      height: auto;
    }
`;

const StyledH2 = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 100px;
  position: relative;
  text-transform: uppercase;

  &:after {
    content: '';
    width: 10%;
    height: 5px;
    margin-top: 10px;
    background-color:${(props) => props.theme.textbg};
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`;

const StyledAboutRight = styled.div`
   flex: 1;
   /* justify-content: flex-start; */
   height: auto;
   align-items: stretch;

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
    font-weight: 500;
    font-size: 1rem;
    text-align: justify;
    color: #777777;
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
`;

export default function About() {
  return (
    <AboutStyled id="about">
      <StyledH2>About Me</StyledH2>
      <div className="div">
        <div className="flex-full">
          <AboutCard
            title="UX/UI Design"
            icon={DesignIcon}
            description="I create and design products with unique ideas."
            projects={7}
            data={"flip-left"}
            duration={600}
          />
          <AboutCard
            title="Web Design"
            icon={CodeIcon}
            description="I develop Full stack applications with coding super smooth."
            projects={10}
            data={"flip-left"}
            duration={1000}
          />
        </div>

        <StyledAboutRight data-aos={'fade-up'} data-aos-duration={1500}>
          <h5>Introduction</h5>
          <h1>Hello, I&#39;m Ologunleko David</h1>
          <h3>
            Design is not just what it looks like. Design is how it works!
          </h3>
          <p>
            I have proceeded my dream to be a developer as it has been my
            lifelong ambition. I am a talented Fullstack developer.
            since graduation I have had
            the opportunity to enhance my expertise by collaborating with
            different companies and by creating useful content for both business
            and customer use.
            <br />
            <br />I am naturally persevered, self-confident, quietly curios,
            innovative and constantly challenging my skills as i am determined to bring change to the world.
            <br />
          </p>
        </StyledAboutRight>
      </div>
    </AboutStyled>
  );
}

function AboutCard({
  title,
  icon,
  description,
  projects,
  data,
  duration,
}) {
  return (
    <div
      className="light-bg about-card"
      data-aos={data}
      data-aos-duration={duration}
    >
      <div className="flex justify-space">
        <h3 className="green">{title}</h3>
        <img src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>
      <span className="gray">{projects.toString()} projects</span>
    </div>
  );
}
