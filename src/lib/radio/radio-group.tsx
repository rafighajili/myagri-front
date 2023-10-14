import { Field, RadioGroupProps, useFallbackProps } from '#/lib';
import { useRadioGroupState } from 'react-stately';
import { mergeProps, useRadioGroup } from 'react-aria';
import { RadioGroupContext } from './context';
import styles from './radio-group.module.css';

function RadioGroup(props: RadioGroupProps) {
  const { children, orientation = 'vertical' } = props;
  const fallbackProps = useFallbackProps(props);
  const state = useRadioGroupState(fallbackProps);
  const { radioGroupProps, ...otherProps } = useRadioGroup(fallbackProps, state);

  return (
    <Field {...mergeProps(fallbackProps, otherProps)} labelElementType="span">
      <RadioGroupContext.Provider value={state}>
        <div {...radioGroupProps} className={styles[orientation]}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    </Field>
  );
}

export { RadioGroup };
