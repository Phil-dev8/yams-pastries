import React from "react";
import { useState, useEffect } from "react";
import "../styles/modal.scss";

const EditModal = ({
  isOpen,
  onClose,
  edit,
  cancel,
  pastrie,
  setEditPastrie,
  editPastrie,
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [id, setId] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (pastrie) {
      setId(pastrie.id);
      console.log(pastrie);
    }
  }, [pastrie]);

  const updatePastrie = () => {
    setEditPastrie({
      ...editPastrie,
      id: id,
      name: name,
      quantity: quantity,
      image: image,
    });
  };

  useEffect(() => {
    updatePastrie();
  }, [name, quantity, image]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    edit(editPastrie);
    console.log(editPastrie);
    onClose();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile.name);
    console.log(selectedFile);
    setImage(selectedFile.name);
    console.log(image);
  };

  return (
    <>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Modifier la Patisserie</h2>
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
            <button type="submit">Enregistrer les modifications</button>
            <button onClick={cancel}>Annuler les modifications</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditModal;
