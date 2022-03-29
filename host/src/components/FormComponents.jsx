import React from "react";

export const Label = ({children}) => {
    return (
        <label className='block text-gray-500 font-bold mb-2'>{children}</label>
    )
}

export const Input = ({type='text', placeholder='', className, value= '', name='', onChange}) => {
    return (
        <input type={type} 
            className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`} 
            placeholder={placeholder} 
            value={value} 
            name={name}
            onChange={(e)=> onChange(e.target.value)}
        />
    )
}
