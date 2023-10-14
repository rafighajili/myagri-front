import { AriaCheckboxGroupProps, AriaCheckboxProps, Orientation } from 'react-aria';
import { ChildrenProp, FieldBaseProps, StyleProps } from '#/lib';

export interface CheckboxProps extends AriaCheckboxProps, Pick<FieldBaseProps, 'RHF'>, StyleProps {}

export interface CheckboxGroupProps extends AriaCheckboxGroupProps, FieldBaseProps, ChildrenProp {
  orientation?: Orientation;
}
