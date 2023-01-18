import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-gradient-to-b
     from-black to-gray-800 p-4 text-white md:h-screen md:px-12'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg
        mx-auto h-full'>
            <div className='pb-8 pt-16'>
                <p className='text-4xl font-bold inline border-b-4
                 border-gray-500'>Contact</p>
                <p className='py-6'>My inbox is always open. Whether you have an opportunity for me, or just want to say hi, I'll do my best to get back to you!</p>
            </div>

            <div className='flex justify-center items-center'>
                <form 
                action="https://getform.io/f/54011afa-15e5-4b0f-96ac-ac9efa74f985" 
                className='flex flex-col w-full md:w-1/2' method='POST'>
                    <input type='text' name='name' placeholder='Enter your Name...' className='p-2 bg-transparent border-2 
                    rounded-md text-white focus:outline-none'  required/>
                    <input type='email' name='email' placeholder='Enter your Email-ID...' className='p-2 bg-transparent border-2 
                    rounded-md text-white my-4 focus:outline-none' required/>
                    <textarea name='message' placeholder='Enter your Message...' rows='6' className='p-2 bg-transparent 
                    border-2 rounded-md text-white focus:outline-none' required/>
                    <button className=' text-white bg-gradient-to-b
                     from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto 
                     flex items-center rounded-md hover:scale-110 
                     duration-300'>Let's Talk!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact