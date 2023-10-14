import { CalendarHeaderProps, IconButton } from '#/lib';
import { ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { useDateFormatter, VisuallyHidden } from 'react-aria';
import styles from './calendar-header.module.css';

function CalendarHeader(props: CalendarHeaderProps) {
  const { calendarProps, prevButtonProps, nextButtonProps, state } = props;
  const monthDateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    timeZone: state.timeZone,
  });

  return (
    <div className={styles.base}>
      <VisuallyHidden>
        <h2>{calendarProps['aria-label']}</h2>
      </VisuallyHidden>
      <IconButton {...prevButtonProps} color="black-white" variant="ghost">
        <ChevronLeft />
      </IconButton>
      <h2 aria-hidden className={styles.title}>
        {monthDateFormatter.format(state.visibleRange.start.toDate(state.timeZone))}
      </h2>
      <IconButton {...nextButtonProps} color="black-white" variant="ghost">
        <ChevronRight />
      </IconButton>
    </div>
  );
}

export { CalendarHeader };
