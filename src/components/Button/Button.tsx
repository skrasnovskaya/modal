import React from 'react';
import cx from 'classnames';

import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fluid?: boolean;
  secondary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  fluid,
  secondary,
  ...rest
}) => (
  <button
    className={cx('Button', {
      'Button--fluid': fluid,
      'Button--secondary': secondary,
    })}
    {...rest}
  >
    {children}
  </button>
);
