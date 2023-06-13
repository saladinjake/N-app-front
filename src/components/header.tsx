import React, { useState } from "react";

import { styled } from "styled-components";

interface HeaderProps {
  title: string;
}
function NavBar({ title }: HeaderProps) {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <StyledHeader>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <a href="/" className="nav-logo">
            {title}
            <i className="fa fa-code"></i>
          </a>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" onClick={handleClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" onClick={handleClick}>
                Store
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" onClick={handleClick}>
                My Cart
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" onClick={handleClick}>
                Logout
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  .pages {
    color: #316685;
    text-align: center;
    font-size: calc(1.5rem + 2vw);
    margin-top: 10%;
  }

  .navbar {
    background-color: #fff;
    box-shadow: 0 4px 13px rgba(0, 0, 0, 0.05);
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 20;
  }

  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    max-width: 1500px;
  }

  .main-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }

  .nav-logo {
    color: purple;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    flex-grow: 1;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: 2rem;
  }

  .nav-links {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 3px solid transparent;
  }
  .fa-code {
    margin-left: 1rem;
  }

  a {
    color: purple;
  }
  .nav-item {
    line-height: 40px;
    margin-right: 1rem;
    color: purple;
  }

  .nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }

  .nav-item:hover:after {
    width: 100%;
    background: #000;
  }

  .nav-item.active {
    color: #000;
    border: 1px solid purple;
  }

  .nav-icon {
    display: none;
  }

  @media screen and (max-width: 960px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-top: 1pxsolid #fff;
      position: absolute;
      top: 80px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #f4f4f4;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: #000;
      border: none;
    }
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #777;
    }
  }
`;

export default NavBar;
