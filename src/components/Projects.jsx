import React from 'react'
import styled from 'styled-components'
import { Button, Carousel, Tag } from 'antd'
import { StyledLink } from './Header'

const AboutStyled = styled.div`
  padding: 70px;
  background-color: ${(props) => props.theme.bg};
  padding-bottom: 100px;

  @media (max-width: 810px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
    height: auto;
    text-align: center;
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
    margin-bottom: 70px !important;
  }
`

const StyledAboutLeft = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  height: 400px;

  .lft {
    width: 100%;
    padding-left: 5rem;
    margin-top: -20px;
    padding-top: 5px;
  }


  & > div {
    &:nth-child(2) {
      order: -1; /* Move the image to the top */
    }
  }

  h3 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 20px;
    max-width: 400px;
    text-transform: capitalize;
    color: ${(props) => props.theme.textbg};
  }

  p {
    color: #fff;
    line-height: 1.5rem;
    margin-bottom: 30px;
  }

  p.tag {
    line-height: 2rem;
  }

   img {
      width: 100%;
      height: auto;
    }

  @media (max-width: 810px) {
    grid-template-columns: 1fr !important;
    height: auto !important;
    padding-bottom: 60px;
    gap: 30px;

    h3 {
      margin: auto;
    }

    .lft {
      width: 100%;
      padding-left: 0rem;
    }

    .one {
      height: 360px;
      margin: auto;
    }

    img {
      width: 100%;
      height: auto;
    }

    .para {
      text-align: text-center;
      padding: 0 100px;
    }
  }

  @media (max-width: 560px) {
  padding-bottom: 70px;
    .para {
      text-align: text-center;
      padding: 0 20px;
    }
  }
`

const dataHash = [
  {
    id: 'p1',
    heading: 'HMS',
    para: 'Tayture.com is a hiring management platform that streamlines recruitment processes, integrating payment and CRM systems for efficient operations',
    link: 'https://tayture.com',
    lang: ['Next', 'Rtq', 'TailwindCss', 'Typescript', 'MYSQL', 'Vercel'],
    icon: 'https://res.cloudinary.com/dpi44zxlw/image/upload/v1725358601/tayture-ezgif.com-video-to-gif-converter_1_gifmx7.gif'
  },
  {
    id: 'p2',
    heading: 'E-commerce',
    para: 'RoyalBeauty is an e-commerce platform offering a wide range of beauty products, featuring a user-friendly shopping experience and secure payments',
    link: 'https://royalbeautyb.com',
    lang: ['Next', 'ShadCN', 'MYSQL', 'Prisma', 'React', 'Vercel'],
    icon: 'https://res.cloudinary.com/dpi44zxlw/image/upload/v1725358884/royalb-ezgif.com-video-to-gif-converter_msjs1y.gif'
  },
  {
    id: 'p3',
    heading: 'Product Listing App',
    para: 'A 3D prototype clothing listing platform that offers realistic apparel browsing, featuring a user-friendly interface for performng all crud operations.',
    link: 'https://bolaji-stackbuld-test.netlify.app/',
    lang: ['Next', 'TailwinCss', 'MongoDb', 'Prisma', 'Netlify'],
    icon: 'https://res.cloudinary.com/dpi44zxlw/image/upload/v1725363199/stuckbuld-ezgif.com-video-to-gif-converter_pvnjba.gif'
  }
]

export default function Projects() {
  const [hover, setHover] = React.useState(false)

  const handleHover = () => {
    setHover((prev) => !prev)
  }

  return (
    <AboutStyled id="project">
      <StyledH2>Projects</StyledH2>

      <Carousel arrows centerMode draggable fade dots={null}>
        {dataHash?.map((data) => {
          return (
            <StyledAboutLeft key={data.id}>
              <div className="lft">
                <h3>{data.heading}</h3>
                <p className="para">{data.para}</p>
                <p className="tag">
                  {data?.lang.map((l) => (
                    <Tag key={String(Math.random())} style={{ backgroundColor: '#4dba87', color: '#fff', border: '1px solid #4dba87' }}>
                      {l}
                    </Tag>
                  ))}
                </p>
                <StyledLink
                  target={'_blank'}
                  href={data.link}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  className={`animate__animated animate__flash animate__slow ${!hover ? 'animate__bounce infinite' : ''} green`}>
                  <Button target={data.link}>Visit</Button>
                </StyledLink>
              </div>
              <div className="img-cont">
                <img src={data.icon} alt={data.heading} />
              </div>
            </StyledAboutLeft>
          )
        })}
      </Carousel>
    </AboutStyled>
  )
}
