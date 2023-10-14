import { FieldProps } from '#/lib';
import { Label } from './label';
import { HelpText } from './help-text';
import styles from './field.module.css';
import clsx from 'clsx';

function Field(props: FieldProps) {
  const {
    children,
    className,
    contextualHelp,
    label,
    labelElementType,
    labelProps,
    necessityIndicator = 'icon',
    description,
    descriptionProps,
    errorMessage,
    errorMessageProps,
    validationState,
    includeNecessityIndicatorInAccessibilityName,
    isDisabled,
    isReadOnly,
    isRequired,
    style,
  } = props;
  const hasHelpText = !!description || (errorMessage && validationState === 'invalid');

  return (
    <div className={clsx(styles.base, className)} style={style}>
      {!!label && (
        <Label
          labelElementType={labelElementType}
          labelProps={labelProps}
          necessityIndicator={necessityIndicator}
          validationState={validationState}
          includeNecessityIndicatorInAccessibilityName={includeNecessityIndicatorInAccessibilityName}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        >
          {label}
        </Label>
      )}

      {children}

      {hasHelpText && (
        <HelpText
          description={description}
          descriptionProps={descriptionProps}
          errorMessage={errorMessage}
          errorMessageProps={errorMessageProps}
          validationState={validationState}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          isRequired={isRequired}
        />
      )}
    </div>
  );
}

export { Field };
