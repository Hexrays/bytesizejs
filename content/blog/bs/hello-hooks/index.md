---
title: Hello Hooks
date: "2019-04-02T12:40:03.284Z"
description: "Imagine how much boilerplate code you would need to get this to work with redux."
---

This is about the most basic thing you can do with hooks. It's not all that interesting but what is exciting is how little code it takes to make this simple example work. --er, at least how little code I had to write to make this work.

```javascript
import React, { useState } from "react"
import ReactDOM from "react-dom"

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

Imagine how much boilerplate code you would need to get this to work with redux. Or even classes.

I made a little codesandbox for it but I think you can imagine how it works. I probably should have made a todo app.
