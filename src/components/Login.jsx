import React, { useState } from 'react'
import { ClosedEye, OpenedEye } from './common/svg'

const Login = ({ handleTabChange }) => {
    const [formData, setFormData] = useState({
        emailAddress: "",
        password: "",
        showPassword: false

    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(prevState => {
            return { ...prevState, password: "", emailAddress: "" }
        })
    }
    const handleChange = (e) => {

        const { name, value } = e.target
        setFormData(prevData => {
            return { ...prevData, [name]: value }
        })
    }
    const togglePassword = () => {
        setFormData(prevState => {
            return { ...prevState, showPassword: !prevState.showPassword }
        })
    }
    console.log(formData);
    return (
        <form action="" onSubmit={handleSubmit} className='flex flex-col py-8'>

            <label htmlFor="mail" className='uppercase text-wybt-primary font-[500] mb-1'>Email Address</label>
            <input type="email" name='emailAddress' id='mail' placeholder='Enter Email' className='border py-2 px-4 rounded-lg focus:outline-0 border-wybt-primary mb-3 bg-wybt-white' onChange={handleChange} value={formData.emailAddress} />
            <div className='relative flex flex-col'><label htmlFor="password" className='uppercase text-wybt-primary font-[500] mb-1 '>Password</label>
                <input type={formData.showPassword ? 'text' : "password"} name='password' id='password' placeholder='Enter Password' className='bg-wybt-white border py-2 px-4 rounded-lg focus:outline-0 border-wybt-primary mb-3 pr-10' value={formData.password} onChange={handleChange} />
                <button className='absolute right-0 flex items-center px-3 bg-transparent focus:outline-none' onClick={togglePassword}>{formData.showPassword ? (
                    <ClosedEye />) : (
                    <OpenedEye />)}</button>
            </div>
            <button className='bg-wybt-primary text-wybt-white p-2 rounded-lg '>Log In</button>
            <span className='text-center py-2  text-wybt-light-gray'>Or</span>
            <div className='flex flex-col gap-5'><button className='bg-wybt-neutral-white text-wybt-primary p-2 rounded-lg border-wybt-primary border'>Log in with Google</button>
                <button className='bg-wybt-neutral-white text-wybt-primary p-2 rounded-lg border-wybt-primary border'>Log in with Facebook</button>
                <button className='bg-wybt-neutral-white text-wybt-primary p-2 rounded-lg border-wybt-primary border'>Log in with Twitter</button>
            </div><p className='text-wybt-light-gray mt-5 text-sm'>
                Your privacy is important to us. We never sell your data.
            </p>
            <p className='text-wybt-primary'>Doesn't have an account ?  <span onClick={() => handleTabChange('signup')} className='cursor-pointer font-semibold'> Sign Up</span>
            </p>
        </form >
    )

}

export default Login