import { forwardRef } from 'react';
import { SpinnerProps } from '#/lib';
import styles from './spinner.module.css';
import clsx from 'clsx';

function Spinner(props: SpinnerProps, ref: any) {
  const { className, color = 'primary', size = 'medium', ...otherProps } = props;

  return <span ref={ref} className={clsx(styles.base, styles[color], styles[size], className)} {...otherProps} />;
}

const _Spinner = forwardRef(Spinner);
export { _Spinner as Spinner };
