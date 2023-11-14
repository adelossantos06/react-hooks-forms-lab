import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingList from "./ShoppingList";

function ItemForm({ items, onItemFormSubmit }) {

  const [nameInput, setNameInput] = useState("")
  const [formCategory, setFormCategory] = useState("Produce")


  function handleSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: nameInput,
      category: formCategory,
    }
    onItemFormSubmit(newItem)
  }



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={formCategory} onChange={(e) => setFormCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
