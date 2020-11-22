import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideModal, selectModal } from '../../store/modal';

import { Modals, ModalProps } from './modalTypes';
import { ModalTypes } from '../../enum';

export const ModalController = () => {
  const dispatch = useDispatch();
  const { type, props = {} } = useSelector(selectModal);

  const handleClose = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  if (type === null) {
    return null;
  }

  const extendedProps: ModalProps = {
    onClose: handleClose,
    ...props,
  };

  const component = Modals[(type as unknown) as ModalTypes];

  return component ? component(extendedProps) : null;
};
