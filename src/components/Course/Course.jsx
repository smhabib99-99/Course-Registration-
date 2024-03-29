import PropTypes from 'prop-types';
const Course = ({course,handleAddToCart}) => {

    const { id, title, cover, description, price, credit } = course;
    // console.log(course);
    return (
        // <div className='mb-10'>
        //     <img className='w-full rounded-md mb-4' src={cover} alt={`Cover picture of the title ${title}`} />
        //     <h2 className='text-4xl'>{title}</h2>
        //     <h3 className='text-xl'>{description}</h3>
        //     <div className='flex justify-evenly'>
        //         <p className=''>Price : {price}</p>
        //         <p>Credit : {credit}<span>hr</span> </p>
        //     </div>
        //     <button className='bg-blue-500'>Select</button>
        // </div>

        <div className="card w-96 bg-base-100  m-4 rounded-lg shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={cover} alt={`Cover picture of the title ${title}`} className="rounded-xl mb-4" />
                <h2 className="card-title font-semibold mb-3 text-lg">{title}</h2>
                <p className='font-normal text-sm mb-4'>{description}</p>
            </figure>

            <div className='flex justify-between px-10'>
                <div className='flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 1V23" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='font-medium text-base mb-2'>  Price : {price}</p>
                </div>

                <div className='flex gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='font-medium text-base'>Credit : {credit}<span>hr</span> </p>
                </div>


            </div>

            <div onClick={()=>handleAddToCart(course, credit, id)}  className="card-body items-center m-4 rounded-xl bg-blue-500 text-center">
                {/* <button onClick={()=>handleAddToCart(course)}   onClick={()=>handleTotalCredit(credit)}  className="rounded-lg text-center mt-2 mb-2 font-semibold text-lg text-white ">Select</button> */}
                <button className="rounded-lg text-center mt-2 mb-2 font-semibold text-lg text-white ">
                    <div>
                    Select
                    </div>
                </button>

                {/* <div className="card-actions mb-4 rounded-lg h-11 bg-blue-500">
                    
                </div> */}
            </div>
        </div>
    );
};


Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func,
    handleTotalCredit: PropTypes.func
}

// export default Course;
export default Course;