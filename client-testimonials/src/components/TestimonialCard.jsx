import React from "react";

const TestimonialCard = ({name, review}) =>{
   return(
    <div className="testimonial-card">
    <div className="testimony-info">
        <h1>{name}</h1>
        <p>{review}</p>
    </div>
    </div>
   )
}

export default TestimonialCard