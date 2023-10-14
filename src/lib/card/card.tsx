import { forwardRef } from 'react';
import { CardProps, useFallbackRef } from '#/lib';
import styles from './card.module.css';
import clsx from 'clsx';
import { mergeProps, useHover } from 'react-aria';

function Card(props: CardProps, ref: any) {
  const cardRef = useFallbackRef(ref);
  const { children, className, hasHoverStyles = false, style, ...otherProps } = props;
  const { hoverProps, isHovered } = useHover({ isDisabled: !hasHoverStyles });

  return (
    <div
      ref={cardRef}
      className={clsx(styles.base, { [styles['is-hovered']]: isHovered }, className)}
      style={style}
      {...mergeProps(hoverProps, otherProps)}
    >
      {children}
    </div>
  );
}

const _Card = forwardRef(Card);
export { _Card as Card };
