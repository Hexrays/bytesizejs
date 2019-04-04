---
title: Even More Counters
date: "2019-04-04T06:41:03.284Z"
description: "We're all learning so much."
---

I was looking at the docs I posted a link to in the last post and was like, "damn, that is a great idea to initialize different counters with different state. I should do that too. Then I'll one up the official docs by allowing the user to set their own increments. Take that facebook.

Here's what I came up with for having a top level incrementor that could be shared with all the counters. I decided to make it a compound component because I think they're fun and I don't use them enough?

```javascript
import React, { useState, Children, cloneElement } from "react"
import ReactDOM from "react-dom"

function useCounter(initialState = 0, increment = 1) {
  const [count, setCount] = useState(initialState)

  function add() {
    setCount(count + increment)
  }

  function subtract() {
    setCount(count - increment)
  }

  return { count, add, subtract }
}

function Counter({ initialCount, increment }) {
  const { count, add, subtract } = useCounter(initialCount, increment)
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </>
  )
}

function Incrementor({ initialInc, children }) {
  const [increment, setIncrement] = useState(initialInc)
  return (
    <>
      <label>
        Increment:{" "}
        <input
          type="test"
          onChange={e => {
            setIncrement(parseInt(e.target.value, 10))
          }}
          value={increment}
        />
      </label>
      {Children.map(children, child => cloneElement(child, { increment }))}
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Incrementor initialInc={5}>
        <Counter initialCount={1} />
        <Counter initialCount={12} />
      </Incrementor>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

See it in action [here](https://codesandbox.io/s/n5167r6kvm?fontsize=14). Should I try again but change the `Incrementor` to use render props? Or should I just start on my todo app?
