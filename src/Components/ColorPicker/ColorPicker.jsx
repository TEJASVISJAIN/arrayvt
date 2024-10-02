import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff"); // Default color
  const [showPicker, setShowPicker] = useState(false);
  
  // Predefined color options
  const colors = ["#f00", "#0f0", "#00f", "#ff0"]; // Add your colors here

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    document.documentElement.style.setProperty("--base", newColor.hex);
    localStorage.setItem("baseColor", newColor.hex); // Save to local storage
  };
  useEffect(() => {
    const savedColor = localStorage.getItem("baseColor");
    if (savedColor) {
      setColor(savedColor);
      document.documentElement.style.setProperty("--base", savedColor);
    }
  }, []);
  

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  return (
    <div>
      <button onClick={togglePicker} className="color-picker-icon">
        🌈
      </button>
      {showPicker && (
        <div>
          <ChromePicker color={color} onChangeComplete={handleColorChange} />
          <div className="predefined-colors">
            {colors.map((c, index) => (
              <div
                key={index}
                onClick={() => handleColorChange({ hex: c })}
                style={{
                  backgroundColor: c,
                  width: "30px",
                  height: "30px",
                  display: "inline-block",
                  cursor: "pointer",
                  margin: "0 5px",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
