import { useState } from 'react';
import Modal from 'react-modal';
import css from './ConfirmationModal.module.css';

export const ConfirmationModal = ({ isOpen, closeModal, confirmDelete }) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    setIsConfirming(true);
    confirmDelete();
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={css.modalContent}
      overlayClassName={css.overlay}
      contentLabel="Confirmation Modal"
    >
      <div className={css.modalContainer}>
        <h2>Are you sure you want to delete this contact?</h2>
        <div className={css.buttonContainer}>
          <button className={css.deleteButton} onClick={handleConfirm}>Delete
          </button>
          <button className={css.cancelButton} onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

