import React, { useState, useEffect, useRef } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ mode }) => {
  const [color, setColor] = useState("#ffffff"); // Default color
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef(null); // Reference for the color picker

  // Predefined color options
  const colors = ["#f00", "#0f0", "#00f", "#ff0"]; // Add your colors here

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);

    // Update the --base color depending on the mode (light or dark)
    const baseVar = mode === "dark" ? "--base-dark" : "--base";
    document.documentElement.style.setProperty(baseVar, newColor.hex);
    
    // Store color and mode-specific setting in localStorage
    localStorage.setItem(`baseColor-${mode}`, newColor.hex);
  };

  // Retrieve saved color on mount
  useEffect(() => {
    const savedColor = localStorage.getItem(`baseColor-${mode}`);
    if (savedColor) {
      setColor(savedColor);
      const baseVar = mode === "dark" ? "--base-dark" : "--base";
      document.documentElement.style.setProperty(baseVar, savedColor);
    }
  }, [mode]); // Watch for changes in the mode

  // Toggle color picker visibility
  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  // Close the picker if clicked outside
  const handleClickOutside = (e) => {
    if (pickerRef.current && !pickerRef.current.contains(e.target)) {
      setShowPicker(false);
    }
  };

  // Add event listener for clicks outside the color picker
  useEffect(() => {
    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);

  return (
    <div className="color-picker-wrapper">
      {!showPicker && (
        <button onClick={togglePicker} className="color-picker-icon">
          🌈
        </button>
      )}
      {showPicker && (
        <div ref={pickerRef}>
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
