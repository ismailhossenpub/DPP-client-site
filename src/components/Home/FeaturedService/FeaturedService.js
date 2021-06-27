import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section className="features-services pb-5 containerStyle">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={featured}  style={{height:"60%"}}  className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6 py-5">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p style={{ textAlign:'justify'}} className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure illum harum voluptatum nemo, vitae modi facilis distinctio deleniti ea quam quas aliquam cum explicabo fuga sint asperiores consequatur hic temporibus incidunt ad aliquid consectetur aperiam vel! Corporis hic asperiores amet obcaecati atque, at quos. Illum dolorem temporibus nostrum non quibusdam.</p>
                        <button className="bg-color text-color btn">Learn More</button>
                    </div>
                </div>

            </div>
            
        </section>
    );
};

export default FeaturedService;