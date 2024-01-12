import React from "react";
import {
  useGetPastriesQuery,
  //   useGetPastriesByIDQuery,
  useAddPastrieMutation,
  useModifyPastriesMutation,
  useDeletePastrieMutation,
} from "../slices/pastriesApiSlice";
import { useState } from "react";
import EditModal from "../components/EditModal";
import AddModal from "../components/AddModal";

const Admin = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetPastriesQuery();
  const [selectedPastrie, setSelectedPastrie] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [editPastrie, setEditPastrie] = useState({
    id: "",
    name: "",
    quantity: "",
    image: "",
  });
  const [newPastrie, setNewPastrie] = useState({
    name: "",
    quantity: "",
    image: "",
  });

  const openAddModal = () => {
    setIsOpen(true);
  };
  const closeAddModal = () => {
    setIsOpen(false);
  };

  const [triggerAddPastrie, requestAddPastrie] = useAddPastrieMutation();
  const [triggerDeletePastrie, requestDeletePastrie] =
    useDeletePastrieMutation();

  const [triggerModifyPastrie, requestModifyPastrie] =
    useModifyPastriesMutation();

  const openEditModal = (pastrie) => {
    setSelectedPastrie(pastrie);
  };

  const closeEditModal = () => {
    setSelectedPastrie(null);
  };

  const modifyPastrie = () => {
    triggerModifyPastrie(editPastrie);
    closeEditModal();
  };

  const addPastrie = () => {
    triggerAddPastrie(newPastrie);
  };

  const deletePastrie = (id) => {
    triggerDeletePastrie(id);
  };

  return (
    <div id="wrapper">
      <h1>Back-Office</h1>
      <button id="add-btn" onClick={openAddModal}>
        Ajouter une patisserie
      </button>

      <table id="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Quantité restantes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((pastrie) => (
              <tr key={pastrie.id}>
                <td>
                  <img
                    src={pastrie.image ? pastrie.image : editPastrie.image}
                    alt=""
                  />
                </td>
                <td>{pastrie.name}</td>
                <td>{pastrie.quantity}</td>
                <td>
                  <div id="button-div">
                    <button onClick={() => openEditModal(pastrie)}>
                      Modifier
                    </button>
                    <button onClick={() => deletePastrie(pastrie.id)}>
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <EditModal
        isOpen={!!selectedPastrie}
        onClose={closeEditModal}
        edit={modifyPastrie}
        cancel={closeEditModal}
        pastrie={selectedPastrie}
        setEditPastrie={setEditPastrie}
        editPastrie={editPastrie}
      />
      {isOpen && (
        <AddModal
          addPastrie={addPastrie}
          onClose={closeAddModal}
          cancel={closeAddModal}
          newPastrie={newPastrie}
          setNewPastrie={setNewPastrie}
        />
      )}
    </div>
  );
};

export default Admin;
