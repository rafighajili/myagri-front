import { AriaSelectProps } from 'react-aria';
import { FieldBaseProps } from '#/lib';

export interface SelectProps extends AriaSelectProps<T>, FieldBaseProps {
  direction?: 'top' | 'bottom';
}
