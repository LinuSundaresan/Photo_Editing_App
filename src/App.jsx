import './App.css';

import Navbar from './components/Navbar';

import Announcement from './components/Announcement';

import { useState } from 'react';

const App = () => {

  const [imgSrc , setImageSrc] = useState('https://fortune.com/img-assets/wp-content/uploads/2024/06/GettyImages-76857994-e1719585901474.jpg?w=1440&q=75');

  const [brightness, setBrightness] = useState({
    name: 'brightness',
    property : 'brightness',
    value : 100,
    range: {
      min : 0,
      max : 200
    },
    unit : '%'

  });

  const [contrast, setContrast] = useState({
    name: 'contrast',
    property : 'contrast',
    value : 100,
    range: {
      min : 0,
      max : 200
    },
    unit : '%'

  });

  const [blur, setBlur] = useState({
    name: 'blur',
    property : 'blur',
    value : 0,
    range: {
      min : 0,
      max : 20
    },
    unit : 'px'

  });

  const setImageBrightness = (val) => {
    setBrightness({...brightness, value: val})
  };

  const setImageContrast = (val) => {
    setContrast({...contrast, value: val})
  };

  const setImageBlur = (val) => {
    setBlur({...blur, value: val})
  };

  return (
    <>
      <Announcement/>
      <Navbar setImageSrc = {setImageSrc}/>
      <div className="container">
        <div className="image-wrapper">
          <div className="image">
            <img src={imgSrc} alt="" width={'40%'} style={{
              filter: `${brightness.property}(${brightness.value}${brightness.unit}) 
              ${contrast.property}(${contrast.value}${contrast.unit}) 
              ${blur.property}(${blur.value}${blur.unit})`
            }}/>
          </div>
        </div>
      

        <div className="range">
          <div className="mode">
            <input type="range" min={brightness.range.min} max={brightness.range.max} onChange={(e) => {
              setImageBrightness(e.target.value);
            }} /> <span>Brightness</span>

            <input type="range" min={contrast.range.min} max={contrast.range.max} onChange={(e) => {
              setImageContrast(e.target.value);
            }} /> <span>Contrast</span>
          </div>
          
          <div className="mode">
            <input type="range" min={blur.range.min} max={blur.range.max} onChange={(e) => {
              setImageBlur(e.target.value);
            }} /> <span>Blur</span>

            <input type="range" min={contrast.range.min} max={contrast.range.max} onChange={(e) => {
              setImageContrast(e.target.value);
            }} /> <span>Saturation</span>
          </div>

       
        </div>
      </div>
      
          

        
    </>
    
  )

};

export default App;