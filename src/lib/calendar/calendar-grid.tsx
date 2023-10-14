import { CalendarGridProps } from '#/lib';
import { useCalendarGrid, useLocale } from 'react-aria';
import { endOfMonth, getWeeksInMonth } from '@internationalized/date';
import { CalendarCell } from './calendar-cell';
import styles from './calendar-grid.module.css';

function CalendarGrid(props: CalendarGridProps) {
  const { state } = props;
  const startDate = state.visibleRange.start;
  const endDate = endOfMonth(startDate);
  const { gridProps, headerProps, weekDays } = useCalendarGrid({ ...props, startDate, endDate }, state);
  const { locale } = useLocale();
  const weeksInMonth = getWeeksInMonth(startDate, locale);

  return (
    <table {...gridProps} cellPadding={0} className={styles.base}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>
              <span className={styles['week-day']}>{day}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          // @ts-ignore
          [...new Array(weeksInMonth).keys()].map((weekIndex) => (
            <tr key={weekIndex}>
              {state
                .getDatesInWeek(weekIndex, startDate)
                .map((date, i) =>
                  date ? <CalendarCell key={i} state={state} date={date} currentMonth={startDate} /> : <td key={i} />
                )}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export { CalendarGrid };
