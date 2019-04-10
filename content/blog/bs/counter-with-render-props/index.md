---
title: Counter With Render Props
date: "2019-04-09T09:01:03.284Z"
description: "Do we even need render props anymore?"
---

In the [last post](/bs/even-more-counters) I joked about re-implementing this code again with render props. I guess I couldn't let it go and kept thinking about how I would go about it. I decided to try rewriting `useCounter` with render props.

Here is the original implementation.

```javascript
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
```

And here it is with render props.

```javascript
class CounterProps extends Component {
  state = {
    count: this.props.initialCount || 0,
  }

  add = () => {
    this.setState(prevState => ({
      count: prevState.count + this.props.increment,
    }))
  }

  subtract = () => {
    this.setState(prevState => ({
      count: prevState.count - this.props.increment,
    }))
  }

  render() {
    return this.props.children({
      count: this.state.count,
      add: this.add,
      subtract: this.subtract,
    })
  }
}
```

Hooks are so much cleaner and easier to follow. I can't think of a place where I used render props that couldn't be done better using hooks. It got me wondering, do we even need hooks anymore?
