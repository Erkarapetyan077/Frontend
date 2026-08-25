import type { Product } from "../helpers/types";

type Props = {
    products: Product[]
    onMove: (p:Product) => void
}

export const ProductList: React.FC<Props> = ({ products,onMove }) => {

    return (
        <div className="product-page">

            <div className="product-header">
                <h2 className="product-title">Luxury Collection</h2>

                <p className="product-subtitle">
                    Discover your signature fragrance
                </p>

                <div className="title-line"></div>
            </div>

            <div className="products-grid">
                {
                    products.map(product =>
                        <div
                            key={product.id}
                            className="product-card"
                        >

                            <div className="product-image-wrapper">
                                <img
                                    src={product.picture}
                                    className="img product-image"
                                />
                            </div>

                            <div className="product-info">

                                <h2 className="product-name">
                                    {product.name}
                                </h2>

                                <p className="product-price">
                                    {product.price}EUR
                                </p>

                                <button onClick={() => onMove(product)} className="add-cart-btn">
                                    Add to cart
                                </button>

                            </div>

                        </div>
                    )
                }
            </div>

        </div>
    )
}