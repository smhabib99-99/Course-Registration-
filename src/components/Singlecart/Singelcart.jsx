import PropTypes from 'prop-types';
const Singelcart = ({singelcart, idx}) => {
    console.log(singelcart)

    const {title} = singelcart;

    return (
        <div>
            <h3 className='text-2xl'>{idx+1}. {title}</h3>
        </div>
    );
};

Singelcart.propTypes = {
    singelcart:PropTypes.object,
    idx: PropTypes.number
    
}

// export default Singelcart;
export default Singelcart;