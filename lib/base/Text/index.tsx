import {
  ComponentPropsWithRef,
  ForwardedRef,
  createElement,
  forwardRef,
} from 'react';
import styles from './styles.module.css';
import classnames from '@/utils/classnames';
import { MotionProps, motion } from 'framer-motion';

type TextProps = ComponentPropsWithRef<'p'> & MotionProps;

function TextComponent(
  { className, ...props }: TextProps,
  ref: ForwardedRef<HTMLParagraphElement>
) {
  return createElement(motion.p, {
    ref,
    className: classnames(styles.text, className ?? ''),
    ...props,
  });
}

export const Text = forwardRef(TextComponent);
