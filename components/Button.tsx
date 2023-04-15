import { ButtonHTMLAttributes, PropsWithChildren, Ref, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { DEFAULT_STYLE, STYLES } from './Button.style'

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonStyle?: keyof typeof STYLES
    className?: string
  }
>

const Button = forwardRef(function Button(
  { children, buttonStyle = 'primary', className = '', ...props }: Props,
  forwardedRef: Ref<HTMLButtonElement>
) {
  const styles = twMerge(DEFAULT_STYLE, STYLES[buttonStyle], className)

  return (
    <button className={styles} ref={forwardedRef} {...props}>
      {children}
    </button>
  )
})

export default Button
