import { useEffect, useState } from 'react';

type Type =
  | 'checkbox'
  | 'checkbox-group'
  | 'combo-box'
  | 'date-field'
  | 'time-field'
  | 'list-box'
  | 'number-field'
  | 'radio'
  | 'radio-group'
  | 'search-field'
  | 'select'
  | 'switch'
  | 'text-field';

function useFallbackProps(props: any, type?: Type) {
  const { RHF, name } = props;
  const hasRHF = !!RHF && !!name;
  const [currentState, setCurrentState] = useState(hasRHF ? RHF.getValues(name) : null);
  let fallbackProps;

  switch (type) {
    case 'select':
    case 'combo-box':
      fallbackProps = {
        ...props,
        selectedKey: currentState,
        onSelectionChange: (selected: any) => setCurrentState(selected),
      };
      break;

    case 'list-box':
      fallbackProps = {
        ...props,
        selectedKeys: currentState,
        onSelectionChange: setCurrentState,
      };
      break;

    default:
      fallbackProps = {
        ...props,
        value: currentState,
        onChange: setCurrentState,
      };
      break;
  }

  useEffect(() => {
    if (hasRHF) {
      RHF.setValue(name, currentState);
    }
  }, [currentState, hasRHF]);

  return hasRHF ? fallbackProps : props;
}

export { useFallbackProps };
