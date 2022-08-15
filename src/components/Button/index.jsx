import React from 'react'
import styles from './Button.module.css';

const Button = (props) => {
  const { title, className, ...otherProps } = props;
  const { btn } = styles;
  return (
    <div className={className}>
      <button {...otherProps} className={btn} >{title}</button>
    </div>
  )
}

export default Button
