import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../Button';
import { hideModal } from '../../store/modal';

import { ModalBaseProps, Modal } from '../Modal';

import './ConfirmDeletePopup.scss';

export interface ConfirmDeletePopupProps extends ModalBaseProps {}

export const ConfirmDeletePopup: React.FC<ConfirmDeletePopupProps> = () => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(hideModal());
  };

  const handleConfirm = () => {
    dispatch(hideModal());
  };

  return (
    <Modal>
      <div className="ConfirmDelete">
        <div className="ConfirmDelete__title">Confirm</div>
        <div className="ConfirmDelete__message">Are you sure?</div>
        <div className="ConfirmDelete__actions">
          <div className="ConfirmDelete__button">
            <Button onClick={handleCancel} secondary>
              Cancel
            </Button>
          </div>
          <div className="ConfirmDelete__button">
            <Button onClick={handleConfirm}>Delete</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
