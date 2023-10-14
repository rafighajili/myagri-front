import { AriaButtonProps } from 'react-aria';
import { ReactNode } from 'react';
import { StyleProps } from '#/lib';

export interface ButtonProps extends AriaButtonProps, StyleProps {
  /**
   * The variant of the button.
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'ghost';
  /**
   * The color of the button.
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'black-white' | 'alpha';
  /**
   * The size of the button.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /** Icon placed before the children. */
  startIcon?: ReactNode;
  /** Icon placed after the children. */
  endIcon?: ReactNode;
  /**
   * Whether the button has the full rounded border radius.
   * @default false
   */
  fullRounded?: boolean;
  /**
   * Whether the button has the full width of its parent.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Whether the button is loading.
   * @default false
   */
  isLoading?: boolean;
}

export interface IconButtonProps extends Omit<ButtonProps, 'startIcon' | 'endIcon' | 'fullWidth'> {}
