import React from "react";
import styled from "styled-components";
import ContactForm from "./Form/ContactForm";

const AboutStyled = styled.div`
  padding: 80px;
  padding-top: 20px;
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
  margin-bottom: 90px;
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

  @media (max-width: 810px) {
    margin-bottom: 70px !important;
  }
`;

const StyledContact = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  padding-top: 60px;
  background-color: #040c1880;
`

export default function About() {
  return (
    <AboutStyled id="contact">
      <StyledH2>Contact Me</StyledH2>

      <StyledContact data-aos={'flip-down'}>
        <ContactForm />
      </StyledContact>
     
    </AboutStyled>
  );
}

