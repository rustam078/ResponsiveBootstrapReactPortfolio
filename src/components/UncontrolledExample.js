import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assests/images/bg/pencilbgrem.png';
import img2 from '../assests/images/img/img-2.png';
import img3 from '../assests/images/img/img-3.jpg';
import './carosul.css';
function UncontrolledExample() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 custom_slider'>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img src={img1} className="d-block w-100" alt="..." />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img src={img1} className="d-block w-100" alt="..." />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img src={img1} className="d-block w-100" alt="..." />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default UncontrolledExample;