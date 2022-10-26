import React from 'react';
import Navbar from '../Navbar/Navbar';

const Mainlayout = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1 className="mt-4">Logo Nav by Start Bootstrap</h1>
                <p>The logo in the navbar is now a default Bootstrap feature in Bootstrap! Make sure to set the height
                    of the logo within the HTML or using CSS. For best results, use an SVG image as your logo.</p>
            </div>
        </div>
    );
}
export default Mainlayout;