import React from "react";

const MedicineList = ({ data }) => {
  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {data.map((medicine) => (
          <li key={medicine.id}>
            {medicine.name} - Quantity: {medicine.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;