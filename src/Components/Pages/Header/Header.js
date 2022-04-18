import { Button } from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ContainerHeader } from "./styled"
import { goToLogin, goToProductPage } from "../../Navigation/navigation"

const Header = ({rightButtonText, setRightButtonText}) => {
const token = localStorage.getItem("token")
const navigate = useNavigate()

const logout = () => {
    localStorage.removeItem("token")
}

const righButtonAction = () => {
    if(token){
        logout()
        setRightButtonText("Login")
        goToLogin(navigate)
    } else {
        goToLogin(navigate)
    }
}

    return(
        <ContainerHeader>
            <Button 
            color={"secondary"}
            onClick={() => goToProductPage(navigate)}
            >Home</Button>
            
            <Button 
            color={"secondary"}
            onClick={righButtonAction}
            >{rightButtonText}</Button>
        </ContainerHeader>
    )
}
export default Header