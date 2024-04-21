import React, { useState } from 'react'
import DashNavBar from '../components/dashboard/common/DashNavBar'
import SidebarContainer from '../components/dashboard/SidebarContainer'
import Footer from '../components/common/Footer'
const FormBuilder = () => {
    const [currentForm, setCurrentForm] = useState(1)

    const handleNext = (e) => {

        // e.preventDefault()
        setCurrentForm(prev => prev + 1)
    }
    const handlePrevious = (e) => {

        // e.preventDefault()
        setCurrentForm(prev => prev - 1)
    }
    return (
        <main>
            <DashNavBar />
            <div className="flex gap-12 h-screen">
                <SidebarContainer />
                <div className='w-full md:pr-24 gap-5 flex flex-col items-center h-screen'>
                    <div className='flex gap-4 justify-center mb-8'>
                        <button className={`${currentForm === 1 ? "font-semibold" : ""}`}>Event Name</button>
                        <button className={`${currentForm === 2 ? "font-semibold" : ""}`}>Event Details</button>
                        <button>Preview</button>
                        <button>URL</button>
                    </div>
                    {currentForm === 1 && (<div className='flex flex-col items-center gap-4 '>
                        <div><button>Event Name</button></div>
                        <h1 className='font-bold text-2xl text-wybt-primary'>What's the name of your event?</h1>
                        <form action="" className='flex gap-4 w-ful flex-col md:flex-row' onSubmit={handleNext}>
                            <input type="text" className='border-wybt-primary border rounded-md p-4 w-[20rem]' />
                            <button className='bg-wybt-primary py-4 px-8 rounded-md text-white'>Enter</button>
                        </form>
                        <button onClick={handleNext}>Next</button>
                    </div>)}
                    {currentForm === 2 && (<div className='flex flex-col items-center gap-4 '>
                        <h1 className='font-bold text-2xl text-wybt-primary'>What's the name of your event?</h1>
                        <form action="" className='flex gap-4 w-ful' onSubmit={handleNext}>
                            <input type="text" className='border-wybt-primary border rounded-md p-4 w-[20rem]' />
                            <button className='bg-wybt-primary py-1 px-8 rounded-md text-white'>Next</button>
                        </form>
                        <div>
                            <button onClick={handlePrevious}>Previous</button>
                            <button onClick={handleNext}>Next</button>
                        </div>
                    </div>)}
                </div>
            </div>
            <Footer />
        </main >
    )
}

export default FormBuilder