import PropTypes from 'prop-types';
import Singelcart from '../Singlecart/Singelcart';
const Cart = ({cart, totalCredit, remainingTotal}) => {
    // console.log(cart)
    return (
        <div className="md:w-1/3 bg-base-100 shadow-2xl rounded-2xl mb-64 mr-8 ml-6 p-4">
            <div className='border-b-2 pb-2'>
            <div className='border-b-2 pb-2'>
                <h3 className='text-xl font-semibold text-blue-700'>Credit Hours Remaining: {remainingTotal} hrs</h3>
            </div>
        <h3 className='text-2xl font-bold mb-4'>Course Name</h3>

{
    cart.map((singelcart, idx) => <Singelcart idx={idx}  key={singelcart.id} singelcart={singelcart}></Singelcart>)
}

            </div>
            <div>
            <h3 className='text-xl font-semibold mt-2'>Total Credit Hours: {totalCredit} hrs</h3>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart : PropTypes.array, 
    totalCredit: PropTypes.number,
    remainingTotal: PropTypes.number
    
}

// export default Cart;
export default Cart;