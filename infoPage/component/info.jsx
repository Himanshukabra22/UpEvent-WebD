import React, { useState } from 'react';

// styles
import '../component/info.css';

const Info = () => {
    let para = "DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement."
  
    return (
        
<div>
    <div className="img">
          <img src="https://images.pexels.com/photos/396304/pexels-photo-396304.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="clgName">IIT Roorke</div>
        <div className="content">
          <span className='para'>
            {para}
          </span>
          <span className='para'>
            {para}
          </span>
          <span className='para'>
            {para}
          </span>
          <span className='para'>
            {para}
          </span>
        </div>

        <div className="college">College <span className="event">Events</span></div>
        </div>
    );
};
export default Info;