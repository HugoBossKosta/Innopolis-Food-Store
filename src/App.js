import React from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          name:"Устрицы по рокфеллеровски",
          description:"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
          price:"2700",
          weight:"/ 500 г",
          img:"1.png"
        },
        {
          id: 2,
          name:"Свиные ребрышки на гриле с зеленью",
          description:"Не следует, однако забывать, что реализация намеченных плановых",
          price:"1600",
          weight:"/ 750 г",
          img:"2.png"
        },
        {
          id: 3,
          name:"Креветки по-королевски в лимонном соке",
          description:"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
          price:"1820",
          weight:"/ 7 шт",
          img:"3.png"
        },
        {
          id: 4,
          name:"Стейк свинины",
          description:"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
          price:"2300",
          weight:"/ 1600 г",
          img:"4.png"
        },
        {
          id: 5,
          name:"Стейк говяжий со соусом",
          description:"Не следует, однако забывать, что реализация намеченных плановых",
          price:"1100",
          weight:"/ 900 г",
          img:"1.png"
        },
        {
          id: 6,
          name:"Салат Цезарь",
          description:"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
          price:"450",
          weight:"/ 1 шт",
          img:"2.png"
        },
        {
          id: 7,
          name:"Устрицы по рокфеллеровски",
          description:"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
          price:"2700",
          weight:"/ 500 г",
          img:"3.png"
        },
        {
          id: 8,
          name:"Свиные ребрышки на гриле с зеленью",
          description:"Не следует, однако забывать, что реализация намеченных плановых",
          price:"1600",
          weight:"/ 750 г",
          img:"4.png"
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    
    this.addToMyOrder = this.addToMyOrder.bind(this)
    this.deleteMyOrder = this.deleteMyOrder.bind(this)
    this.ShowItem = this.ShowItem.bind(this)
  }
  
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteMyOrder} />
        <Items ShowItem={this.ShowItem} items={this.state.items} onAdd={this.addToMyOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToMyOrder} ShowItem={this.ShowItem} item={this.state.fullItem} />}
      </div>
      
    )
  }
  
  ShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  deleteMyOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToMyOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
      if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}



export default App;
