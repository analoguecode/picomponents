import classnames from '@/utils/classnames';
import {
  ComponentPropsWithRef,
  ForwardedRef,
  createElement,
  forwardRef,
} from 'react';
import styles from './styles.module.css';
import { MotionProps, motion } from 'framer-motion';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type BaseProps = ComponentPropsWithRef<Tags> & MotionProps;

interface HeadingProps extends BaseProps {
  as?: Tags;
}

function HeadingComponent(
  { as = 'h1', className, ...props }: HeadingProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return createElement(motion[as], {
    ref,
    className: classnames(styles.heading, className ?? ''),
    ...props,
  });
}

export const Heading = forwardRef(HeadingComponent);
