import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import NavBar from "./NavBar";
import Skills from "./Skills";

const HeroStyled = styled.div`
  justify-content: space-between;
  padding: 1.1rem 5rem 0rem 5rem;
  /* background-color: #25262a; */
  background-color: ${(props) => props.theme.bg};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90vh;
  padding-bottom: 70px;
  padding-left: 80px;
  padding-right: 80px;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    /* border-bottom: 1px solid ${(props) => props.theme.textbg}; */
  }

  @media (max-width: 810px) { 
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 120px;
    flex-direction: column;
    text-align: center;
  }
`;

const StyledText = styled.h1`
  margin: auto;
  margin-top: 10px;
  font-size: 3rem;
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

const StyledPara = styled.p`
  font-size: 1rem;
  line-height: 30px;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 2rem;
  max-width: 450px;
  /* color: ${(props) => props.theme.text}; */
`;

export const StyledLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 20px;

  button {
    background: transparent;
    border: 2px solid ${(props) => props.theme.textbg};
    color: #fff;
    width: 120px;
    border-radius: 0;
    height: 40px;
  }

  button.block {
    background-color: ${(props) => props.theme.textbg};
    color: #fff;
    text-transform: uppercase;
  }

  button.block:hover {
    color: #fff;
    background-color: transparent;
  }
`;

const StyledButton2 = styled.button`
  background-color: ${(props) => props.theme.textbg};
  color: #fff;
`;

const HeroLeftStyled = styled.div`
  width: 1000px;

  @media (max-width: 810px) { 
   width: auto;
   margin-bottom: 30px;
  }
  
`

export default function Header({themeSet, currentTheme}) {
  const [hover,setHover] = React.useState(false);

  const handleHover = () => {
    setHover(prev => !prev);
  }
  return (
    <header>
      <NavBar themeSet={themeSet} />
      <HeroStyled id="#home">
        <HeroLeftStyled>
          <StyledButton2>
            <Typewriter
              options={{
                strings: ["Full-Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </StyledButton2>
          <StyledText className="white animate__animated animate__rubberBand">
            Hi, I am David.
          </StyledText>
          <StyledText className="white animate__animated animate__rubberBand">
            And I love Programming.
          </StyledText>
          <StyledPara className="gray animate__animated animate__rubberBand">
            🦋I’m a full-stack developer and my goal is to create outstanding, High performance and scalable applicationsis what am all about ⭐⭐⭐⭐⭐
          </StyledPara>
          
          <div>
            <StyledLink className="green" href='https://res.cloudinary.com/dpi44zxlw/image/upload/v1725363084/David_cv_cjagde.pdf' target={'_blank'}>
              <Button type="button">Resume</Button>
            </StyledLink>
            <StyledLink href='https://wa.me/+2348107483900' onMouseEnter={handleHover} onMouseLeave={handleHover} className={`animate__animated animate__flash animate__slow ${!hover ? 'animate__infinite infinite': ''} green`} >
              <Button className="block">Let's Chat</Button>
            </StyledLink>
          </div>
        </HeroLeftStyled>
          <Skills ct={currentTheme} />
     
      </HeroStyled>
    </header>
  );
}
