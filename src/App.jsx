import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react';
import Swal from 'sweetalert2';

function App() {


  const [cart,setCart] = useState([]);

  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingTotal, setRemainingTotal]= useState(20)



  const handleAddToCart = (course, credit, id) =>{
    const isExist = cart.find(singleCart => singleCart.id === id)
    if(isExist){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Already in Cart!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      
    }
    const currentTotalCredit = totalCredit + credit;
    const currentRemainingTotal = 20 -currentTotalCredit;
    if(currentTotalCredit > 20 && currentRemainingTotal < 0){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Credit limit will exceed!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      
    }
    else{
      const newCart=[...cart,course];
    setCart(newCart);
    setTotalCredit(currentTotalCredit)
    setRemainingTotal(currentRemainingTotal)
    }
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
      <Courses handleAddToCart={handleAddToCart} handleTotalCredit={handleTotalCredit}></Courses>
      <Cart cart={cart} totalCredit={totalCredit} remainingTotal={remainingTotal} ></Cart>
      </div>

    </>
  )
}

export default App;
