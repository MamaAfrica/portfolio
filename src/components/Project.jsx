
import "../css/Project.css";
import embeddedfarm from '../media/embeddedfarm.jpeg'
import regform from '../media/regform.png'
import emailbot from '../media/emailbot.png'
// import Project1 from './img/portfolio-1.jpg';


function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          Here are some of the projects I have worked on,
        </p>
        <p className="heading p__color">
          kindly click on each tile to view details.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={embeddedfarm} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Embedded Poultry Farm</h5>
                     <h4 className="project__text">A smart farm using Arduino</h4>
                     <a href="https://www.researchgate.net/publication/334376500_Design_and_Implementation_of_an_Embedded_Poultry_Farm" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={regform} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Django</h5>
                     <h4 className="project__text">Events Registration Form</h4>
                     <a href="https://eventreg.aretestack.com/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={emailbot} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Django application</h5>
                     <h4 className="project__text">Email Scheduler</h4>
                     <a href="https://emailbot.aretestack.com/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;