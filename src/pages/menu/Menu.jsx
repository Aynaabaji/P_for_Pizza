import React from 'react'
import PIC1 from '../../assets/menu1.jpg'
import PIC2 from '../../assets/menu2.jpg'
import PIC3 from '../../assets/menu3.jpg'
import PIC4 from '../../assets/menu4.jpg'
import PIC5 from '../../assets/menu5.jpg'
import PIC6 from '../../assets/menu6.jpg'
import './menu.css'

const menu=[
  {
    pic:PIC1,
    menuName:'Pepperoni Pizza',
    price: '$ 15.99'
  },
  {
    pic:PIC2,
    menuName:'Margherita Pizza',
    price: '$ 11.99'
  },
  {
    pic:PIC3,
    menuName:'PedroTech Special Pizza',
    price:'$ 256.53'
  },
  {
    pic:PIC4,
    menuName:'Vegan Pizza',
    price:'$ 17.99'
  },
  {
    pic:PIC5,
    menuName:'Pineapple Pizza',
    price:'$ 40.00'
  },
  {
    pic:PIC6,
    menuName:'Very Expensive Pizza',
    price:'$ 1007.00'
  }
]

const Menu = () => {
  return (
    <section>
      <div className="menu__header">
        <h2>Our Menu</h2>
      </div>

      <div className="container menu__container">

        <div className="menu__cards">
          {
            menu.map(({pic,menuName,price,id})=>{
              return(
                <div key={id} className="menu__card">
                  <img src={pic} alt="pic" />
                  <h1>{menuName}</h1>
                  <small>{price}</small>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Menu