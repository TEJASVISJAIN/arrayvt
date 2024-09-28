import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeWapper = ({ images, direction }) => {
  const marqueeItemStyle = {
    display: 'inline-block',
    textAlign: 'center',
    flex: '0 0 auto',
    padding: '0 20px', // Keep the padding here for spacing between items
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

  const marqueeInnerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
  };

  // Clone first and last items to create the illusion of smooth padding at both ends
  const firstItem = images?.[0];
  const lastItem = images?.[images.length - 1];

  return (
    <div className="marquee-wrapper" style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div className="marquee-inner" style={marqueeInnerStyle}>
        <Marquee direction={direction}>
          {lastItem && (
            <div style={marqueeItemStyle}>
              {lastItem.image && <img src={lastItem.image} alt={`marquee-item-last`} style={imgStyle} />}
              {lastItem.text && <p style={textStyle}>{lastItem.text}</p>}
            </div>
          )}
          {images?.map(({ id, image, text }) => (
            <div key={id} style={marqueeItemStyle}>
              {image && <img src={image} alt={`marquee-item-${id}`} style={imgStyle} />}
              {text && <p style={textStyle}>{text}</p>}
            </div>
          ))}
          {firstItem && (
            <div style={marqueeItemStyle}>
              {firstItem.image && <img src={firstItem.image} alt={`marquee-item-first`} style={imgStyle} />}
              {firstItem.text && <p style={textStyle}>{firstItem.text}</p>}
            </div>
          )}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeWapper;
