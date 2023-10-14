import { forwardRef } from 'react';
import { Overlay, useModalOverlay } from 'react-aria';
import { Card, IconButton, ModalProps, useFallbackRef } from '#/lib';
import styles from './modal.module.css';
import { X } from 'tabler-icons-react';

function Modal(props: ModalProps, ref: any) {
  const { children, state, isDismissable } = props;
  const modalRef = useFallbackRef(ref);
  const { underlayProps, modalProps } = useModalOverlay(props, state, modalRef);

  return (
    <Overlay>
      <div {...underlayProps} className={styles.base}>
        <Card ref={modalRef} {...modalProps} className={styles.content}>
          {children}
          {isDismissable && (
            <IconButton className={styles.dismiss} variant="ghost" color="alpha" size="small" onPress={state.close}>
              <X />
            </IconButton>
          )}
        </Card>
      </div>
    </Overlay>
  );
}

const _Modal = forwardRef(Modal);
export { _Modal as Modal };
