import React, { useState } from 'react';
import './ColorPickerModal.scss'; // Create a separate SCSS file for styles

const ColorPickerModal = ({ isOpen, onClose, onColorChange }) => {
  const [color, setColor] = useState('--base'); // Default color variable

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    onColorChange(selectedColor); // Update the color in the parent component
  };

  return (
    isOpen && (
      <div className="color-picker-modal">
        <div className="modal-content">
          <h3>Pick a Color</h3>
          <input
            type="color"
            value={color}
            onChange={handleColorChange}
          />
          <div className="preset-colors">
            {['--base', '--title', '--primary', '--secondary'].map((varName) => (
              <div
                key={varName}
                className="preset-color"
                style={{ backgroundColor: `var(${varName})` }}
                onClick={() => handleColorChange({ target: { value: varName } })}
              ></div>
            ))}
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  );
};

export default ColorPickerModal;
