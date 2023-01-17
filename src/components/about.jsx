import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full bg-gradient-to-b
     from-gray-800 to-black text-white md:h-screen md:px-12'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div className='pb-8 pt-16'>
                <p className='text-4xl font-bold inline border-b-4
                 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorum doloremque iusto voluptatibus assumenda officiis 
                dignissimos aut, inventore et sapiente quidem ratione error 
                obcaecati quasi, itaque adipisci aliquid sed expedita 
                eligendi.
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolorum doloremque iusto voluptatibus assumenda officiis 
                dignissimos aut, inventore et sapiente quidem ratione error 
                obcaecati quasi, itaque adipisci aliquid sed expedita 
                eligendi.
            </p>
        </div>
    </div>
  )
}

export default About