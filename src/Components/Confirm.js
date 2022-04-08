import React from 'react'

function Confirm(props) {
  return (
    <div>
        <p>FirstName : {props.formData.firstName}</p>
        <p>LastName : {props.formData.lastName}</p>
        <p>Email : {props.formData.email}</p>
        <p>City : {props.formData.city}</p>
        <p>FatherName : {props.formData.fatherName}</p>
        <p>MotherName : {props.formData.motherName}</p>
    </div>
  )
}

export default Confirm