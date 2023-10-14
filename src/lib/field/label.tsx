import { LabelProps } from '#/lib';
import styles from './label.module.css';
import { Asterisk } from 'tabler-icons-react';

function Label(props: LabelProps) {
  const {
    children,
    includeNecessityIndicatorInAccessibilityName,
    isDisabled,
    isReadOnly,
    isRequired,
    labelElementType: ElementType = 'label',
    labelProps,
    necessityIndicator,
    validationState,
  } = props;
  const necessityLabel = isRequired ? '(required)' : '(optional)';
  const icon = <Asterisk aria-label={includeNecessityIndicatorInAccessibilityName ? '(required)' : undefined} />;

  return (
    <ElementType className={styles.base} {...labelProps}>
      {children}
      {(necessityIndicator === 'text' || (necessityIndicator === 'icon' && isRequired)) && ' \u200b'}
      {necessityIndicator === 'text' && (
        <span aria-hidden={!includeNecessityIndicatorInAccessibilityName ? isRequired : undefined}>
          {necessityLabel}
        </span>
      )}
      {necessityIndicator === 'icon' && isRequired && icon}
    </ElementType>
  );
}

export { Label };
