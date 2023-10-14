import { forwardRef } from 'react';
import { useSelectState } from 'react-stately';
import { Field, FieldButton, ListBox, Popover, SelectProps, useFallbackProps, useFallbackRef } from '#/lib';
import { HiddenSelect, mergeProps, useSelect } from 'react-aria';
import styles from './select.module.css';
import { ChevronDown } from 'tabler-icons-react';

function Select(props: SelectProps, ref: any) {
  const { direction = 'bottom' } = props;
  const selectRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props, 'select');
  const state = useSelectState(fallbackProps);
  const { triggerProps, menuProps, valueProps, ...otherProps } = useSelect(fallbackProps, state, selectRef);

  return (
    <Field {...mergeProps(props, otherProps)}>
      <HiddenSelect
        triggerRef={selectRef}
        state={state}
        label={props.label}
        name={props.name}
        isDisabled={props.isDisabled}
      />

      <FieldButton
        ref={selectRef}
        {...mergeProps(triggerProps, props)}
        className={styles.button}
        isActive={state.isOpen}
      >
        <span {...valueProps} className={styles.value}>
          {state.selectedItem ? state.selectedItem.rendered : <i>Select an option...</i>}
        </span>
        <ChevronDown aria-hidden="true" className={styles.icon} />
      </FieldButton>

      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={selectRef}
          placement={`${direction} start`}
          hideArrow
          className={styles.popover}
          style={{ width: `${selectRef.current?.offsetWidth}px` }}
        >
          <ListBox {...menuProps} state={state} className={styles.list} />
        </Popover>
      )}
    </Field>
  );
}

const _Select = forwardRef(Select);
export { _Select as Select };
