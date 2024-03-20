import classnames from '@/utils/classnames';
import { motion } from 'framer-motion';
import {
  ComponentPropsWithRef,
  ForwardedRef,
  createElement,
  forwardRef,
} from 'react';
import styles from './styles.module.css';

type Tags = 'p';
type Elements = HTMLParagraphElement;

type BaseProps = ComponentPropsWithRef<Tags>;

interface TextProps extends BaseProps {}

function TextComponent(
  { className = '', ...props }: TextProps,
  ref: ForwardedRef<Elements>
) {
  return createElement('p', {
    ref,
    className: classnames(styles.text, className),
    ...props,
  });
}

export const Text = motion(forwardRef(TextComponent), {
  forwardMotionProps: true,
});
