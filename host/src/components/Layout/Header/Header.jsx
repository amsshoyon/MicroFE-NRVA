import React from 'react'

const Header = () => {
  return (
    <header className="w-full py-4 bg-slate-300">
        <div className="container mx-auto">
            <nav className="flex justify-between items-center">
                <h2 className='text-2xl font-bold'>Micro-FE(Host)</h2>
                
                <ul className='flex'>
                    <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Menu 1</li>
                    <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Menu 2</li>
                    <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Menu 3</li>
                    <li className='hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Menu 4</li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header