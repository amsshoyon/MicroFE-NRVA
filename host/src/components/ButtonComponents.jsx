import React from "react";
export const Button = ({children, type='button'})=> {
    return (
        <button type={type} className="px-8 py-3 bg-slate-900 text-white rounded">{children}</button>
    )
} 