import React from "react";

export const Box = ({children, className})=> {
    return (
        <div className={`bg-white shadow-md rounded px-8 pt-6 pb-8 ${className}`}>
            {children}
        </div>
    )
} 