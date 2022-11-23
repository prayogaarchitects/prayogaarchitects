import { Image } from "./image";
import { useState, useEffect } from "react";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export const Gallery = (props) => {
  const [value, setValue] = useState('ALL');

  const handleClick = (a) => {
    setValue(a)
  }
  
  return (
    <div id='portfolio' className='text-center'>
      <div className='container-fluid'>
        <div className='section-title'>
        <Slide left cascade><h2>Gallery</h2></Slide>
          <div id="sectionsdiv">
            <span onClick={() => handleClick('ALL')}>All Projects</span>
            <span onClick={() => handleClick('INTERIOR')}>Interiors</span>
            <span onClick={() => handleClick('INTANDARCH')}>Architecture + Interiors</span>
            <span onClick={() => handleClick('ARCHITECTURE')}>Architecture</span>
          </div>
        </div>
        
        <div className='row'>
        <Fade left cascade>
          <div className='portfolio-items'>
         
            {props.data
              ? props.data.filter(u => u.classification==value || value=="ALL").map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-12 col-md-6 col-lg-4 individualcards'>
                 <Image title={d.title} id={d.id} largeImage={d.largeImage} smallImage={d.smallImage} />
                  <span>{d.title + " - "+ d.projecttype}</span>
                </div>
              ))
              : 'Loading...'}
            
          </div>
        </Fade>
        </div>
       
      </div>
    </div>
  )
}
