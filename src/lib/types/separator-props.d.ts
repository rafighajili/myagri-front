import { SeparatorProps as AriaSeparatorProps } from 'react-aria';
import { StyleProps } from '#/lib';

export interface SeparatorProps extends AriaSeparatorProps, StyleProps {
  size?: 'small' | 'medium' | 'large';
}
