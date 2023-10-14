import { forwardRef } from 'react';
import { TextInputProps } from '#/lib';
import styles from './text-input.module.css';
import { AlertTriangle, Check } from 'tabler-icons-react';
import clsx from 'clsx';
import { FocusRing, useHover } from 'react-aria';

function TextInput(props: TextInputProps, ref: any) {
  const {
    children,
    fieldChildren,
    fieldClassName,
    inputClassName,
    fieldProps,
    inputProps,
    startIcon,
    endIcon,
    validationState,
    isDisabled,
    isGroupHovered,
  } = props;
  const { hoverProps, isHovered } = useHover({ isDisabled });

  const inputStyles = clsx(
    styles.self,
    {
      [styles['has-start-icon']]: !!startIcon,
      [styles['has-end-icon']]: !!endIcon,
      [styles['has-validation-icon']]: !!validationState,
      [styles['is-hovered']]: isHovered || isGroupHovered,
      [styles['is-invalid']]: validationState === 'invalid',
    },
    inputClassName
  );

  const validationIconOptions = {
    valid: <Check className={styles.valid} />,
    invalid: <AlertTriangle className={styles.invalid} />,
  };

  return (
    <div
      className={clsx(
        styles.base,
        {
          [styles['is-disabled']]: isDisabled,
        },
        fieldClassName
      )}
      {...hoverProps}
    >
      {!!startIcon && <span className={styles.start}>{startIcon}</span>}

      <FocusRing within isTextInput focusClass={styles['is-focused']} focusRingClass={styles['is-focus-visible']}>
        {!!inputProps ? (
          <input ref={ref} {...inputProps} className={inputStyles} />
        ) : (
          <div ref={ref} {...fieldProps} className={clsx(inputStyles, styles.field)}>
            {fieldChildren}
          </div>
        )}
      </FocusRing>

      {!!validationState && <span className={styles.validation}>{validationIconOptions[validationState]}</span>}

      {!!endIcon && <span className={styles.end}>{endIcon}</span>}

      {children}
    </div>
  );
}

const _TextInput = forwardRef(TextInput);
export { _TextInput as TextInput };
