import React from "react";
import styled from "styled-components";
import styled2 from "@emotion/styled";
import { Tabs } from "antd";
import { FaCaretRight } from "react-icons/fa";

const AboutStyled = styled.div`
  padding: 80px;
  /* align-items: flex-start; */
  background-color: ${(props) => props.theme.bg};
  height: 100vh;
  padding-bottom: 100px;

  .div {
    align-items: 'flex-start';
    display: flex;
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

const StyledTab = styled2(Tabs)`
    .ant-tabs-tab {
        color: #fff;
    }
`

const StyledExperience = styled.div`
    /* max-width: 800px;
    margin: auto; */
`;

const StyledList = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    font-size: 14px;
    gap: 10px;
    color: ${(props) => props.theme.textbg};

     @media (max-width: 810px) { 
      display: -webkit-inline-box;
      max-width: 600px;
    }

     @media (max-width: 768px) { 
      display: -webkit-inline-box;
      max-width: 180px;
    }
`;

const StyledPorfolio = styled.div`
    h3 {
        font-size: 28px;
        color: #fff;
        margin-bottom: 10px;
        font-weight: 700;
    }

    p {
        font-size: 13px;
        margin-bottom: 10px;
        color: #fff;
        font-weight: 700;
        padding-left: 5px;
    }
`;


export default function Experience() {
    
  return (
    <AboutStyled id="work">
      <StyledH2  data-aos={'fade-up'}>Where i've Worked</StyledH2>
      <StyledExperience data-aos={'fade-up'}>
        <StyledTab
            tabPosition={"left"}
            items={[
                {
                    label: `FITTED`,
                    key: '3',
                    children: <PortfolioFitted />,
                },
                {
                    label: `3REEN`,
                    key: '2',
                    children: <Portfolio3reen />,
                },
                {
                    label: `OIRS`,
                    key: '1',
                    children: <PortfolioOirs />,
                }
            ]}
        />
      </StyledExperience>
      
    </AboutStyled>
  );
}

const ListGroup = ({text}) => {
    return (
        <StyledList className="flex">
            <div>
                <FaCaretRight />
            </div>
            <div className="two">
                {text}
            </div>
        </StyledList>
    )
}

const PortfolioOirs = () => {
    return <StyledPorfolio>
        <h3 data-aos={'fade-up'}>Full Stack Engineer</h3>
        <p  data-aos={'fade-up'}>2015-2019</p>
        <div  data-aos={'fade-up'}>
            <ListGroup text={'Write modern, performant, maintainable code'} />
            <ListGroup text={'Responsible for the overall design of the Receipt generation system for paying of tax.'} />
            <ListGroup text={'Responsible for the building of an internal e-portal system which is used to keep track of activities at work.'} />
        </div>
    </StyledPorfolio>
}

const Portfolio3reen = () => {
    return <StyledPorfolio>
        <h3 data-aos={'fade-up'}>Full Stack Engineer</h3>
        <p data-aos={'fade-up'}>2021 - 2022</p>
        <div  data-aos={'fade-up'}>
            <ListGroup text={'Responsible for building e-commerce functionality such as the cart system'} />
            <ListGroup text={'Responsible for implementing state management using redux.'} />
            <ListGroup text={'Responsible for Troubleshooting code to fix bugs.'} />
        </div>
    </StyledPorfolio>
}

const PortfolioFitted = () => {
    return <StyledPorfolio>
        <h3 data-aos={'fade-up'}>Full Stack Engineer</h3>
        <p  data-aos={'fade-up'}>August 2022- Present</p>
        <div data-aos={'fade-up'}>
            <ListGroup text={'Write modern, performant, maintainable code'} />
            <ListGroup text={'Responsible for the overall design of an order management system.'} />
            <ListGroup text={'Responsible for implementing new functionalities as decided by the team'} />
        </div>
    </StyledPorfolio>
}