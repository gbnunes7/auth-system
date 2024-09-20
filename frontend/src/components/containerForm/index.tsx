const ContainerForm = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="w-2/4 flex flex-col justify-center items-center">
            {children}
        </div>
    )
}

export default ContainerForm