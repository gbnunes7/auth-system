import React from "react"

const Button = ({type,children,bgColor,fontColor} : {type: "button" | "submit" | "reset", children: React.ReactNode, bgColor: string,fontColor:string}) => {
    return (
        <button type={type} className="min-w-96 min-h-12 border rounded-lg text-center border-[#5A5A5A] text-lg transition-transform duration-300 hover:scale-105" style={{backgroundColor: `${bgColor}`, color: `${fontColor}`}}>
            {children}
        </button>
    )
}

export default Button