import React, { useState } from 'react'
import { BsBasket2Fill } from "react-icons/bs";
import Order from './Order';

const showMyOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return(
    <div>
        {props.orders.map(el => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className='summa'>ЗАКАЗ НА СУММУ: {new Intl.NumberFormat().format(summa)} ₽</p>
        
    </div>
    
  )
}

const showNothing = () => {
  return(
    <div className='empty'>
      <h2>Ваша корзина пуста</h2>
    </div>
  )
}

export default function Header(props) {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  let [cartOpen, setCartOpen] = useState(false)

  return (
       <header>
        <div>
            <p className='summa-head'>Сумма: {new Intl.NumberFormat().format(summa)} ₽</p>
            <span className='logo'>НАША ПРОДУКЦИЯ</span>
            <ul className='nav'>
                <li>Выйти</li>
            </ul>
            <BsBasket2Fill onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active, active'}`}/>
            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                showMyOrders(props) : showNothing()}
              </div>
        )}
        </div>
        <div className='presentation'></div>
    </header>
  )

  
}
