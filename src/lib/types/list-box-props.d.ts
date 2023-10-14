import { AriaListBoxProps, AriaListBoxSectionProps, AriaOptionProps } from 'react-aria';
import { Node } from '@react-types/shared';
import { ListState } from 'react-stately';
import { FieldBaseProps } from '#/lib';

export interface ListBoxProps extends FieldBaseProps, AriaListBoxProps<T> {
  children?: AriaListBoxProps<T>['children'];
  state?: ListState<T>;
}

export interface OptionProps extends AriaOptionProps {
  item: Node<T>;
  state: ListState<T>;
}

export interface ListBoxSectionProps extends AriaListBoxSectionProps {
  section: Node<T>;
  state: ListState<T>;
}
