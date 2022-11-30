import '../App.css';
import '../css/About.css';
import about from '../media/Aboutpix.png';
import CV from '../media/CV.pdf'

function About() {
     //  Up To Top Btn
     window.addEventListener("scroll", function(){
        const upToTop = document.querySelector("a.bottom__to__top");
         upToTop.classList.toggle("active", window.scrollY > 0)
      });
    return ( 
        <div className='about component__space' id='About'>
            <div className='container'>
                <div className='row'>
                    <div className='col__2'>
                        <img src={about} alt='aboutimg' className='about__img' />
                    </div>
                    <div className='col__2'>
                        <h1 className='about__heading'>
                        About Me
                        </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                            My name is Miracle Nnabuko, from Nigeria. I currrently have a Bachelor's degree in Electrical/Electronic Engineering, 
with over five years combined pre-degree and post-degree experience in embedded systems, application monitoring, web development, Python and AVR C/C++, Data Science and networking.
                            </p>
                            <p className="about__text p__color">
                
I have been Professionally trained in business ethics, effective communication, and strategic leadership and management principles.
I am eager to be part of an institution that provides solutions to problems through creative thinking.
                            </p>
                            <h2 className='about__heading'>
                            CORE COMPETENCIES
                        </h2>
                     
                        <p className='about__text p__color'>• Python and AVR C/C++</p> 
                        <p className='about__text p__color'>
                        • HTML, CSS, JavaScript, React</p>
    <p className='about__text p__color'>• Web development using Django</p>
    <p className='about__text p__color'>
                        • Application Monitoring 
    (Dynatrace)</p>
    <p className='about__text p__color'>
                        • Microsoft Azure, AWS</p> 
                        
                            <div className="about__button d__flex align__items__center">
                            <a href={CV} download="nnabukoCV">
                            <button className="about btn pointer">Download Cv</button>
                            </a>
                            <a href="#Contact">
                            <button className="about btn pointer">Hire Me</button>
                            </a>
                        </div>
                        </div>
                    </div>

                </div>

            </div>
             {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
        </div>
        
     );
}

export default About;