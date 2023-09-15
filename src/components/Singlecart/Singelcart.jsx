import PropTypes from 'prop-types';
const Singelcart = ({singelcart}) => {

    const {title} = singelcart;


    return (
        <div className='bg-gray-200 m-4 p-4'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Singelcart.propTypes = {
    singelcart : PropTypes.object
    
}

export default Singelcart;