import { useParams } from "react-router-dom"
import Head from "./Head"
import Foot from "./Foot"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Request(){
    const {name,phone} = useParams()
    const navigate=useNavigate()
    const [form,setForm] = useState({
        customer_name:"",
        customer_phone:"",
        mail:"",
        date:"",
        session:"",
        service:"",
        service_man:name || "",
        service_phone:phone || ""
    })

    const submit=async (e)=>{
        e.preventDefault();
        try{
           const response=await axios.post("http://localhost:4040/e_service/request",form)
           console.log(response.data)

           setForm({
            customer_name:"",
            customer_phone:"",
            mail:"",
            date:"",
            session:"",
            service:"",
            service_man:"",
            service_phone:""
           })

            navigate("/request_accepted",{state:{
                name:form.service_man,
                service:form.service,
                phone:form.service_phone,
                req_date:form.date
            }})
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
        <Head />
        <div class="req-container">
    <form onSubmit={submit} className="req-form">
        <h2>Service Request form</h2>
      <input type="text" name="name" required autoFocus autoComplete="off" placeHolder="Name*" onChange={(e)=>{setForm({...form,customer_name:e.target.value})}} />
      <input type="tel" name="phone" required autoFocus autoComplete="off" placeHolder="Phone*" onChange={(e)=>{setForm({...form,customer_phone:e.target.value})}}/>
      <input type="email" name="mail" required autoFocus autoComplete="off" placeHolder="Mail" onChange={(e)=>{setForm({...form,mail:e.target.value})}} />
      <input type="date" name="date" required placeHolder="date*" onChange={(e)=>{setForm({...form,date:e.target.value})}} />
      <input type="text" name="session" placeHolder="session" onChange={(e)=>{setForm({...form,session:e.target.value})}} />
      <input type="text" name="service" required placeHolder="required service*" onChange={(e)=>{setForm({...form,service:e.target.value})}} />
      <input type="text" name="worker" value={name} placeHolder="Worker Name" onChange={(e)=>{setForm({...form,service_man:e.target.value})}} />
      <input type="tel" name="workerphone" value={phone} placeHolder="Worker phone" onChange={(e)=>{setForm({...form,service_phone:e.target.value})}} />
      <button type="submit" class="req-btn">Request</button>
    </form>

</div>
        <Foot />
        </>
    )
}

export default Request