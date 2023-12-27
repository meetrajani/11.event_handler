import React from "react";
import MedicineList from "./MedicineList";
import InventoryForm from "./InventoryForm";

const orgData = [
  // Your orgData array...

    {
    
    id: 101,
    
    name: 'Abacavir',
    
    quantity: 25,
    
    price: 150,
    
    expiry: 2022
    
    },
    
    {
    
    id: 102,
    
    name: 'Eltrombopag',
    
    quantity: 90,
    
    price: 550,
    
    expiry: 2021
    
    },
    
    {
    
    id: 103,
    
    name: 'Meloxicam',
    
    quantity: 85,
    
    price: 450,
    
    expiry: 2025
    
    },
    
    {
    
    id: 104,
    
    name: 'Allopurinol',
    
    quantity: 50,
    
    price: 600,
    
    expiry: 2023
    
    },
    
    {
    
    id: 105,
    
    name: 'Phenytoin',
    
    quantity: 63,
    
    price: 250,
    
    expiry: 2021
    
    },
    
    
];

const MedicineComponent = () => {
  return (
    <div>
      <h1>Medicine Inventory</h1>
      <MedicineList data={orgData} />
      <InventoryForm />
    </div>
  );
};

export default MedicineComponent;