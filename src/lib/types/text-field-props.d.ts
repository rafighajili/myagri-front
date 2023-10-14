import { FieldBaseProps, TextInputBaseProps } from '#/lib';
import { AriaTextFieldProps } from 'react-aria';

export interface TextFieldProps extends FieldBaseProps, TextInputBaseProps, AriaTextFieldProps {}
