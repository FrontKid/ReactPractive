import React, { useEffect, useState } from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  const [count, setCount] = useState(0)
  const click = () => {
    setCount(count + 1)
    if (count === 30) {

      setCount(count - count)
    }
  }
  useEffect(() => {
    document.title = `Вы нажали ${count} раз`
  })
  return (
    <button className={classes.btn}
      onClick={click}>{props.btn}{count}</button>
  )
}

Button.defaultProps = {
  btn: "Button"
}

export default Button