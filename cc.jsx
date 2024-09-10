import React, { useState } from 'react';

function ColorPicker() {
    const [color, setColor] = useState("#ffffff"); 

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ background: color }}></div>
            <p>Selected: {color}</p>
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;
