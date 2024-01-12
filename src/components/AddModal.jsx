import React from "react";
import { useState, useEffect } from "react";
import "../styles/modal.scss";

const AddModal = ({
  addPastrie,
  onClose,
  cancel,
  newPastrie,
  setNewPastrie,
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(null);

  const pastrie = () => {
    setNewPastrie({
      name: name,
      quantity: quantity,
      image: image,
    });
  };

  useEffect(() => {
    pastrie();
  }, [name, quantity, image]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPastrie(newPastrie);
    onClose();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile.name);
  };

  return (
    <>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Ajouter la Patisserie</h2>
        <form onSubmit={handleSubmit}>
          <label>Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Quantité</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label>Image</label>
          <input type="file" onChange={handleFileChange} />
          <div className="div-button">
            <button type="submit">Ajouter la patisserie</button>
            <button onClick={cancel}>Annuler</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddModal;
