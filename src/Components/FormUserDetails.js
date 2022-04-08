import React from 'react'

function FormUserDetails(props) {
  return (
    <div>
        {/* <h1>Enter Users Details</h1> */}
        <input placeholder='enter your First name'  value={props.formData.firstName} onChange={(event)=>{
            props.setFormData({...props.formData,firstName:event.target.value})
        }}/><br></br>
        <input placeholder='enter your lastname' value={props.formData.lastName} onChange={(event)=>{
            props.setFormData({...props.formData,lastName:event.target.value})
        }}/><br></br>
        <input placeholder='enter your email' value={props.formData.email} onChange={(event)=>{
            props.setFormData({...props.formData,email:event.target.value})
        }} /><br></br>
        {/* <button>Continue</button> */}
    </div>
  )
}

export default FormUserDetails