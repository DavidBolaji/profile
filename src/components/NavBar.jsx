import { Avatar, Button, Drawer, Switch } from "antd";
import React, { useState } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import styled from "styled-components";
import styled2 from '@emotion/styled';
import DavidPic from '../assets/images/dav.jpg'
// import { Link } from "react-router-dom";

const StyledDrawer = styled2(Drawer)`
  position: relative;
  .ant-drawer-wrapper-body {
    background-color: #040c18;
    color: #7b86a4;
    font-size: 18px;
    border-right: 1px solid #a5a4a47f;
  }
  .ant-drawer-close {
    position: absolute;
    right: 0;
    color: #fff;
    right: -10px;
    z-index: 100px;
    top: 10px;
    background: #7b86a4;
    width: 34px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  gap: 10px;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.navbg};
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

   @media (max-width: 810px) { 
      padding-left: 20px;
      padding-right: 20px;
    }
`;

export default function NavBar({themeSet}) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('')
  const [active, setActive] = useState('Home')

  const onClose = () => {
    setOpen(false);
  };
  const onChangeHandler = (checked) => {
    if(checked) {
      themeSet(true)
    } else {
      themeSet(false)
    }
  };

  const handleMouse = (val) => {
    setCurrent(val);
  }

  return (
    <StyledNav>
      <LogoSection className="white">
        <Avatar src={DavidPic} />
        <a href="/">Ologunleko David</a>
      </LogoSection>
      <div className="mobile-nav" onClick={() => setOpen(true)}>
        <RiMenu3Fill color="#4dba87" />
      </div>

      <ul className="flex white none">
        <li className={active === "Home" ? "green" : ""} onClick={() => setActive('Home')}  onMouseEnter={() => handleMouse('Home')} onMouseLeave={() => handleMouse('')} >
          <a href="/#home">{current === "Home" || active === "Home" ? "< Home />" : 'Home'}</a>
        </li>
        <li className={active === "About" ? "green" : ""}  onClick={() => setActive('About')} onMouseEnter={() => handleMouse('About')} onMouseLeave={() => handleMouse('')}>
          <a href="/#about">{current === "About" || active === "About" ? "< About Me />": 'About Me'}</a>
        </li>
         <li className={active === "Work" ? "green" : ""} onClick={() => setActive('Work')} onMouseEnter={() => handleMouse('Work')} onMouseLeave={() => handleMouse('')}>
          <a href="/#work">{current === "Work" || active === "Work"  ? "< Work />": 'Work'}</a>
        </li>
         <li className={active === "Projects" ? "green" : ""} onClick={() => setActive('Projects')} onMouseEnter={() => handleMouse('Projects')} onMouseLeave={() => handleMouse('')}>
          <a href="/#project">{current === "Projects" || active === "Projects"  ? "< Projects />": 'Projects'}</a>
        </li>
         <li className={active === "Contact" ? "green" : ""} onClick={() => setActive('Contact')} onMouseEnter={() => handleMouse('Contact')} onMouseLeave={() => handleMouse('')}>
          <a href="/#contact">{current === "Contact" ? "< Contact />": 'Contact'}</a>
        </li>
        <li>
          <Switch 
            checkedChildren={<FaMoon />}
            unCheckedChildren={<FaSun />}
            onChange={onChangeHandler}
          />
        </li>
      </ul>
      <StyledDrawer onClose={onClose} open={open} placement={'left'} size={'50%'}>
        <ul className="mobile-ul">
        <li className={active === "Home" ? "green": ""} onClick={() => {setActive('Home'); setOpen(false)}}  onMouseEnter={() => handleMouse('Home')} onMouseLeave={() => handleMouse('')} >
          <a href="/#home">{current === "Home" || active === "Home" ? "< Home />" : 'Home'}</a>
        </li>
        <li className={active === "About" ? "green": ""}  onClick={() => {setActive('About'); setOpen(false)}} onMouseEnter={() => handleMouse('About')} onMouseLeave={() => handleMouse('')}>
          <a href="/#about">{current === "About" || active === "About" ? "< About Me />": 'About Me'}</a>
        </li>
         <li className={active === "Work" ? "green": ""} onClick={() => {setActive('Work'); setOpen(false)}} onMouseEnter={() => handleMouse('Work')} onMouseLeave={() => handleMouse('')}>
          <a href="/#work">{current === "Work" || active === "Work"  ? "< Work />": 'Work'}</a>
        </li>
         <li className={active === "Projects" ? "green": ""} onClick={() => {setActive('Projects'); setOpen(false)}} onMouseEnter={() => handleMouse('Projects')} onMouseLeave={() => handleMouse('')}>
          <a href="/#project">{current === "Projects" || active === "Projects"  ? "< Projects />": 'Projects'}</a>
        </li>
         <li className={active === "Contact" ? "green": ""} onClick={() => {setActive('Contact'); setOpen(false)}} onMouseEnter={() => handleMouse('Contact')} onMouseLeave={() => handleMouse('')}>
          <a href="/#contact">{current === "Contact" ? "< Contact />": 'Contact'}</a>
        </li>
        <li>
          <Switch 
            checkedChildren={<FaMoon />}
            unCheckedChildren={<FaSun />}
            onChange={onChangeHandler}
          />
        </li>
      </ul>
      </StyledDrawer>
    </StyledNav>
  );
}
