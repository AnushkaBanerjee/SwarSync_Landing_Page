import './Aboutus.css';
import meter1 from "../assests/img/collaborate .jpg";
import meter2 from "../assests/img/manage.jpg";
import meter3 from "../assests/img/communicate.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About Us</h2>
                        <p>Welcome to SwarSync, where musical collaboration knows no bounds. Founded by a team of passionate tech enthusiasts, SwarSync was born from the desire to connect artists worldwide, transcending geographical constraints.<br></br> Our platform is a harmonious space where creativity flourishes, and musicians collaborate seamlessly to craft musical masterpieces.<br></br> Join us on this melodic journey, where every note resonates with the spirit of collaboration.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Collaborate</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Manage</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Communicate</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
