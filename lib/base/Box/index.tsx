import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';
import { MotionProps, motion } from 'framer-motion';
import styles from './styles.module.css';
import classnames from '@/utils/classnames';

type BaseProps = ComponentPropsWithRef<'div'> & MotionProps;

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
    className,
    ...props
  }: BoxProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <motion.div
      ref={ref}
      className={classnames(
        styles.box,
        styles[direction],
        styles[`justify-${justify}`],
        styles[`align-${align}`],
        styles[wrap],
        styles[`width-${width}`],
        className ?? ''
      )}
      {...props}
    ></motion.div>
  );
}

export const Box = forwardRef(BoxComponent);
