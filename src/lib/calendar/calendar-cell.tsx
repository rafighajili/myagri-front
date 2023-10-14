import { useRef } from 'react';
import { CalendarCellProps } from '#/lib';
import { mergeProps, useCalendarCell, useFocusRing, useHover, useLocale } from 'react-aria';
import styles from './calendar-cell.module.css';
import clsx from 'clsx';
import { getDayOfWeek, isSameDay, isToday } from '@internationalized/date';

function CalendarCell(props: CalendarCellProps) {
  const { state, date, currentMonth } = props;
  const ref = useRef(null);
  const {
    cellProps,
    buttonProps,
    isPressed,
    isSelected,
    isDisabled,
    isFocused,
    isInvalid,
    isUnavailable,
    isOutsideVisibleRange,
    formattedDate,
  } = useCalendarCell(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  const { hoverProps, isHovered } = useHover({
    isDisabled: isDisabled || isUnavailable || state.isReadOnly,
  });

  const isLastSelectedBeforeDisabled =
    !isDisabled && !isInvalid && state.isCellUnavailable(props.date.add({ days: 1 }));
  const isFirstSelectedAfterDisabled =
    !isDisabled && !isInvalid && state.isCellUnavailable(props.date.subtract({ days: 1 }));
  const highlightedRange = 'highlightedRange' in state && state.highlightedRange;
  const isSelectionStart = isSelected && highlightedRange && isSameDay(props.date, highlightedRange.start);
  const isSelectionEnd = isSelected && highlightedRange && isSameDay(props.date, highlightedRange.end);
  const { locale } = useLocale();
  const dayOfWeek = getDayOfWeek(props.date, locale);
  const isRangeStart = isSelected && (isFirstSelectedAfterDisabled || dayOfWeek === 0 || props.date.day === 1);
  const isRangeEnd =
    isSelected &&
    (isLastSelectedBeforeDisabled ||
      dayOfWeek === 6 ||
      props.date.day === currentMonth.calendar.getDaysInMonth(currentMonth));

  return (
    <td {...cellProps}>
      <div
        className={clsx({
          [styles['is-range-start']]: isRangeStart,
          [styles['is-range-end']]: isRangeEnd,
          [styles['is-selection-start']]: isSelectionStart,
          [styles['is-selection-end']]: isSelectionEnd,
          [styles['is-range-selection']]: isSelected && !(isSelectionStart || isSelectionEnd),
        })}
      >
        <span
          ref={ref}
          {...mergeProps(buttonProps, focusProps, hoverProps)}
          className={clsx(styles.base, {
            [styles['is-today']]: isToday(date, state.timeZone),
            [styles['is-selected']]: isSelected,
            [styles['is-disabled']]: isDisabled,
            [styles['is-invalid']]: isInvalid,
            [styles['is-unavailable']]: isUnavailable,
            [styles['is-outside-visible-range']]: isOutsideVisibleRange,
            [styles['is-focused']]: isFocused,
            [styles['is-focus-visible']]: isFocusVisible,
            [styles['is-hovered']]: isHovered,
            [styles['is-pressed']]: isPressed,
          })}
        >
          {formattedDate}
        </span>
      </div>
    </td>
  );
}

export { CalendarCell };
