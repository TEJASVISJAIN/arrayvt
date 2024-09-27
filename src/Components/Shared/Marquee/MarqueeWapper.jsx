import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeWapper = ({ images, direction }) => {
  const marqueeItemStyle = {
    display: 'inline-block',
    padding: '0 20px',
    textAlign: 'center',
  };

  const imgStyle = {
    maxWidth: '100px',
    height: 'auto',
  };

  const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
  };

  return (
    <div className="marquee-wrapper" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div className="marquee-inner" style={{ display: 'flex', alignItems: 'center' }}>
        <Marquee direction={direction}>
          {images?.map(({ id, image, text }) => (
            <div key={id} style={marqueeItemStyle}>
              {image && <img src={image} alt={`marquee-item-${id}`} style={imgStyle} />}
              {text && <p style={textStyle}>{text}</p>}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeWapper;
