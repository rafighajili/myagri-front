import { AriaSwitchProps } from 'react-aria';
import { FieldBaseProps, StyleProps } from '#/lib';

export interface SwitchProps extends AriaSwitchProps, Pick<FieldBaseProps, 'RHF'>, StyleProps {}
