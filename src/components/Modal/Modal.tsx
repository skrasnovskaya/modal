import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import './Modal.scss';

export interface ModalBaseProps {
  onClose?: () => void;
}

const modalRoot = document.body;

export const Modal: React.FC<ModalBaseProps> = ({ children, onClose }) => {

  const containerRef = useRef<HTMLElement | null>(null);

  if (!containerRef.current) {
    containerRef.current = document.createElement('div');
  }

  useEffect(() => {
    if (modalRoot) {
      modalRoot.appendChild(containerRef.current as Node);
    }
    return () => {
      if (modalRoot) {
        modalRoot.removeChild(containerRef.current as Node);
      }
    };
  }, []);

  const container = containerRef.current;

  const content = (
    <div className="ModalDimmer">
      <div className="Modal">
        {children}
      </div>
    </div>
  );

  return createPortal(content, container);
};
