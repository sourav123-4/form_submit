import React from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Sucess from './Sucess'
function UserForm() {
    const [page,setPage]=React.useState(0)
    const FormTitles=["USERS INFO","Personal Info","Confirm","sucess"]
    const [formData,setFormData]=React.useState({
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        fatherName:"",
        motherName:"",
    })
    const pagedisplay=()=>{
        switch(page){
            case 0:
                return <FormUserDetails formData={formData} setFormData={setFormData}/>
            case 1:
                return <FormPersonalDetails formData={formData} setFormData={setFormData}/>
            case 2:
                return <Confirm formData={formData} setFormData={setFormData}/>
            case 3:
                return <Sucess/>
        }
    }
    function nextStep(){
        if(page>=0 && page<=2){
            setPage(count=>count+1)
        }
    }
    function prevStep(){
        if(page>=1 && page<=3){
            setPage(count=>count-1)
        }
    }
    return(
        <div className='form'>
            <div className='form-container'>
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='body'>
                    <h1>{pagedisplay()}</h1>
                </div>
                <div className='footer'>
                    {(page===0 || page===3)?"":<button onClick={prevStep}>Prev</button>}
                    {(page===2 || page===3)?(!(page===3)?<button onClick={nextStep}>Submit</button>:""):<button onClick={nextStep}>Next</button>}
                </div>
            </div>
        </div>
    )    
}

export default UserForm