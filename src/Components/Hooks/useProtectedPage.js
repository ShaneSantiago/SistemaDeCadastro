import React, { useEffect, useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"

const UseProtectedPage = () => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate("/login")
    }

    useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token){
        goToLogin()
    }
    }, [])
}
export default UseProtectedPage