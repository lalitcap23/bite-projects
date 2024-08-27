import React from 'react';

function Pp() {
    const imgUrl = './src/assets/a.jpg';
    
    const handleClick = (e) => {
        e.target.style.display = "none";
    };

    return (
        <img onClick={handleClick} src={imgUrl} alt="Image" />
    );
}

export default Pp;
