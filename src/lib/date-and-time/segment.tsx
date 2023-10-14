import { useRef } from 'react';
import { SegmentProps } from '#/lib';
import { useDateSegment } from 'react-aria';
import styles from './segment.module.css';

function Segment(props: SegmentProps) {
  const { segment, state } = props;
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div ref={ref} {...segmentProps} className={styles.base}>
      {segment.text}
    </div>
  );
}

export { Segment };
