import { ListBoxSectionProps, Separator } from '#/lib';
import { useListBoxSection } from 'react-aria';
import { Option } from './option';
import styles from './list-box-section.module.css';

function ListBoxSection(props: ListBoxSectionProps) {
  const { section, state } = props;
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <Separator size="small" className={styles.separator} elementType="li" />
      )}
      <li {...itemProps}>
        {section.rendered && (
          <span {...headingProps} className={styles.heading}>
            {section.rendered}
          </span>
        )}
        <ul
          {...groupProps}
          style={{
            padding: 0,
            listStyle: 'none',
          }}
        >
          {
            // @ts-ignore
            [...state.collection.getChildren(section.key)].map((node) => (
              <Option key={node.key} item={node} state={state} />
            ))
          }
        </ul>
      </li>
    </>
  );
}

export { ListBoxSection };
