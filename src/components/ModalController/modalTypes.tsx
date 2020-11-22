import React from 'react';
import {
  ModalBaseProps,
} from '../Modal';

import { ModalTypes } from '../../enum';
import { ConfirmDeletePopup, ConfirmDeletePopupProps } from '../ConfirmDeletePopup';
import { AddItemPopup, AddItemPopupProps } from '../AddItemPopup';

export type ModalProps = ModalBaseProps | AddItemPopupProps | ConfirmDeletePopupProps;

export const Modals = {
  [ModalTypes.AddItem]: (props: ModalProps) => <AddItemPopup {...props} />,
  [ModalTypes.ConfirmDelete]: (props: ModalProps) => (
    <ConfirmDeletePopup {...(props as ConfirmDeletePopupProps)} />
  ),
};
