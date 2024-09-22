import { useEffect } from "react";
import useForm from "../../hooks/useFormContext"

const Private = ({children} : {children: React.ReactNode}) => {
    const {navigate, isLogged} = useForm()

    useEffect(() => {
        if (!isLogged) {
            navigate("/");
        }
    }, [isLogged, navigate]);
    
    return isLogged? children : null;
}

export default Private