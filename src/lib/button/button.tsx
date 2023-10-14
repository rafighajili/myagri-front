import { forwardRef } from 'react';
import { ButtonProps, Spinner, useFallbackRef } from '#/lib';
import styles from './button.module.css';
import clsx from 'clsx';
import { FocusRing, mergeProps, useButton, useHover } from 'react-aria';

function Button(props: ButtonProps, ref: any) {
  const buttonRef = useFallbackRef(ref);
  const {
    children,
    className,
    color = 'primary',
    endIcon,
    fullRounded = false,
    fullWidth = false,
    isDisabled = false,
    isLoading = false,
    size = 'medium',
    startIcon,
    style,
    variant = 'contained',
  } = props;
  const disabled = isDisabled || isLoading;
  const { buttonProps, isPressed } = useButton({ isDisabled: disabled, ...props }, buttonRef);
  const { hoverProps, isHovered } = useHover({ isDisabled: disabled });

  return (
    <FocusRing focusRingClass={styles['is-focus-visible']} autoFocus={props.autoFocus}>
      <button
        ref={buttonRef}
        {...mergeProps(buttonProps, hoverProps)}
        className={clsx(
          styles.base,
          styles[color],
          styles[size],
          styles[variant],
          {
            [styles['is-hovered']]: isHovered,
            [styles['is-pressed']]: isPressed,
            [styles['full-rounded']]: fullRounded,
            [styles['full-width']]: fullWidth,
          },
          className
        )}
        style={style}
      >
        {isLoading ? (
          <Spinner
            color={color === 'alpha' ? 'black-white' : variant === 'contained' ? 'white-black' : color}
            size={size}
          />
        ) : (
          startIcon
        )}
        {children}
        {endIcon}
      </button>
    </FocusRing>
  );
}

const _Button = forwardRef(Button);
export { _Button as Button };
