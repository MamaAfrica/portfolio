import '../App.css';
import '../css/About.css';
import about from '../media/Aboutpix.png';

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
                            My name is Miracle Nnabuko. I am a DevOps Engineer with a background in Electrical and Electronic Engineering. I have over 7 years of Technical experience working with SRE tools such as Dynatrace and Datadog, and implementing DevOps practices. I have an excellent understanding of the following programming languages/technologies: Python, Azure DevOps, Terraform, Jenkins, Django, SQL, and JavaScript. If you are looking for someone who can tackle problems and bridge the gap between development and operations teams, I might be what you are looking for.
                            </p>
                            <p className="about__text p__color">
                
I have been Professionally trained in business ethics, effective communication, and strategic leadership and management principles.
I am eager to be part of an institution that provides solutions to problems through creative thinking.
                            </p>
                            <h2 className='about__heading'>
                            CORE COMPETENCIES
                        </h2>
                     
                        <p className='about__text p__color'>• Azure DevOps</p> 
                        <p className='about__text p__color'>• Docker, Kubernetes</p>
                        <p className='about__text p__color'>• CI/CD - Jenkins, Travis CI</p>
                        <p className='about__text p__color'>• IaC - Terraform</p>
                        <p className='about__text p__color'>• Ansible</p>
                        <p className='about__text p__color'>• Application Monitoring - Dynatrace, Datadog</p>
                         <p className='about__text p__color'>• Microsoft Azure, AWS</p>
                         <p className='about__text p__color'>• Python and AVR C/C++</p>
                         <p className='about__text p__color'>• HTML, CSS, JavaScript, React</p>
                         <p className='about__text p__color'>• Web development</p> 
                        
                            <div className="about__button d__flex align__items__center">
                            <a href="https://drive.google.com/file/d/1jcgHAJcWhdr5qFQdd8I4iIihsoi8xBxG/view?usp=sharing">
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