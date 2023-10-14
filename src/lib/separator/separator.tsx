import { useSeparator } from 'react-aria';
import styles from './separator.module.css';
import { forwardRef } from 'react';
import { SeparatorProps, useFallbackRef } from '#/lib';
import clsx from 'clsx';

function Separator(props: SeparatorProps, ref: any) {
  const { orientation = 'horizontal', size = 'medium', className, style, elementType: ElementType = 'div' } = props;
  const separatorRef = useFallbackRef(ref);
  const { separatorProps } = useSeparator(props);

  return (
    <ElementType
      ref={separatorRef}
      {...separatorProps}
      // @ts-ignore
      className={clsx(styles.base, styles[size], styles[orientation], className)}
      style={style}
    />
  );
}

const _Separator = forwardRef(Separator);
export { _Separator as Separator };
