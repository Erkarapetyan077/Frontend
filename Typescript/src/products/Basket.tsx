import type { BasketItem } from "../helpers/types"

type Props = {
    items: BasketItem[],
    deleteElement: (p: number) => void;
    down:(p:number) => void;
    up:(p:number) => void;
}

export const Basket: React.FC<Props> = ({ items, deleteElement,down,up }) => {

    return (
        <div className="basket-panel">

            <div className="basket-header">
                <h2 className="basket-title">Basket</h2>
            </div>

            <table className="basket-table">
                <thead className="basket-head">
                    <tr className="basket-row">
                        <th className="basket-th">product</th>
                        <th className="basket-th">price</th>
                        <th className="basket-th">quantity</th>
                        <th className="basket-th">subtotal</th>
                        <th className="basket-th">actions</th>
                    </tr>
                </thead>

                <tbody className="basket-body">
                    {
                        items.map(item =>
                            <tr key={item.id} className="basket-item">

                                <td className="basket-product">
                                    {item.name}
                                </td>

                                <td className="basket-price">
                                    {item.price} EUR
                                </td>

                                <td className="basket-quantity">
                                    {item.quantity}
                                </td>

                                <td className="basket-subtotal">
                                    {item.price * item.quantity}EUR
                                </td>

                                <td className="basket-actions">
                                    <button onClick={() => deleteElement(item.id)} className="basket-remove">X</button>
                                    <button onClick={() => down(item.id)} className="basket-minus">-</button>
                                    <button onClick={() => up(item.id)} className="basket-plus">+</button>
                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}