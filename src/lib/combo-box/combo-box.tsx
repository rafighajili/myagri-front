import { forwardRef, useRef, useState } from "react";
import {
  ComboBoxProps,
  Field,
  ListBox,
  Popover,
  TextInput,
  useFallbackProps,
  useFallbackRef,
} from "#/lib";
import { useComboBoxState } from "react-stately";
import {
  mergeProps,
  useComboBox,
  useFilter,
  useFocusWithin,
  useHover,
} from "react-aria";
import { FieldButton } from "#/lib/field/field-button";
import { ChevronDown } from "tabler-icons-react";
import styles from "./combo-box.module.css";

function ComboBox(props: ComboBoxProps, ref: any) {
  const { isDisabled, direction = "bottom" } = props;
  const fallbackProps = useFallbackProps(props, "combo-box");
  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({ ...fallbackProps, defaultFilter: contains });
  const groupRef: any = useRef(null);
  const inputRef = useFallbackRef(ref);
  const buttonRef = useRef(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);
  const { inputProps, buttonProps, listBoxProps, ...otherProps } = useComboBox(
    {
      ...fallbackProps,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );
  const { hoverProps, isHovered } = useHover({ isDisabled });
  const [isFocusWithin, setIsFocusWithin] = useState<boolean>(false);
  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => setIsFocusWithin(true),
    onBlurWithin: () => setIsFocusWithin(false),
  });

  return (
    <Field {...mergeProps(props, otherProps)}>
      <div
        ref={groupRef}
        className={styles.base}
        {...mergeProps(hoverProps, focusWithinProps)}
      >
        <TextInput
          ref={inputRef}
          inputProps={inputProps}
          {...fallbackProps}
          inputClassName={styles.self}
          isGroupHovered={isHovered}
        />
        <FieldButton
          ref={buttonRef}
          {...mergeProps(buttonProps, props)}
          className={styles.button}
          isGroupHovered={isHovered}
          isFocused={isFocusWithin}
          isActive={state.isOpen}
        >
          <ChevronDown aria-hidden="true" className={styles.icon} />
        </FieldButton>
      </div>

      {state.isOpen && (
        <Popover
          ref={popoverRef}
          state={state}
          triggerRef={inputRef}
          placement={`${direction} start`}
          hideArrow
          className={styles.popover}
          style={{ width: `${groupRef.current?.offsetWidth}px` }}
        >
          <ListBox
            ref={listBoxRef}
            state={state}
            {...listBoxProps}
            className={styles.list}
          />
        </Popover>
      )}
    </Field>
  );
}

const _ComboBox = forwardRef(ComboBox);
export { _ComboBox as ComboBox };
