import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-full mb-10 ml-10 mx-auto'>
      <Courses></Courses>
      <Cart></Cart>
      </div>

    </>
  )
}

export default App
