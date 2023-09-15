import PropTypes from 'prop-types';
import Singelcart from '../Singlecart/Singelcart';
const Cart = ({cart}) => {
    return (
        <div className="md:w-1/3 bg-base-100 shadow-2xl rounded-2xl mb-64 mr-8 ml-6">
            <h2 className='text-3xl ml-6 mt-8'>Course Name :{cart.length}</h2>

            {
                cart.map(singelcart => <Singelcart key={singelcart.id} singelcart={singelcart} ></Singelcart>)
            }

        </div>
    );
};

Cart.propTypes = {
    cart : PropTypes.array
    
}

export default Cart;