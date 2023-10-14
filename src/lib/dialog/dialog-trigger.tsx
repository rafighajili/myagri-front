import { cloneElement, forwardRef } from 'react';
import { useOverlayTriggerState } from 'react-stately';
import { useOverlayTrigger } from 'react-aria';
import { DialogTriggerProps, Modal, Popover, useFallbackRef } from '#/lib';

function DialogTrigger(props: DialogTriggerProps, ref: any) {
  const { children, type = 'modal' } = props;
  const dialogTriggerRef = useFallbackRef(ref);
  const state = useOverlayTriggerState(props);
  const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, dialogTriggerRef);
  const [trigger, content] = children;

  const popoverTrigger = (
    <Popover {...props} state={state} triggerRef={dialogTriggerRef}>
      {cloneElement(typeof content === 'function' ? content({ close: state.close }) : content, overlayProps)}
    </Popover>
  );

  const modalTrigger = (
    <Modal {...props} state={state}>
      {cloneElement(typeof content === 'function' ? content({ close: state.close }) : content, overlayProps)}
    </Modal>
  );

  return (
    <>
      {cloneElement(trigger, { ...triggerProps, ref: dialogTriggerRef })}
      {state.isOpen && (type === 'popover' ? popoverTrigger : modalTrigger)}
    </>
  );
}

const _DialogTrigger = forwardRef(DialogTrigger);
export { _DialogTrigger as DialogTrigger };
