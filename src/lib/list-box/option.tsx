import { forwardRef } from 'react';
import { OptionProps, useFallbackRef } from '#/lib';
import { mergeProps, useHover, useOption } from 'react-aria';
import styles from './option.module.css';
import clsx from 'clsx';
import { Check } from 'tabler-icons-react';

function Option(props: OptionProps, ref: any) {
  const { item, state } = props;
  const optionRef = useFallbackRef(ref);
  const { optionProps, isSelected, isDisabled, isFocusVisible, labelProps, descriptionProps } = useOption(
    { key: item.key, 'aria-label': item['aria-label'] },
    state,
    optionRef
  );
  const { hoverProps, isHovered } = useHover({ isDisabled });

  return (
    <li
      ref={optionRef}
      {...mergeProps(optionProps, hoverProps)}
      className={clsx(styles.base, {
        [styles['is-selected']]: isSelected,
        [styles['is-disabled']]: isDisabled,
        [styles['is-focus-visible']]: isFocusVisible,
        [styles['is-hovered']]: isHovered,
      })}
    >
      <span {...labelProps} className={styles.label}>
        {item.rendered}
      </span>
      {isSelected && <Check className={styles.icon} />}
    </li>
  );
}

const _Option = forwardRef(Option);
export { _Option as Option };
