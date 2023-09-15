import { useState } from "react";

import classes from './counter.module.scss';

export const SomeComponent = () => {
  const [conter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev +1)

  return (
    <>
      <h3>{conter}</h3>
      <button className={classes.btn} onClick={increment}>Increment</button>
    </>
  )
}

