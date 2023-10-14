import { ChildrenProp, StyleProps } from '#/lib';
import { AriaButtonProps, AriaFieldProps, FieldAria } from 'react-aria';
import { ElementType, ReactNode } from 'react';
import { DOMAttributes } from '@react-types/shared';
import { UseFormReturn } from 'react-hook-form';

interface FieldStateProps extends Pick<AriaFieldProps, 'validationState'> {
  /**
   * Weather the field is disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Weather the field is readonly.
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * Weather the field is required.
   * @default false
   */
  isRequired?: boolean;
}

export interface FieldBaseProps extends StyleProps {
  /** A ContextualHelp element to place next to the label. */
  contextualHelp?: ReactNode;
  includeNecessityIndicatorInAccessibilityName?: boolean;
  /**
   * Whether the required state should be shown as an icon or text.
   * @default 'icon'
   */
  necessityIndicator?: 'icon' | 'text';
  name?: string;
  /** Integrated React Hook Form to inputs. Pass the value returned from 'useForm()' hook. */
  RHF?: UseFormReturn<any>;
  labelElementType?: ElementType;
}

export interface FieldProps extends ChildrenProp, FieldStateProps, FieldBaseProps {
  label?: AriaFieldProps['label'];
  labelProps?: FieldAria['labelProps'];
  description?: AriaFieldProps['description'];
  descriptionProps?: FieldAria['descriptionProps'];
  errorMessage?: AriaFieldProps['errorMessage'];
  errorMessageProps?: FieldAria['errorMessageProps'];
}

export interface LabelProps
  extends Pick<
    FieldProps,
    | 'children'
    | 'includeNecessityIndicatorInAccessibilityName'
    | 'isDisabled'
    | 'isReadOnly'
    | 'isRequired'
    | 'labelProps'
    | 'necessityIndicator'
    | 'validationState'
    | 'labelElementType'
  > {}

export interface HelpTextProps
  extends Pick<
    FieldProps,
    | 'errorMessage'
    | 'errorMessageProps'
    | 'description'
    | 'descriptionProps'
    | 'isDisabled'
    | 'isReadOnly'
    | 'isRequired'
    | 'validationState'
  > {}

export interface TextInputBaseProps {
  /** Icon placed at the beginning of the text input. */
  startIcon?: ReactNode;
  /** Icon placed at the end of the text input. */
  endIcon?: ReactNode;
}

export interface TextInputProps
  extends ChildrenProp,
    Omit<FieldStateProps, 'isReadOnly' | 'isRequired'>,
    TextInputBaseProps {
  fieldProps?: DOMAttributes;
  inputProps?: DOMAttributes;
  fieldClassName?: string;
  inputClassName?: string;
  isGroupHovered?: boolean;
  fieldChildren?: ReactNode;
}

export interface FieldButtonProps
  extends AriaButtonProps,
    StyleProps,
    Pick<TextInputProps, 'isGroupHovered'>,
    Pick<AriaFieldProps, 'validationState'> {
  isActive?: boolean;
  isFocused?: boolean;
}
