import React, { useState } from 'react';

function Component() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handlePayment(event) {
        setPayment(event.target.value);
    }

    function handleShipping(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            {/* Name Input */}
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
            />
            <p>Name: {name}</p>

            {/* Quantity Input */}
            <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                placeholder="Enter quantity"
                min="0"
            />
            <p>Quantity: {quantity}</p>

            {/* Payment Method Select */}
            <select value={payment} onChange={handlePayment}>
                <option value="">Select a payment method</option>
                <option value="visa">Visa</option>
                <option value="mastercard">MasterCard</option>
                <option value="golden">Golden</option>
            </select>
            <p>Payment Method: {payment}</p>

            {/* Shipping Options */}
            <div>
                <label>
                    <input
                        type="radio"
                        value="pick up"
                        checked={shipping === "pick up"}
                        onChange={handleShipping}
                    />
                    Pick Up
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShipping}
                    />
                    Delivery
                </label>
            </div>
            <p>Shipping: {shipping}</p>
        </div>
    );
}

export default Component;
