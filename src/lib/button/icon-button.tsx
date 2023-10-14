import { forwardRef } from 'react';
import { Button, IconButtonProps } from '#/lib';
import styles from './icon-button.module.css';
import clsx from 'clsx';

function IconButton(props: IconButtonProps, ref: any) {
  const { className, style } = props;

  return (
    <Button ref={ref} {...props} className={clsx(styles.base, className)} style={style}>
      {!props.isLoading && props.children}
    </Button>
  );
}

const _IconButton = forwardRef(IconButton);
export { _IconButton as IconButton };
