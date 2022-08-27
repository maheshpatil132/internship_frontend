import React, { useState } from 'react'
import Floating from './Floating'
import {AiOutlineEye} from 'react-icons/ai'

const Login = () => {

    // state variables
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type_pass, setType_pass] = useState(true)


    // functions
    const handle_email = (e)=>{
        setEmail(e.target.value)
    }
    const handle_pass = (e)=>{
        setPassword(e.target.value)
    }
    const set_pass_type = ()=>{
        setType_pass(!type_pass)
    }
    const submit_form = (e)=>{
        
    }
    return (
        <div className='p-3 fixed left-1/2 flex flex-col  -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-md bg-white w-96 border'>
            <form action="" onSubmit={submit_form} className=' p-3'>
                <div className="heading">
                    <h1 className=' text-heading my-1 text-code-text-heading font-semibold'>Welcome back!</h1>
                    <p className=' text-base text-code-text-color'>Login below or <span> <a href="/" className=' text-code-primary underline'>Create an Account</a></span></p>
                </div>
                <Floating/>
                <div className="input_cover my-5 space-y-2">
                    <h3 className='text-sm text-code-text-color'>Email</h3>
                    <input value={email} onChange={handle_email} type="email" className=' outline-none p-2 w-full border rounded border-code-primary'  />
                </div>
                <div className="input_cover my-5 space-y-2">
                    <h3 className='text-sm text-code-text-color'>Password</h3>
                    <div className=' p-2 flex gap-2 justify-between items-center w-full border rounded border-code-primary'>
                    <input value={password} onChange={handle_pass} type={type_pass ? 'password' : 'text'} className=' flex-1 outline-none'  />
                    <AiOutlineEye onClick={set_pass_type} cursor={'pointer'} size={20} color={ type_pass ? '#667080' : '#00A99D'}/>
                    </div>
                </div>
                <button type='submit' className='my-5 bg-code-primary text-white p-4 w-full rounded-md font-bold text-base'>Login</button>
                <span className=' font-bold text-code-primary block text-center'><a href="/" className='underline'>Forgot Password</a></span>
            </form>
        </div>
    )
}

export default Login