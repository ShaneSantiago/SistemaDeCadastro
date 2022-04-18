import React, { useEffect } from "react"
import { useNavigate } from "react-router"

const UnProtectedPage = () => {
    const navigate = useNavigate()
    const goToProduct = () => {
        navigate("/product")
    }

    useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
        goToProduct()
    }
    }, [])
}
export default UnProtectedPage