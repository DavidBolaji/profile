import React from "react";
import styled from "styled-components";
import DbLogo from '../assets/images/db.jpg'
import CalcLogo from '../assets/images/calc.jpg'
import GreedyLogo from '../assets/images/greedy.jpg'
import { Button, Carousel, Tag } from "antd";
import { StyledLink } from "./Header";

const AboutStyled = styled.div`
  padding: 70px;
  /* align-items: flex-start; */
  background-color: ${(props) => props.theme.bg};
  /* background-color: #fff; */
  /* height: 100vh; */
  padding-bottom: 100px;

  /* .div {
    align-items: 'flex-start';
    display: flex;
  } */

  @media (max-width: 810px) { 
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 40px;
      height: auto;
      text-align: center;
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
   /* flex: 0.5; */
   /* justify-content: flex-start; */
   /* height: auto; */
   /* align-items: stretch; */
   /* flex: 0.5; */

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

  img {
    max-width: 500px;
    max-height: 340px;
    height: 340px;
  }

   @media (max-width: 810px) { 
     img {
      margin: auto;
     }
    }
`;

const StyledAboutLeft = styled.div`
    /* flex: 0.5; */
    display: flex !important;
    gap: 200px;
    height: 450px;

    h3 {
        font-size: 38px;
        font-weight: 700;
        margin-bottom: 20px;
        max-width: 400px;
        text-transform: capitalize;
        color: ${(props) => props.theme.textbg};
    }

    p {
        font-size: 16px;
        max-width: 500px;
        color: #fff;
        line-height: 1.5rem;
        margin-bottom: 30px;
    }

    @media (max-width: 810px) { 
     flex-direction: column-reverse;
     height: auto;
     gap: 20px;
     /* width: 250px;
      margin: auto; */

      h3 {
        margin: auto;
      }

     .one {
      height: 360px;
       /* width: 250px; */
      margin: auto;
     }
    }
`;


const dataHash = [
    {
        id: 'p1',
        heading: 'Dashboard',
        para: 'This is a community for Event Planners to manage their groups outfit i.e grooms men and aso ebi girls.',
        link: 'https://groups.fitted.ng',
        lang: ['Next', 'Redux','antd', 'node', 'typescript'],
        icon: DbLogo,
    },
    {
        id: 'p2',
        heading: 'Calculator',
        para: 'Built an online calculator with different themes.',
        link: 'https://davidbolaji.github.io/calculator',
        lang: ['React', 'Redux','sass'],
        icon: CalcLogo,
    },
     {
        id: 'p3',
        heading: 'Greedy Hunter',
        para: 'Built a game known as greedy hunter. This game gives you the task of collecting fruits in a limited time',
        link: 'https://davidbolaji.github.io/greedy-hunter/',
        lang: ['Html', 'Css','Javascript'],
        icon: GreedyLogo,
    }
];


export default function Projects() {
    const [hover,setHover] = React.useState(false);

  const handleHover = () => {
    setHover(prev => !prev);
  }
  return (
    <AboutStyled id="project">
      <StyledH2>Projects</StyledH2>
      
        <Carousel autoplay>
            {dataHash?.map(data => {
                return (
                    <StyledAboutLeft key={data.id}>
                        <div className="one">
                            <h3>{data.heading}</h3>
                            <p>{data.para}</p>
                            <p>
                                {data?.lang.map(l => <Tag key={String(Math.random())} style={{backgroundColor: '#4dba87', color: '#fff', border: '1px solid #4dba87'}}>{l}</Tag>)}
                            </p>
                            <StyledLink onMouseEnter={handleHover} onMouseLeave={handleHover} className={`animate__animated animate__flash animate__slow ${!hover ? 'animate__bounce infinite': ''} green`} >
                            <Button target={data.link}>Visit</Button>
                            </StyledLink>
                        </div>
                        <StyledAboutRight data-aos={'fade-up'} data-aos-duration={1500}>
                            <img src={data.icon} alt={data.link} />
                        </StyledAboutRight>
                    </StyledAboutLeft>
                )
            })}
        </Carousel>
      {/* </div> */}
      
    </AboutStyled>
  );
}

