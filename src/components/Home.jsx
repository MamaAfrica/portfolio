import React, { useState } from 'react';
import '../App.css';
import '../css/Home.css';
import Typed from 'typed.js';
import logoport from '../media/logoport.jpg'

function Home(){
  // Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
  // Create reference to store the Typed instance itself
	const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: [
        '<strong>Python Programmer</strong>',
        '<strong>Embedded Systems Engineer</strong>'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])
  // changecolor
//   var links = document.getElementsByClassName('changeable');
// function changeColorToRed(e) {
//     e.target.style.color = e.target.style.color ? null : 'red';
// }
// for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', changeColorToRed);
// }
    // fixed Header
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      header.classList.toggle("active", window.scrollY > 0);
    });
    // Toogle Menu
   const [show, setShow] = useState(false);
    return(
        <div className='home' id='Home'>
          <div className='home__bg' alt='homeimg'>
<div className="header d__flex align__items__center pxy__30">
<div className='navigation pxy__30'>
  <img src={logoport} alt='logo' className='logo'/>
<ul className='navbar d__flex'>
  <a href='#Home' className='changeable'><li className='nav__items mx__15 changeable'>Home</li></a>
  <a href='#About' className='changeable'><li className='nav__items mx__15 changeable'>About</li></a>
  <a href='#Services' className='changeable'><li className='nav__items mx__15 changeable'>Service</li></a>
  <a href='#Portfolio' className='changeable'><li className='nav__items mx__15 changeable'>Portfolio</li></a>
  <a href='#Blog' className='changeable'><li className='nav__items mx__15 changeable'>Blog</li></a>
  <a href='#Contact' className='changeable'><li className='nav__items mx__15 changeable'>Contact</li></a>
</ul>
</div>
 {/* Toogle Menu */}
 <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#Home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#About">About</a>
            </li>
            <li className="sideNavbar">
              <a href="#Services">Services</a>
            </li>
            <li className="sideNavbar">
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li className="sideNavbar">
              <a href="#Blog">Blog</a>
            </li>
            <li className="sideNavbar">
              <a href="#Contact">Contact</a>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
         {/* HOME CONTENT */}
<div className='container' id='homeContent'>
  <div className='home__content'>
    <div className='home__meta'>
      <h1 className='home__text pz__10 welcome'>
        WELCOME TO MY WORLD
      </h1>
      <h2 className='home__text pz__10 typedsize'>
        Hi, I'm Miracle Nnabuko
      </h2>
      <div>
        <span style={{ whiteSpace: "pre", }} className='sweet typedsize' ref={el} />
      </div>
    </div>
    </div>
  </div>
</div>
</div>
    );
}

export default Home