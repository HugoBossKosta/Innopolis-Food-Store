import React, { Component } from 'react'
import Header from './Header'
<Header />
export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt="img" onClick={() => this.props.ShowItem(this.props.item)} />
        <h2>{this.props.item.name}</h2>
        <p>{this.props.item.description}</p>
        <div className='rate'>{this.props.item.price}₽</div>
        <div className='heft'>{this.props.item.weight}</div>
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}


export default Item