import { forwardRef, useState } from 'react';
import { Field, NumberFieldProps, TextInput, useFallbackProps, useFallbackRef } from '#/lib';
import { mergeProps, useFocusWithin, useHover, useLocale, useNumberField } from 'react-aria';
import { useNumberFieldState } from 'react-stately';
import { FieldButton } from '#/lib/field/field-button';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';
import styles from './number-field.module.css';

function NumberField(props: NumberFieldProps, ref: any) {
  const inputRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props);
  const { isDisabled } = props;
  const { locale } = useLocale();
  const state = useNumberFieldState({ ...fallbackProps, locale });
  const { groupProps, inputProps, incrementButtonProps, decrementButtonProps, ...otherProps } = useNumberField(
    fallbackProps,
    state,
    inputRef
  );
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const [isFocusWithin, setIsFocusWithin] = useState<boolean>(props.autoFocus || false);
  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => setIsFocusWithin(true),
    onBlurWithin: () => setIsFocusWithin(false),
  });

  return (
    <Field {...mergeProps(props, otherProps)}>
      <div {...mergeProps(groupProps, hoverProps, focusWithinProps)} className={styles.group}>
        <TextInput
          ref={inputRef}
          inputProps={inputProps}
          {...props}
          fieldClassName={styles.base}
          inputClassName={styles.self}
          isGroupHovered={isHovered}
        />
        <FieldButton
          {...mergeProps(incrementButtonProps, props)}
          isGroupHovered={isHovered}
          isFocused={isFocusWithin}
          className={styles.increment}
        >
          <ChevronUp />
        </FieldButton>
        <FieldButton
          {...mergeProps(decrementButtonProps, props)}
          isGroupHovered={isHovered}
          isFocused={isFocusWithin}
          className={styles.decrement}
        >
          <ChevronDown />
        </FieldButton>
      </div>
    </Field>
  );
}

const _NumberField = forwardRef(NumberField);
export { _NumberField as NumberField };
