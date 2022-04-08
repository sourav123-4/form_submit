import React from 'react'

function FormPersonalDetails(props) {
  return (
    <div>
        <input placeholder='enter your city' value={props.formData.city} onChange={(event)=>{
            props.setFormData({...props.formData,city:event.target.value})
        }}/><br></br>
        <input placeholder='enter your father name' value={props.formData.fatherName} onChange={(event)=>{
            props.setFormData({...props.formData,fatherName:event.target.value})
        }}/><br></br>
        <input placeholder='enter your mother name' value={props.formData.motherName} onChange={(event)=>{
            props.setFormData({...props.formData,motherName:event.target.value})
        }}/><br></br>
    </div>
  )
}

export default FormPersonalDetails