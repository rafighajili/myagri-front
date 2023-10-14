import { forwardRef } from 'react';
import { DismissButton, Overlay, usePopover } from 'react-aria';
import { Card, PopoverProps, useFallbackRef } from '#/lib';
import styles from './popover.module.css';
import clsx from 'clsx';

function Popover(props: PopoverProps, ref: any) {
  const { children, state, hideArrow = false, offset = 16, className, style } = props;
  const popoverRef = useFallbackRef(ref);
  const { underlayProps, popoverProps, arrowProps, placement } = usePopover({ ...props, popoverRef, offset }, state);

  return (
    <Overlay>
      <div {...underlayProps} className={styles.underlay} />
      <div ref={popoverRef} {...popoverProps}>
        <Card className={clsx(styles.base, className)} style={style}>
          {!hideArrow && (
            <svg viewBox="0 8 24 12" {...arrowProps} className={styles.arrow} data-placement={placement}>
              <path d="M0 0,L12 12,L24 0" />
            </svg>
          )}
          <DismissButton onDismiss={state.close} />
          {children}
          <DismissButton onDismiss={state.close} />
        </Card>
      </div>
    </Overlay>
  );
}

const _Popover = forwardRef(Popover);
export { _Popover as Popover };
