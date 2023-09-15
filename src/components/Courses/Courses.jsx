
import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({handleAddToCart,handleTotalCredit,totalcredit}) => {


    const [courses, setCourses] = useState([]);

    useEffect(()=>{

        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])

    return (
        <div className="md:w-2/3 max-w-full mx-auto grid md:grid-cols-1 lg:grid-cols-3">
            {/* <h1>{courses.length}</h1> */}
            {
                courses.map(course => <Course key={course.id} course={course}
                    handleAddToCart = {handleAddToCart}
                    handleTotalCredit = {handleTotalCredit}
                ></Course>)
            }
            <div>
                <h2>Total Credit Hour: {totalcredit}</h2>
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleAddToCart:PropTypes.func,
    handleTotalCredit:PropTypes.func,
    totalcredit: PropTypes.number
}

export default Courses;