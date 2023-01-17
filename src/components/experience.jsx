import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import django from '../assets/django.png'
import tailwind_logo from '../assets/tailwind.png'
import react_logo from '../assets/react.png'
import python from '../assets/python.png'
import libraries from '../assets/libraries.png'
import languages from '../assets/languages.png'
import databases from '../assets/databases.png'
import git from '../assets/git.png'
import macos from '../assets/macos.png'


const Experience = () => {

    const links = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react_logo,
            title: 'React',
            style: 'shadow-sky-500'
        },
        {
            id: 5,
            src: tailwind_logo,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: libraries,
            title: 'ML/DS Libraries',
            style: 'shadow-gray-500'
        },
        {
            id: 8,
            src: django,
            title: 'Django',
            style: 'shadow-green-500'            
        },
        {
            id: 9,
            src: languages,
            title: 'Other Languages',
            style: 'shadow-purple-500'
        },
        {
            id: 10,
            src: databases,
            title: 'Databases',
            style: 'shadow-blue-500'
        },
        {
            id: 11,
            src: git,
            title: 'Git',
            style: 'shadow-orange-500'
        },
        {
            id: 12,
            src: macos,
            title: 'MacOS',
            style: 'shadow-gray-500'
        }
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800
    to-black w-full md:h-screen md:px-12'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
        justify-center w-full h-full text-white'>
            <div className='pt-16'>
                <p className='text-4xl font-bold border-b-4
                 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are some of the technologies I am fluent in.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 
            text-center py-4 px-12 sm:px-0'>
                {
                    links.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 
                        duration-300 py-1 rounded-lg ${style}`}>
                            <img src={src} alt='' className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience