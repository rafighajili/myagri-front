import { AriaRadioGroupProps, AriaRadioProps, Orientation } from 'react-aria';
import { ChildrenProp, FieldBaseProps } from '#/lib';

export interface RadioProps extends AriaRadioProps, Pick<FieldBaseProps, 'RHF'> {}

export interface RadioGroupProps extends AriaRadioGroupProps, FieldBaseProps, ChildrenProp {
  orientation?: Orientation;
}
