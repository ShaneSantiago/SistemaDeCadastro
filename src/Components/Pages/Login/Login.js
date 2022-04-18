import React, { useEffect } from "react"
import LoginForm from "./LoginForm"
import UnProtectedPage from "../../Hooks/useUnprotectedPage"

const LoginPage = ({rightButtonText, setRightButtonText}) => {
    UnProtectedPage()
    return(
        <div>
            
            <LoginForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>

        </div>
    )
}
export default LoginPage