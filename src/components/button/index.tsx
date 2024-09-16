import React from "react"

const Button = ({type,children} : {type: "button" | "submit" | "reset", children: React.ReactNode}) => {
    return (
        <button type={type} className="min-w-96 min-h-12 border rounded-lg text-center border-[#5A5A5A] text-lg text-[#5A5A5A] transition-transform duration-300 hover:scale-105">
            {children}
        </button>
    )
}

export default Button