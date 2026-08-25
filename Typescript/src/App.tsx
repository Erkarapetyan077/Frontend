import { useState } from 'react'
import './App.css'
import { Basket } from "./products/Basket"
import { ProductList } from "./products/ProductList"
import type { BasketItem, Product } from './helpers/types'


export default function App() {




  const [products] = useState<Product[]>([
    { id: 101, name: "Louis Vuitton Imagination", price: 450, picture: "https://lifestyleperfume.am/images/product/5402/1740486098.webp" },
    { id: 102, name: "Dior Sauvage Elixir", price: 155, picture: "https://lifestyleperfume.am/images/product/6169/1650893417-5479417.webp" },
    { id: 103, name: "Bleu de Chanel Parfum", price: 150, picture: "https://www.cosmostore.ru/cache/front/shop/products/615/1899713/350x350.jpg" },
    { id: 104, name: "Yves Saint Laurent Y Le Parfum", price: 140, picture: "https://lifestyleperfume.am/images/product/3291/1781970164.webp" },
    { id: 105, name: "Jean Paul Gaultier Le Male Elixir", price: 120, picture: "https://lifestyleperfume.am/images/product/4862/1728901409-3720446.webp" },
    { id: 106, name: "Tom Ford Oud Wood", price: 250, picture: "https://www.sephora.com/productimages/sku/s1565902-main-zoom.jpg?imwidth=315" },
    { id: 107, name: "Armani Acqua di Giò Profumo", price: 135, picture: "https://hermitage.am/storage/4791/1606674170" },
    { id: 108, name: "Creed Aventus", price: 435, picture: "https://lifestyleperfume.am/images/product/817/1646378077-9937170.webp" },
    { id: 109, name: "Louis Vuitton LImmensité", price: 460, picture: "https://narffum.am/_next/image?url=https%3A%2F%2Fddlnhqzqkolahqjfjoat.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fparfume%2520images%2F3655cfed-e496-484b-8f63-26a613728766%2Fprimary-1752171298608.webp&w=3840&q=70" },
    { id: 110, name: "Spell On You Louis Vuitton", price: 300, picture: "https://aromacode.ru/wa-data/public/shop/products/13/09/20913/images/67046/67046.970x0.jpg" },
    { id: 111, name: "Clive Christian No. 1", price: 850, picture: "https://shop.seindesignature.com/cdn/shop/files/no-1-masculine-50ml-3423457.png?v=1783971310&width=1946" },
    { id: 112, name: "Amouage Gold", price: 500, picture: "https://lifestyleperfume.am/images/product/375/1783265081.jpg" },
    { id: 113, name: "Roja Parfums Haute Luxe", price: 1450, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTcZg4utEE1uNcrB09Xw38-2yfj6q0AT5pi-RIGksL-1XmgSuOVH2H00&s=10" },
    { id: 115, name: "Initio Oud for Greatness", price: 350, picture: "https://paguchi.am/wp-content/uploads/2023/04/greatness.jpg" },
    { id: 116, name: "Xerjoff Naxos", price: 320, picture: "https://hermitage.am/storage/2916/2hTqLtjYd6kTQMP53UtunaHxXfZN24jIvtZAxWvR.jpeg" },
    { id: 117, name: "Parfums de Marly Layton", price: 310, picture: "https://hermitage.am/storage/13245/1729755227.png" },
    { id: 118, name: "Byredo Bal d'Afrique", price: 280, picture: "https://lifestyleperfume.am/images/product/536/1784283776.webp" },
    { id: 119, name: "Louis Vuitton Ink Mark", price: 300, picture: "https://lifestyleperfume.am/images/product/5851/1761830897.webp" },
    { id: 120, name: "Tom Ford Fucking Fabulous", price: 350, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnulCodOsTzDsYb5S0VzMVl9J6DlsTcDR8LJPUClPedQNxu2a6G-NkSw&s=10" },
    { id: 121, name: "Louis Vuitton Rain Tea", price: 330, picture: "https://fimgs.net/mdimg/perfume/o.115406.jpg" }
  ])

  const [basket, setBasket] = useState<BasketItem[]>([


  ])


  const deleteToCart = (id: number) => {

    setBasket(basket.filter(basket => id !== basket.id));
  }


  const moveToCart = (product: Product): void => {



    const exist = basket.find(item => item.id === product.id)


    if (!exist) {
     return setBasket([...basket, { ...product, quantity: 1 }])
    }

    exist.quantity++;
    setBasket([...basket])


  }

  const quantityDown = (id: number) => {


    setBasket(basket.map(basket => {
      if (basket.id === id) {
        if (basket.quantity > 1) {
          return {
            ...basket,
            quantity: basket.quantity - 1
          }
        }
      }
      return basket;
    }))
  }

  const quantityUp = (id: number) => {
    setBasket(basket.map(basket => {
      if (basket.id === id) {
        return {
          ...basket,
          quantity: basket.quantity + 1
        }
      }
      return basket;
    }))
  }



  return (<>
    <div>
      <div>
        <ProductList
          products={products}
          onMove={moveToCart}


        />
        <Basket
          items={basket}
          deleteElement={deleteToCart}
          down={quantityDown}
          up={quantityUp}
        />
      </div>
    </div>
  </>
  )

}

