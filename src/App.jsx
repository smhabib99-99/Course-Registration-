import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react';

function App() {


  const [cart,setCart] = useState([]);

  const [totalCredit, setTotalCredit] = useState(0);


  const handleAddToCart = course =>{
    // console.log(course);
    const newCart=[...cart,course];
    setCart(newCart);
  }


  const handleTotalCredit = hour =>{

    const newTotalCredit = totalCredit + hour;
    setTotalCredit(newTotalCredit);
    // console.log("total credit :", hour);
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-full mb-10 ml-10 mx-auto'>
      <Courses handleAddToCart={handleAddToCart} handleTotalCredit={handleTotalCredit} totalCredit={totalCredit} ></Courses>
      <Cart cart={cart} ></Cart>
      </div>

    </>
  )
}

export default App;
