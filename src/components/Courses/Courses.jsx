
import { useState } from "react";
import { useEffect } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({handleAddToCart}) => {


    const [courses, setCourses] = useState([]);

    useEffect(()=>{

        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])

    return (
        <div className="md:w-2/3 grid grid-cols-3">
            {/* <h1>{courses.length}</h1> */}
            {
                courses.map(course => <Course key={course.id} course={course}
                    handleAddToCart = {handleAddToCart}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddToCart:PropTypes.func
}

export default Courses;