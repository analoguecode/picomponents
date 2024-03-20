import classnames from '@/utils/classnames';
import { motion } from 'framer-motion';
import {
  ComponentPropsWithRef,
  ForwardedRef,
  createElement,
  forwardRef,
} from 'react';
import styles from './styles.module.css';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Elements = HTMLHeadingElement;

type BaseProps = ComponentPropsWithRef<Tags>;

interface HeadingProps extends BaseProps {
  as?: Tags;
}

function HeadingComponent(
  { as = 'h1', className = '', ...props }: HeadingProps,
  ref: ForwardedRef<Elements>
) {
  return createElement(as, {
    ref,
    className: classnames(styles.heading, className),
    ...props,
  });
}

export const Heading = motion(forwardRef(HeadingComponent), {
  forwardMotionProps: true,
});
