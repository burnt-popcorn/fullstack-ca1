import React from 'react'
import TestimonialCard from './components/TestimonialCard'
import './App.css'

const App = ()=>{
  const customers = [{
    id : 1,
    name : "Emily Watson",
    review : "This service was amazing! Highly recommended."
  },
{
  id : 2,
  name : "Harold Radcliffe",
  review : "The sevice was rather poor, the workers were not too kind"
},
{
  id : 3,
  name : "Rasmus Grint",
  review : "Excellent service, would definitely recommend."
}]

return(
  <div>
    {customers.map((customer,id)=>(
      <TestimonialCard key={id}{...customer}/>
    ))}
  </div>
)
}

export default App
