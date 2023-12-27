import React, { useRef, useState } from "react";

const InventoryForm = () => {
  const nameRef = useRef(null);
  const quantityRef = useRef(null);
  const priceRef = useRef(null);
  const expiryRef = useRef(null);

  const [focusElement, setFocusElement] = useState(null);

  const handleFocusChange = (ref) => {
    if (ref) {
      ref.current.focus();
      setFocusElement(ref);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve values from refs
    const name = nameRef.current.value;
    const quantity = quantityRef.current.value;
    const price = priceRef.current.value;
    const expiry = expiryRef.current.value;

    // Do something with the values (e.g., update state, submit data, etc.)

    // Clear input values
    nameRef.current.value = "";
    quantityRef.current.value = "";
    priceRef.current.value = "";
    expiryRef.current.value = "";

    // Change focus to the next element
    handleFocusChange(nameRef);
  };

  return (
    <div>
      <h2>Add New Medicine</h2>
      <form onSubmit={handleSubmit}>
        {/* Form elements */}
      </form>
      <p>
        Current focused element:{" "}
        {focusElement ? focusElement.current.id : "None"}
      </p>
    </div>
  );
};

export default InventoryForm;