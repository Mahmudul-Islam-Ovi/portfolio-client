import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
 //import Slider from '../Slider/Slider';

const Routers = () => {
    return (
        <div>
      {/* <Slider></Slider> */}
      <About></About>
      <Project></Project>
      <Contact></Contact>
        </div>
    );
};

export default Routers;