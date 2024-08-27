import React from 'react';

function Button1() {
    const handleClick = (e) => e.target.textContent = "Ouch!";

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

export default Button1;
