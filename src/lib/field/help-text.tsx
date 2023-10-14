import { HelpTextProps } from '#/lib';
import styles from './help-text.module.css';

function HelpText(props: HelpTextProps) {
  const {
    errorMessage,
    errorMessageProps,
    description,
    descriptionProps,
    isDisabled,
    isReadOnly,
    isRequired,
    validationState,
  } = props;
  const isErrorMessage = !!errorMessage && validationState === 'invalid';

  return isErrorMessage ? (
    <p {...errorMessageProps} className={styles.error}>
      {errorMessage}
    </p>
  ) : (
    <p {...descriptionProps} className={styles.description}>
      {description}
    </p>
  );
}

export { HelpText };
