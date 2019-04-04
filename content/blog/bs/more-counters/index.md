---
title: More Counters
date: "2019-04-03T10:03:03.284Z"
description: "You're all impressed by my counting ability."
---

I know, I know. You're all thinking, how is he going to top that button he made last time that keeps track of how many times it's been clicked? The answer is to add a subtract button. See what I did there?

It would be easy to keep the functionality all in one component but my app requires lots of adding and subtracting by one in different places. So I'm going to move all that logic up into a function that handles the state and returns the count and the addition and subtractions functions that set the state. Sweet, sweet reusability.

```javascript
import React, { useState } from "react"
import ReactDOM from "react-dom"

function useCounter() {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
  }

  function subtract() {
    setCount(count - 1)
  }

  return { count, add, subtract }
}

function Counter() {
  const { count, add, subtract } = useCounter()
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

All of this is super contrived and a version of the counter is basically used in the official react [docs](https://reactjs.org/docs/hooks-reference.html#functional-updates). But I think mine is better. I'm just going to keep stretching this counter example out as much as I can to see what I can do with it. Then I'm going to make a todo app.
