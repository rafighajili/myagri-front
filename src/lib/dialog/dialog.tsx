import { forwardRef } from 'react';
import { DialogProps, Separator, useFallbackRef } from '#/lib';
import { useDialog } from 'react-aria';
import styles from './dialog.module.css';

function Dialog(props: DialogProps, ref: any) {
  const { children, heading } = props;
  const dialogRef = useFallbackRef(ref);
  const { dialogProps, titleProps } = useDialog(props, dialogRef);

  return (
    <div ref={dialogRef} {...dialogProps} className={styles.base}>
      {heading && (
        <>
          <h2 className={styles.heading}>{heading}</h2>
          <Separator />
        </>
      )}
      <div className={styles.children}>{children}</div>
    </div>
  );
}

const _Dialog = forwardRef(Dialog);
export { _Dialog as Dialog };
