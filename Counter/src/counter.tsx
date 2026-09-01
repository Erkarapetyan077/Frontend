import type React from "react"
import type { Counter as CounterType } from "./helper/counter"
import { useEffect, useState } from "react"
import "./App.css";

type Props = {
    counter: CounterType
    deleteElement: (id: number) => void
    completeCounter: (id: number) => void;
}

export const Counter: React.FC<Props> = ({
    counter,
    deleteElement,
    completeCounter
}) => {
    const [isRunning, setIsRunning] = useState(true);
    const [remainingTime, setRemainingTime] = useState(6);

    useEffect(() => {
        if (!isRunning) {
            return
        }

        const interval = setInterval(() => {
            setRemainingTime((remainingTime) => {
                if (remainingTime > 0) {
                    if (remainingTime === 1) {
                        completeCounter(counter.CounterId)
                        setIsRunning(false)
                        return 0
                    }

                    return remainingTime - 1
                }

                clearInterval(interval)
                return 0
            })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [isRunning])

    const toggle = () => {
        setIsRunning(!isRunning);
    }

    const stop = () => {
        setRemainingTime(600);
        setIsRunning(true)
    }

    let time = Math.floor(remainingTime / 60)
    let seconds = remainingTime % 60

    return (
        <div className="counter-card">

            <div className="counter-id">
                Counter #{counter.CounterId}
            </div>

            <h1 className="counter-time">
                {String(time).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
            </h1>

            <div className="counter-buttons">

                <button
                    className="pause-button"
                    onClick={toggle}
                >
                    {isRunning ? "Pause" : "Play"}
                </button>

                <button
                    className="stop-button"
                    onClick={stop}
                >
                    Stop
                </button>

                <button
                    className="delete-button"
                    onClick={() => deleteElement(counter.CounterId)}
                >
                    Delete
                </button>

            </div>

        </div>
    )
}