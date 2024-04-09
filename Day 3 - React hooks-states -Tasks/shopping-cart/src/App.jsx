
import './App.css'
import Navbar from './assets/components/navbar'
import Header from './assets/components/header'
import CardSection from './assets/components/card'
import Footer from './assets/components/footer'
import { useState } from 'react'

function App() {
  const[products] =useState([
    {
      id: 1,
      imgUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Product 1',
      oldPrice: '$10.00',
      price: '$8.00' 
    },
    {
      id: 2,
      imgUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Product 2',
      oldPrice: '$20.00',
      price: '$15.00' 
    },
    {
      id: 3,
      imgUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Product 3',
      oldPrice: '$30.00',
      price: '$25.00' 
    },
    {
      id: 4,
      imgUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Product 4',
      oldPrice: '$40.00',
      price: '$35.00' 
    },
    {
      id: 5,
      imgUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Product 5',
      oldPrice: '$50.00',
      price: '$45.00'
    }, 
    {
      id: 6,
      imgUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Product 6',
      oldPrice: '$60.00',
      price: '$55.00' 
    },
    {
      id: 7,
      imgUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Product 7',
      oldPrice: '$70.00',
      price: '$65.00' 
    },
    {
      id: 8,
      imgUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
      name: 'Product 8',
      oldPrice: '$80.00',
      price: '$75.00' 
    }
  ]);
  
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />
      <Header/>
      <CardSection products={products}  cart={cart} setCart={setCart}/>
      <Footer/>
    </>
  )
}

export default App
