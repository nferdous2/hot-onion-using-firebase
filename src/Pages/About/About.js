import React from 'react';
import img1 from '../../images/adult-blur-blurred-background-687824.png'
import img2 from '../../images/architecture-building-city-2047397.png'
import img3 from '../../images/chef-cook-food-33614.png'

const About = () => {
    return (

        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col p-5">
                <div className="card">
                    <img src={img1} className="card-img-top w-90 p-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Fast delivery</h5>
                        <p className="card-text">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                    </div>
                </div>
            </div>
            <div className="col p-5">
                <div className="card">
                    <img src={img3} className="card-img-top w-90 p-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">A good auto responder</h5>
                        <p className="card-text">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                    </div>
                </div>
            </div>
            <div className="col p-5">
                <div className="card">
                    <img src={img2} className="card-img-top w-90 p-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Home delivery</h5>
                        <p className="card-text">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;