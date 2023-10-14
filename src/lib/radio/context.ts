import { RadioGroupState } from '@react-stately/radio';
import { createContext, useContext } from 'react';

export const RadioGroupContext = createContext<any>(null);

export function useRadioProvider(): RadioGroupState {
  return useContext(RadioGroupContext);
}
