import React, { useState } from 'react';
import Map from './map/Map';
import Gallery from './gallery/Gallery';
import ImageGrid from "./comps/ImageGrid";
const Hero = ({handleLogout}) => {
  const [selectedImg, setSelectedImg] = useState(null)
    return (
      <div>
        <section className="hero">
          <nav>
            <h2></h2>
            <button onClick={handleLogout}>Logout</button>
          </nav>
          <br />
          <Map />
          <ImageGrid setSelectedImg={setSelectedImg} />
          <Gallery />
        </section>
      </div>
    );
};

export default Hero;