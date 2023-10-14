import { forwardRef } from 'react';
import { FieldButtonProps, useFallbackRef } from '#/lib';
import { FocusRing, mergeProps, useButton, useHover } from 'react-aria';
import styles from './field-button.module.css';
import clsx from 'clsx';

function FieldButton(props: FieldButtonProps, ref: any) {
  const buttonRef = useFallbackRef(ref);
  const { children, className, isDisabled, isGroupHovered, validationState, isActive, isFocused } = props;
  const { buttonProps, isPressed } = useButton(props, buttonRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });

  return (
    <FocusRing focusRingClass={styles['is-focus-visible']} autoFocus={props.autoFocus}>
      <button
        ref={buttonRef}
        {...mergeProps(buttonProps, hoverProps)}
        className={clsx(
          styles.base,
          {
            [styles['is-hovered']]: isHovered,
            [styles['is-group-hovered']]: isGroupHovered,
            [styles['is-pressed']]: isPressed || isActive,
            [styles['is-disabled']]: isDisabled,
            [styles['is-invalid']]: validationState === 'invalid',
            [styles['is-focused']]: isFocused,
          },
          className
        )}
      >
        {children}
      </button>
    </FocusRing>
  );
}

const _FieldButton = forwardRef(FieldButton);
export { _FieldButton as FieldButton };
