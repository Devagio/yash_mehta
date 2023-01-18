import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full bg-gradient-to-b
     from-gray-800 to-black text-white h-screen md:px-12'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div className='pb-8 pt-16'>
                <p className='text-4xl font-bold inline border-b-4
                 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
              Hello! My name is Yash and I enjoy creating things that live
              on the internet. My interest in web development started back
              in 2020 when I decided to share a blogpost on Rubik's cubes,
              that ended up as a full-fledged website. I went on to learn
              all things coding, and even got to the top rank at the
              competitive coding website Codewars.
            </p>
            <br />
            <p className='text-xl'>
                Fast-forward to today, and I've had the honor of
                graduating with distinction from the prestigious Indian
                Institute of Science in Computational Astrophysics, and
                the privilege of working a spectrum of web development, data
                science, and machine learning projects in the process. My
                primary language of development is python, and I am always
                excited to learn more!
                
            </p>
        </div>
    </div>
  )
}

export default About