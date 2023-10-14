import { forwardRef } from 'react';
import { SwitchProps, useFallbackProps, useFallbackRef } from '#/lib';
import { useToggleState } from 'react-stately';
import { mergeProps, useFocusRing, useHover, useSwitch, VisuallyHidden } from 'react-aria';
import clsx from 'clsx';
import styles from './switch.module.css';

function Switch(props: SwitchProps, ref: any) {
  const { className, style } = props;
  const inputRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const { children } = props;
  const state = useToggleState({ isSelected: fallbackProps.value, ...fallbackProps });
  const { inputProps, isPressed, isDisabled, isSelected } = useSwitch(fallbackProps, state, inputRef);
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <label
      {...hoverProps}
      className={clsx(
        styles.base,
        {
          [styles['is-hovered']]: isHovered,
          [styles['is-pressed']]: isPressed,
          [styles['is-checked']]: isSelected,
          [styles['is-disabled']]: isDisabled,
          [styles['is-focus-visible']]: isFocusVisible,
        },
        className
      )}
      style={style}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={inputRef} />
      </VisuallyHidden>

      <div className={styles.container} aria-hidden="true">
        <span className={styles.circle}></span>
      </div>

      {children && <span className={styles.label}>{children}</span>}
    </label>
  );
}

const _Switch = forwardRef(Switch);
export { _Switch as Switch };
