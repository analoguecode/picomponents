import classnames from '@/utils/classnames';
import { motion } from 'framer-motion';
import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from 'react-aria-components';
import styles from './styles.module.css';

type Tags = 'button';
type Elements = HTMLButtonElement;

type BaseProps = ComponentPropsWithRef<Tags> & AriaButtonProps;

interface ButtonProps extends BaseProps {}

function ButtonComponent(
  { className = '', ...props }: ButtonProps,
  ref: ForwardedRef<Elements>
) {
  return (
    <AriaButton
      ref={ref}
      className={classnames(styles.button, className)}
      {...props}
    ></AriaButton>
  );
}

export const Button = motion(forwardRef(ButtonComponent), {
  forwardMotionProps: true,
});
