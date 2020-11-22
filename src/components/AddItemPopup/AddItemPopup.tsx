import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal, ModalBaseProps } from '../Modal';
import { Button } from '../Button';
import { Loader } from '../Loader';
import { hideModal, selectModalProps } from '../../store/modal';
import { addItem, selectLoading } from '../../store/items';

import './AddItemPopup.scss';


export interface AddItemPopupProps extends ModalBaseProps {}

export const AddItemPopup: React.FC<AddItemPopupProps> = () => {
  const dispatch = useDispatch();
  const modalProps = useSelector(selectModalProps);
  const loading = useSelector(selectLoading);

  const { name }: {name?: string} = modalProps || {};

  const handleCancel = () => {
    dispatch(hideModal());
  };

  const handleConfirm = () => {
    dispatch(addItem());
  };

  return (
    <Modal>
      <div className="AddItem">
        <div className="AddItem__title">Add</div>
        <div className="AddItem__message">{`Are you sure to add ${name}?`}</div>
        <div className="AddItem__actions">
          <div className="AddItem__button">
            <Button onClick={handleCancel} secondary>
              Cancel
            </Button>
          </div>
          <div className="AddItem__button">
            <Button onClick={handleConfirm}>Add</Button>
          </div>
        </div>
        {loading && <div className="AddItem__loader"><Loader /></div>}
      </div>
    </Modal>
  );
};
