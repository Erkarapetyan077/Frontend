import { useState } from "react"
import type { Counter as type } from "./helper/counter";
import { Counter } from "./counter.tsx"
import { CounterList } from "./CounterList.tsx";
import "./App.css";

export default function App() {

  const [counter, setCounter] = useState<type[]>([])

  const createCounter = () => {
    let count = counter.length + 1;

    setCounter([
      ...counter,
      {
        CounterId: count,
        StartTime: Date.now(),
        Completed: false,
        EndTime: null
      }
    ])
  }

  const deleteElement = (id: number) => {
    const deleted = counter.filter((iditem) => id !== iditem.CounterId);
    setCounter(deleted);
  }

  const completeCounter = (id: number) => {
    setCounter(prev =>
      prev.map(item => {
        if (item.CounterId === id) {
          return {
            ...item,
            Completed: true,
            EndTime: Date.now()
          }
        }

        return item;
      })
    )
  }
  
  return (
    <div className="app">

      <div className="container">

        <h1 className="title">
          Counter App
        </h1>

        <button
          className="create-button"
          onClick={createCounter}
        >
          + Create Counter
        </button>

        <div className="counter-container">

          {
            counter.map((Count) =>
              <Counter
                key={Count.CounterId}
                counter={Count}
                deleteElement={deleteElement}
                completeCounter={completeCounter}
              />
            )
          }

        </div>

        <CounterList counter={counter} />

      </div>

    </div>
  )
}