import { AriaComboBoxProps } from 'react-aria';
import { FieldBaseProps } from '#/lib';

export interface ComboBoxProps extends AriaComboBoxProps<T>, FieldBaseProps {
  direction?: 'top' | 'bottom';
}
