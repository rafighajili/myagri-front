import { HTMLAttributes } from 'react';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The color of the spinner.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'black-white' | 'white-black';
  /**
   * The size of the spinner.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}
