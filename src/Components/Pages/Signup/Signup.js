import React from "react"
import SignupForm from "./SignupForm"
import UnProtectedPage from "../../Hooks/useUnprotectedPage"

const Signup = ({rightButtonText, setRightButtonText}) => {
    UnProtectedPage()
    return(
        <div>
            <SignupForm rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        </div>
    )
}
export default Signup