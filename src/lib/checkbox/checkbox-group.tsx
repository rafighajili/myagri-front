import { CheckboxGroupProps, Field, useFallbackProps } from '#/lib';
import { CheckboxGroupContext } from './context';
import { useCheckboxGroupState } from 'react-stately';
import { mergeProps, useCheckboxGroup } from 'react-aria';
import styles from './checkbox-group.module.css';

function CheckboxGroup(props: CheckboxGroupProps) {
  const { children, orientation = 'vertical' } = props;
  const fallbackProps = useFallbackProps(props);
  const state = useCheckboxGroupState(fallbackProps);
  const { groupProps, ...otherProps } = useCheckboxGroup(fallbackProps, state);

  return (
    <Field {...mergeProps(fallbackProps, otherProps)} labelElementType="span">
      <CheckboxGroupContext.Provider value={state}>
        <div {...groupProps} className={styles[orientation]}>
          {children}
        </div>
      </CheckboxGroupContext.Provider>
    </Field>
  );
}

export { CheckboxGroup };
