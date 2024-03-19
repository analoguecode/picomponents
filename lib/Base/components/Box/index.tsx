import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.css';

interface BoxProps extends ComponentPropsWithRef<'div'> {
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
}

function BoxComponent(
  { direction = 'row', justify = 'start', align = 'start', ...props }: BoxProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={`${styles.box} ${styles[`direction-${direction}`]} ${styles[`justify-${justify}`]} ${styles[`align-${align}`]}`}
      {...props}
    ></div>
  );
}

export const Box = forwardRef(BoxComponent);
