import type React from "react";
import type { Counter } from "./helper/counter";
import "./App.css";

type Props = {
    counter: Counter[];
};

export const CounterList: React.FC<Props> = ({ counter }) => {
    return (
        <div className="counter-list">

            <h2 className="list-title">Counter List</h2>

            <table className="counter-table">

                <thead>
                    <tr>
                        <th>CounterId</th>
                        <th>StartTime</th>
                        <th>EndTime</th>
                        <th>Completed</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        counter.map((item) => (
                            <tr key={item.CounterId}>

                                <td>
                                    {item.CounterId}
                                </td>

                                <td>
                                    {new Date(item.StartTime).toLocaleTimeString()}
                                </td>

                                <td>
                                    {item.EndTime
                                        ? new Date(item.EndTime).toLocaleTimeString()
                                        : "-"
                                    }
                                </td>

                                <td className={item.Completed ? "completed" : "not-completed"}>
                                    {item.Completed ? "true" : "false"}
                                </td>

                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </div>
    )
}