import { createContext, useContext } from 'react';
import { CheckboxGroupState } from 'react-stately';

export const CheckboxGroupContext = createContext<CheckboxGroupState | null>(null);

export function useCheckboxProvider(): CheckboxGroupState | null {
  return useContext(CheckboxGroupContext);
}
