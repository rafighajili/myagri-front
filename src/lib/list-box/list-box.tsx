import { forwardRef } from 'react';
import { Field, ListBoxProps, useFallbackProps, useFallbackRef } from '#/lib';
import { useListBox } from 'react-aria';
import { useListState } from 'react-stately';
import { ListBoxSection } from './list-box-section';
import { Option } from './option';

function ListBox(props: ListBoxProps, ref: any) {
  const { state: stateFromProps } = props;
  const listBoxRef = useFallbackRef(ref);
  const fallbackProps = useFallbackProps(props, 'list-box');
  const stateFromHook = useListState(fallbackProps);
  const state = { ...stateFromHook, ...stateFromProps };
  const { listBoxProps, labelProps } = useListBox(fallbackProps, state, listBoxRef);

  return (
    <Field labelProps={labelProps} {...props}>
      <ul {...listBoxProps} ref={listBoxRef}>
        {
          // @ts-ignore
          [...state.collection].map((item) =>
            item.type === 'section' ? (
              <ListBoxSection key={item.key} section={item} state={state} />
            ) : (
              <Option key={item.key} item={item} state={state} />
            )
          )
        }
      </ul>
    </Field>
  );
}

const _ListBox = forwardRef(ListBox);
export { _ListBox as ListBox };
