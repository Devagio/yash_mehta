import React from 'react'
import yruru from '../assets/yruru.png'
import chess from '../assets/chess.png'
import path_finder from '../assets/path_finder.png'
import hand_cricket from '../assets/hand_cricket.png'
import social_ticatctoe from '../assets/social_tictactoe.png'
import portfolio_website from '../assets/portfolio.png'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: social_ticatctoe,
            demo: 'https://socialtictactoe-production.up.railway.app/',
            code: 'https://github.com/Devagio/social_tictactoe'
        },
        {
            id: 2,
            src: portfolio_website,
            demo: 'https://devagio.github.io/yash_mehta',
            code: 'https://github.com/Devagio/yash_mehta'
        },
        {
            id: 3,
            src: chess,
            demo: 'https://devagio.itch.io/two-player-chess',
            code: 'https://github.com/Devagio/two_player_chess'
        },
        {
            id: 4,
            src: path_finder,
            demo: 'https://devagio.itch.io/path-finding-visualiser',
            code: 'https://github.com/Devagio/path_finding_visualiser'
        },
        {
            id: 5,
            src: yruru,
            demo: 'https://devagio.github.io/YruRU/',
            code: 'https://github.com/Devagio/YruRU'
        },
        {
            id: 6,
            src: hand_cricket,
            demo: 'https://devagio.github.io/Hand_cricket',
            code: 'https://github.com/Devagio/Hand_cricket'
        }
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black
     to-gray-800 w-full text-white md:h-screen md:px-12'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full'>
            <div className='pb-1 pt-16'>
                <p className='text-4xl font-bold inline border-b-4
                 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my technical 
                projects here. Please use Chrome for the demos.</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 
            gap-8 px-12 sm:px-0'>        
            {
                portfolios.map(({id, src, demo, code}) => (
                    <div key={id} className='shadow-md shadow-gray-600 
                    rounded-lg'>
                        <a href={demo}><img src={src} alt='' className='rounded-md 
                        duration-200 hover:scale-105' /></a>
                        <div className='flex items-center justify-center'>
                            <a href={demo} className='w-1/2 px-6 py-1 m-3 
                            duration-200 hover:scale-110 text-center'>Demo</a>
                            <a href={code} className='w-1/2 px-6 py-1 m-3
                            duration-200 hover:scale-110 text-center'>Code</a>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio