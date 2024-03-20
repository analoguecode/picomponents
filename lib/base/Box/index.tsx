import classnames from '@/utils/classnames';
import { motion } from 'framer-motion';
import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';
import styles from './styles.module.css';

type Tags = 'div';
type Elements = HTMLDivElement;

type BaseProps = ComponentPropsWithRef<Tags>;

interface BoxProps extends BaseProps {
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  wrap?: 'wrap' | 'nowrap';
  width?: 'default' | 'full';
}

function BoxComponent(
  {
    direction = 'column',
    justify = 'start',
    align = 'start',
    wrap = 'wrap',
    width = 'default',
    className = '',
    ...props
  }: BoxProps,
  ref: ForwardedRef<Elements>
) {
  return (
    <div
      ref={ref}
      className={classnames(
        styles.box,
        styles[direction],
        styles[`justify-${justify}`],
        styles[`align-${align}`],
        styles[wrap],
        styles[`width-${width}`],
        className
      )}
      {...props}
    ></div>
  );
}

export const Box = motion(forwardRef(BoxComponent), {
  forwardMotionProps: true,
});
