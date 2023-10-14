import { forwardRef } from 'react';
import { RadioProps, useFallbackProps, useFallbackRef } from '#/lib';
import { mergeProps, useFocusRing, useHover, useRadio, VisuallyHidden } from 'react-aria';
import { useRadioProvider } from './context';
import clsx from 'clsx';
import styles from './radio.module.css';

function Radio(props: RadioProps, ref: any) {
  const inputRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const { children } = props;
  const groupState = useRadioProvider();
  const { inputProps, isDisabled, isSelected, isPressed } = useRadio(fallbackProps, groupState, inputRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <label
      {...hoverProps}
      className={clsx(styles.base, {
        [styles['is-hovered']]: isHovered,
        [styles['is-pressed']]: isPressed,
        [styles['is-checked']]: isSelected,
        [styles['is-invalid']]: groupState?.validationState === 'invalid',
        [styles['is-disabled']]: isDisabled,
        [styles['is-focus-visible']]: isFocusVisible,
      })}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={inputRef} />
      </VisuallyHidden>

      <div className={styles.circle} aria-hidden="true"></div>

      {children && <span className={styles.label}>{children}</span>}
    </label>
  );
}

const _Radio = forwardRef(Radio);
export { _Radio as Radio };
