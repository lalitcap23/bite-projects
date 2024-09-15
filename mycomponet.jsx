import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    useEffect(() => {
        console.log("Component mounted");
    }, []);

    const updateName = () => setName("Jack");

    const updateAge = () => setAge(prevAge => prevAge + 1);

    return (
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
            </div>
            <div>
                <p>Age: {age}</p>
                <button onClick={updateAge}>Set Age</button>
            </div>
        </>
    );
}

export default MyComponent;
