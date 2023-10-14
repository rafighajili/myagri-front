import { AriaDialogProps, AriaModalOverlayProps, AriaPopoverProps } from 'react-aria';
import { OverlayTriggerProps, OverlayTriggerState } from 'react-stately';
import { ChildrenProp, StyleProps } from '#/lib';
import { ReactElement, ReactNode } from 'react';

export interface DialogProps extends AriaDialogProps, ChildrenProp {
  heading?: ReactNode;
}

export interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'>, ChildrenProp, StyleProps {
  state: OverlayTriggerState;
  hideArrow?: boolean;
}

export interface ModalProps extends AriaModalOverlayProps, ChildrenProp {
  state: OverlayTriggerState;
}

export interface DialogTriggerProps
  extends OverlayTriggerProps,
    Omit<PopoverProps, 'state' | 'triggerRef'>,
    Omit<ModalProps, 'state'> {
  children: [ReactElement, ReactElement] | [ReactElement, (props: { close: () => void }) => ReactElement];
  type?: 'modal' | 'popover';
}
