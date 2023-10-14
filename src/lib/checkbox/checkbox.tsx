import { forwardRef } from 'react';
import { CheckboxProps, useFallbackProps, useFallbackRef } from '#/lib';
import { mergeProps, useCheckbox, useCheckboxGroupItem, useFocusRing, useHover, VisuallyHidden } from 'react-aria';
import { useCheckboxProvider } from './context';
import { useToggleState } from 'react-stately';
import clsx from 'clsx';
import styles from './checkbox.module.css';

function Checkbox(props: CheckboxProps, ref: any) {
  const { className, style } = props;
  const inputRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const { children, validationState } = props;
  const checkboxState = useToggleState({
    isSelected: !!props.RHF ? fallbackProps.value : fallbackProps.isSelected,
    ...fallbackProps,
  });
  const groupState = useCheckboxProvider();
  const { inputProps, isDisabled, isSelected, isPressed } = !!groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...fallbackProps,
          // @ts-ignore
          value: fallbackProps.value,
          validationState: groupState.validationState,
        },
        groupState,
        inputRef
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(fallbackProps, checkboxState, inputRef);
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
          [styles['is-invalid']]: validationState === 'invalid' || groupState?.validationState === 'invalid',
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

      <div className={styles.square} aria-hidden="true">
        <svg viewBox="0 0 18 18">
          <polyline
            points="1 9 7 14 15 4"
            strokeWidth={3}
            strokeDasharray={22}
            strokeDashoffset={isSelected ? 44 : 66}
          />
        </svg>
      </div>

      {children && <span className={styles.label}>{children}</span>}
    </label>
  );
}

const _Checkbox = forwardRef(Checkbox);
export { _Checkbox as Checkbox };
